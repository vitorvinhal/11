import { AppShell } from "../../components/AppShell";
import { AuthGate } from "../../components/AuthGate";

export const metadata = {
  title: "Rede Neural — 11",
};

export const dynamic = "force-dynamic";

export default function NeuralPage() {
  return (
    <AuthGate>
      <AppShell initialNav="neural" />
    </AuthGate>
  );
}
