import {
  validate,
  required,
  string,
  email,
  number,
  array,
  object,
} from "./validation";

describe("Validation", () => {
  describe("required", () => {
    it("should pass for non-empty values", () => {
      expect(required("hello", "name").valid).toBe(true);
      expect(required(123, "age").valid).toBe(true);
      expect(required([], "items").valid).toBe(true);
    });

    it("should fail for empty values", () => {
      expect(required("", "name").valid).toBe(false);
      expect(required(null, "name").valid).toBe(false);
      expect(required(undefined, "name").valid).toBe(false);
    });
  });

  describe("string", () => {
    it("should validate string type", () => {
      expect(string("hello", "name").valid).toBe(true);
      expect(string(123, "name").valid).toBe(false);
    });

    it("should validate minLength", () => {
      expect(string("ab", "name", { minLength: 3 }).valid).toBe(false);
      expect(string("abc", "name", { minLength: 3 }).valid).toBe(true);
    });

    it("should validate maxLength", () => {
      expect(string("abcd", "name", { maxLength: 3 }).valid).toBe(false);
      expect(string("abc", "name", { maxLength: 3 }).valid).toBe(true);
    });

    it("should validate pattern", () => {
      expect(string("abc", "name", { pattern: /^\d+$/ }).valid).toBe(false);
      expect(string("123", "name", { pattern: /^\d+$/ }).valid).toBe(true);
    });
  });

  describe("email", () => {
    it("should validate email format", () => {
      expect(email("test@example.com", "email").valid).toBe(true);
      expect(email("invalid", "email").valid).toBe(false);
      expect(email("@example.com", "email").valid).toBe(false);
    });
  });

  describe("number", () => {
    it("should validate number type", () => {
      expect(number(123, "age").valid).toBe(true);
      expect(number("123", "age").valid).toBe(false);
    });

    it("should validate min/max", () => {
      expect(number(5, "age", { min: 10 }).valid).toBe(false);
      expect(number(15, "age", { max: 10 }).valid).toBe(false);
      expect(number(10, "age", { min: 10, max: 10 }).valid).toBe(true);
    });

    it("should validate integer", () => {
      expect(number(1.5, "count", { integer: true }).valid).toBe(false);
      expect(number(1, "count", { integer: true }).valid).toBe(true);
    });
  });

  describe("array", () => {
    it("should validate array type", () => {
      expect(array([], "items").valid).toBe(true);
      expect(array("not array", "items").valid).toBe(false);
    });

    it("should validate minItems", () => {
      expect(array([], "items", { minItems: 1 }).valid).toBe(false);
      expect(array([1], "items", { minItems: 1 }).valid).toBe(true);
    });

    it("should validate maxItems", () => {
      expect(array([1, 2, 3], "items", { maxItems: 2 }).valid).toBe(false);
      expect(array([1, 2], "items", { maxItems: 2 }).valid).toBe(true);
    });
  });

  describe("object", () => {
    it("should validate object type", () => {
      expect(object({}, "data", {}).valid).toBe(true);
      expect(object([], "data", {}).valid).toBe(false);
    });

    it("should validate nested fields", () => {
      const schema = {
        name: (v: unknown) => required(v, "name"),
        age: (v: unknown) => number(v, "age", { min: 0 }),
      };

      expect(object({ name: "John", age: 25 }, "user", schema).valid).toBe(
        true,
      );
      expect(object({ age: 25 }, "user", schema).valid).toBe(false);
    });
  });

  describe("validate", () => {
    it("should validate multiple fields", () => {
      const rules = {
        name: (v: unknown) => required(v, "name"),
        email: (v: unknown) => email(v, "email"),
      };

      expect(
        validate({ name: "John", email: "john@example.com" }, rules).valid,
      ).toBe(true);

      expect(validate({ name: "", email: "invalid" }, rules).valid).toBe(false);
    });
  });
});
