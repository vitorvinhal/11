import { JobQueue, jobQueue } from "./job-queue";

describe("JobQueue", () => {
  let queue: JobQueue;

  beforeEach(() => {
    queue = new JobQueue({
      concurrency: 2,
      pollIntervalMs: 50,
      defaultTimeoutMs: 5000,
      maxAttempts: 2,
    });
  });

  afterEach(() => {
    queue.stop();
  });

  it("should add a job", () => {
    const job = queue.addJob("test", { data: "hello" });
    expect(job.id).toBeDefined();
    expect(job.type).toBe("test");
    expect(job.status).toBe("pending");
    expect(job.payload).toEqual({ data: "hello" });
  });

  it("should add job with priority", () => {
    const low = queue.addJob("test", { data: "low" }, { priority: 0 });
    const high = queue.addJob("test", { data: "high" }, { priority: 10 });
    expect(high.priority).toBeGreaterThan(low.priority);
  });

  it("should cancel a pending job", () => {
    const job = queue.addJob("test", { data: "cancel" });
    const result = queue.cancelJob(job.id);
    expect(result).toBe(true);
    expect(queue.getJob(job.id)).toBeUndefined();
  });

  it("should not cancel a running job", async () => {
    let resolvePromise: () => void;
    const blockPromise = new Promise<void>((resolve) => {
      resolvePromise = resolve;
    });

    queue.registerHandler("slow", async () => {
      await blockPromise;
      return "done";
    });

    const job = queue.addJob("slow", {});

    queue.start();
    await new Promise((r) => setTimeout(r, 100));

    // Job should be gone from pending (picked up for processing) but not cancellable
    const cancelled = queue.cancelJob(job.id);
    expect(cancelled).toBe(false);

    resolvePromise!();
  });

  it("should process a job successfully", async () => {
    queue.registerHandler("success", async (payload) => {
      return `result: ${payload.value}`;
    });

    const job = queue.addJob("success", { value: 42 });

    queue.start();
    await new Promise((r) => setTimeout(r, 200));

    expect(job.status).toBe("completed");
    expect(job.result).toBe("result: 42");
  });

  it("should retry failed jobs", async () => {
    let attempts = 0;
    queue.registerHandler("retry", async () => {
      attempts++;
      if (attempts === 1) throw new Error("First attempt fails");
      return "success";
    });

    const job = queue.addJob("retry", {}, { maxAttempts: 2 });

    queue.start();
    await new Promise((r) => setTimeout(r, 3000));

    expect(attempts).toBe(2);
    expect(job.status).toBe("completed");
  });

  it("should fail after max attempts", async () => {
    queue.registerHandler("always-fail", async () => {
      throw new Error("Always fails");
    });

    const job = queue.addJob("always-fail", {}, { maxAttempts: 2 });

    queue.start();
    await new Promise((r) => setTimeout(r, 3000));

    expect(job.status).toBe("failed");
    expect(job.error).toBe("Always fails");
  });

  it("should report stats", () => {
    queue.addJob("test", {});
    queue.addJob("test", {});

    const stats = queue.stats;
    expect(stats.pending).toBe(2);
    expect(stats.total).toBe(2);
  });

  it("should fail job without handler", async () => {
    const job = queue.addJob("unknown-type", {});
    queue.start();
    await new Promise((r) => setTimeout(r, 200));

    expect(job.status).toBe("failed");
    expect(job.error).toContain("Handler não registrado");
  });

  it("singleton jobQueue should exist", () => {
    expect(jobQueue).toBeDefined();
  });
});
