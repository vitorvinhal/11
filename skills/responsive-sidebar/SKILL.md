# Responsive Sidebar Navigation

## Trigger Phrase
"Crie uma sidebar responsiva" / "Menu lateral com bottom nav no mobile"

## Description
Componente de navegação lateral responsiva que se transforma em bottom navigation no mobile, com animações e suporte a submenus.

## Components
- `Sidebar` - Container principal com menu
- `SidebarItem` - Item de navegação com ícone
- `BottomNav` - Barra inferior para mobile
- `SubMenu` - Menu expansível com animação

## Features
- Desktop: sidebar fixa com 240px
- Tablet: sidebar colapsada com ícones
- Mobile: bottom navigation bar
- Animações com Framer Motion
- Tema dark/light
- Badges e notificações
- Submenus expansíveis

## File Location
`skills/responsive-sidebar/scripts/Sidebar.tsx`

## Usage
```tsx
import Sidebar from './Sidebar';

const menuItems = [
  { icon: <Home />, label: 'Home', path: '/' },
  { icon: <Chart />, label: 'Dashboard', path: '/dashboard' },
  { icon: <Settings />, label: 'Config', path: '/settings' },
];

<Sidebar items={menuItems} />
```
