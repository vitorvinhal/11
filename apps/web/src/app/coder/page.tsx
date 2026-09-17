import ElevenCoder from '../../components/ElevenCoder';

export const metadata = {
  title: 'Eleven Coder — Terminal Interativo',
  description: 'Terminal web interativo com PTY real, WebSocket e xterm.js',
};

export default function CoderPage() {
  return (
    <main className="h-screen w-screen overflow-hidden" style={{ background: '#05050A' }}>
      <ElevenCoder />
    </main>
  );
}
