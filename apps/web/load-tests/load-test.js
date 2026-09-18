/* eslint-disable no-undef */
/**
 * FASE 30 — Load Tests (k6)
 *
 * Testes de carga para APIs do projeto 11.
 * Execute com: k6 run apps/web/load-tests/load-test.js
 *
 * Requisitos: instalar k6 (https://k6.io)
 */

import http from "k6/http";
import { check, sleep } from "k6";
import { Rate, Trend, Counter } from "k6/metrics";

// Métricas customizadas
const errorRate = new Rate("errors");
const requestDuration = new Trend("request_duration", true);
const requestCount = new Counter("requests_total");

// Configuração
const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export const options = {
  // Cenários de carga
  scenarios: {
    // Cenário 1: Carga constante (smoke test)
    smoke: {
      executor: "constant-vus",
      vus: 2,
      duration: "30s",
      tags: { scenario: "smoke" },
    },
    // Cenário 2: Ramp-up progressivo
    ramp: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "20s", target: 10 },
        { duration: "30s", target: 10 },
        { duration: "20s", target: 20 },
        { duration: "30s", target: 20 },
        { duration: "20s", target: 0 },
      ],
      tags: { scenario: "ramp" },
    },
    // Cenário 3: Carga constante alta
    stress: {
      executor: "constant-vus",
      vus: 50,
      duration: "1m",
      tags: { scenario: "stress" },
    },
  },
  // Thresholds (critérios de aceitação)
  thresholds: {
    http_req_duration: ["p(95)<2000", "p(99)<5000"],
    errors: ["rate<0.1"],
    http_req_failed: ["rate<0.05"],
  },
};

// Setup (executa uma vez antes do teste)
export function setup() {
  console.log(`Iniciando load test em ${BASE_URL}`);

  // Verificar se o servidor está acessível
  const res = http.get(`${BASE_URL}/api/health`);
  if (res.status !== 200) {
    throw new Error(`Servidor não acessível: ${res.status}`);
  }

  return { baseUrl: BASE_URL };
}

// Testes principais
export default function (data) {
  const baseUrl = data.baseUrl;

  // Grupo 1: Health endpoints (sem auth)
  group("Health Endpoints", () => {
    const res = http.get(`${baseUrl}/api/health`);
    check(res, {
      "health status 200": (r) => r.status === 200,
      "health response time < 500ms": (r) => r.timings.duration < 500,
    });
    errorRate.add(res.status !== 200);
    requestDuration.add(res.timings.duration);
    requestCount.add(1);
  });

  sleep(0.5);

  // Grupo 2: Version endpoint (sem auth)
  group("Version Endpoint", () => {
    const res = http.get(`${baseUrl}/api/version`);
    check(res, {
      "version status 200": (r) => r.status === 200,
      "version has data": (r) => {
        try {
          const json = JSON.parse(r.body);
          return json.version !== undefined;
        } catch {
          return false;
        }
      },
    });
    errorRate.add(res.status !== 200);
    requestDuration.add(res.timings.duration);
    requestCount.add(1);
  });

  sleep(0.5);

  // Grupo 3: System endpoint (sem auth)
  group("System Endpoint", () => {
    const res = http.get(`${baseUrl}/api/system`);
    check(res, {
      "system status 200": (r) => r.status === 200,
      "system response time < 1000ms": (r) => r.timings.duration < 1000,
    });
    errorRate.add(res.status !== 200);
    requestDuration.add(res.timings.duration);
    requestCount.add(1);
  });

  sleep(0.5);

  // Grupo 4: Admin pages
  group("Admin Pages", () => {
    const res = http.get(`${baseUrl}/admin`);
    check(res, {
      "admin status 200": (r) => r.status === 200,
      "admin response time < 2000ms": (r) => r.timings.duration < 2000,
    });
    errorRate.add(res.status !== 200);
    requestDuration.add(res.timings.duration);
    requestCount.add(1);
  });

  sleep(0.5);

  // Grupo 5: Health dashboard
  group("Health Dashboard", () => {
    const res = http.get(`${baseUrl}/health`);
    check(res, {
      "health page status 200": (r) => r.status === 200,
    });
    errorRate.add(res.status !== 200);
    requestDuration.add(res.timings.duration);
    requestCount.add(1);
  });

  sleep(1);
}

// Teardown (executa uma vez depois do teste)
export function teardown(data) {
  console.log("Load test concluído");
  console.log(`Base URL: ${data.baseUrl}`);
}
