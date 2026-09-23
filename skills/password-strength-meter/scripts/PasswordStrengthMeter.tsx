import { useState } from "react";
import { motion } from "framer-motion";
import { View, ViewOff } from "@carbon/icons-react";

interface PasswordStrengthMeterProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  showStrength?: boolean;
  label?: string;
  id?: string;
}

interface StrengthResult {
  score: number;
  label: string;
  color: string;
  percent: number;
}

function checkPasswordStrength(password: string): StrengthResult {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  const levels: Record<number, { label: string; color: string; percent: number }> = {
    0: { label: "Muito fraca", color: "#ef4444", percent: 25 },
    1: { label: "Fraca", color: "#f97316", percent: 50 },
    2: { label: "Razoável", color: "#eab308", percent: 75 },
    3: { label: "Forte", color: "#22c55e", percent: 90 },
    4: { label: "Muito forte", color: "#16a34a", percent: 100 },
  };

  const level = levels[score] || levels[0];
  return { score, ...level };
}

export default function PasswordStrengthMeter({
  value,
  onChange,
  placeholder = "Digite sua senha",
  showStrength = true,
  label = "Senha",
  id = "password",
}: PasswordStrengthMeterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const strength = checkPasswordStrength(value);

  const requirements = [
    { label: "8+ caracteres", met: value.length >= 8 },
    { label: "Maiúscula", met: /[A-Z]/.test(value) },
    { label: "Minúscula", met: /[a-z]/.test(value) },
    { label: "Número", met: /\d/.test(value) },
    { label: "Símbolo", met: /[^a-zA-Z0-9]/.test(value) },
  ];

  return (
    <div className="password-field">
      <label htmlFor={id} className="password-label">
        {label}
      </label>
      <div className="password-input-wrapper">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="password-input"
          autoComplete="new-password"
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? <ViewOff size={20} /> : <View size={20} />}
        </button>
      </div>

      {showStrength && value.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="password-strength"
        >
          <div className="strength-bar-container">
            <motion.div
              className="strength-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${strength.percent}%` }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: strength.color }}
            />
          </div>
          <span className="strength-label" style={{ color: strength.color }}>
            {strength.label}
          </span>

          <div className="password-requirements">
            {requirements.map((req) => (
              <div
                key={req.label}
                className={`requirement ${req.met ? "met" : ""}`}
              >
                <span className="req-icon">{req.met ? "✓" : "○"}</span>
                {req.label}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
