# Password Strength Meter

## Trigger Phrase
"Crie um medidor de força de senha" / "Adicione validação de senha com barra visual"

## Description
Componente React + TypeScript que exibe a força da senha em tempo real com barra colorida e dicas de validação.

## Components
- `PasswordStrengthMeter` - Barra de força com 4 níveis
- `PasswordInput` - Input com toggle show/hide + strength meter integrado

## Features
- 4 níveis: weak (vermelho), fair (amarelo), strong (azul), very-strong (verde)
- Requisitos visuais: 8+ chars, maiúscula, minúscula, número, símbolo
- Animações com Framer Motion
- Acessível (ARIA labels)

## File Location
`skills/password-strength-meter/scripts/PasswordStrengthMeter.tsx`

## Usage
```tsx
import PasswordInput from './PasswordStrengthMeter';

<PasswordInput
  value={password}
  onChange={setPassword}
  showStrength={true}
/>
```
