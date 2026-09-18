/**
 * FASE 21A — Input Validation Utilities
 *
 * Funções de validação para APIs.
 */

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validar que string não está vazia
 */
export function required(value: unknown, fieldName: string): ValidationResult {
  if (value === undefined || value === null || value === "") {
    return { valid: false, errors: [`${fieldName} é obrigatório`] };
  }
  return { valid: true, errors: [] };
}

/**
 * Validar string com tamanho mínimo/máximo
 */
export function string(
  value: unknown,
  fieldName: string,
  opts?: { minLength?: number; maxLength?: number; pattern?: RegExp },
): ValidationResult {
  if (typeof value !== "string") {
    return { valid: false, errors: [`${fieldName} deve ser uma string`] };
  }

  const errors: string[] = [];

  if (opts?.minLength && value.length < opts.minLength) {
    errors.push(
      `${fieldName} deve ter pelo menos ${opts.minLength} caracteres`,
    );
  }

  if (opts?.maxLength && value.length > opts.maxLength) {
    errors.push(`${fieldName} deve ter no máximo ${opts.maxLength} caracteres`);
  }

  if (opts?.pattern && !opts.pattern.test(value)) {
    errors.push(`${fieldName} tem formato inválido`);
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validar email
 */
export function email(value: unknown, fieldName: string): ValidationResult {
  if (typeof value !== "string") {
    return { valid: false, errors: [`${fieldName} deve ser uma string`] };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return { valid: false, errors: [`${fieldName} deve ser um email válido`] };
  }

  return { valid: true, errors: [] };
}

/**
 * Validar número
 */
export function number(
  value: unknown,
  fieldName: string,
  opts?: { min?: number; max?: number; integer?: boolean },
): ValidationResult {
  if (typeof value !== "number" || isNaN(value)) {
    return { valid: false, errors: [`${fieldName} deve ser um número`] };
  }

  const errors: string[] = [];

  if (opts?.integer && !Number.isInteger(value)) {
    errors.push(`${fieldName} deve ser um número inteiro`);
  }

  if (opts?.min !== undefined && value < opts.min) {
    errors.push(`${fieldName} deve ser maior ou igual a ${opts.min}`);
  }

  if (opts?.max !== undefined && value > opts.max) {
    errors.push(`${fieldName} deve ser menor ou igual a ${opts.max}`);
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validar array
 */
export function array(
  value: unknown,
  fieldName: string,
  opts?: { minItems?: number; maxItems?: number },
): ValidationResult {
  if (!Array.isArray(value)) {
    return { valid: false, errors: [`${fieldName} deve ser um array`] };
  }

  const errors: string[] = [];

  if (opts?.minItems && value.length < opts.minItems) {
    errors.push(`${fieldName} deve ter pelo menos ${opts.minItems} itens`);
  }

  if (opts?.maxItems && value.length > opts.maxItems) {
    errors.push(`${fieldName} deve ter no máximo ${opts.maxItems} itens`);
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validar objeto com schema
 */
export function object(
  value: unknown,
  fieldName: string,
  schema: Record<string, (v: unknown) => ValidationResult>,
): ValidationResult {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { valid: false, errors: [`${fieldName} deve ser um objeto`] };
  }

  const errors: string[] = [];
  const obj = value as Record<string, unknown>;

  for (const [key, validator] of Object.entries(schema)) {
    const result = validator(obj[key]);
    if (!result.valid) {
      errors.push(...result.errors);
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validar vários campos de uma vez
 */
export function validate(
  data: Record<string, unknown>,
  rules: Record<string, (v: unknown) => ValidationResult>,
): ValidationResult {
  const errors: string[] = [];

  for (const [field, validator] of Object.entries(rules)) {
    const result = validator(data[field]);
    if (!result.valid) {
      errors.push(...result.errors);
    }
  }

  return { valid: errors.length === 0, errors };
}
