import { AppShell } from "../../components/AppShell";
import { AuthGate } from "../../components/AuthGate";

export const metadata = {
  title: "Canvas Generativo — 11",
};

export const dynamic = "force-dynamic";

export default function CanvasPage() {
  return (
    <AuthGate>
      <AppShell initialNav="canvas" />
    </AuthGate>
  );
}
