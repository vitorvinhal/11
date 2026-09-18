import { AppShell } from "../../components/AppShell";
import { AuthGate } from "../../components/AuthGate";

export const metadata = {
  title: "Memória Auditável — 11",
};

export const dynamic = "force-dynamic";

export default function MemoriaPage() {
  return (
    <AuthGate>
      <AppShell initialNav="memoria" />
    </AuthGate>
  );
}
