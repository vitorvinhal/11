import { Search, Mail, Calendar, FileText, MessageSquare, GitBranch, BookOpen, Globe } from 'lucide-react';

export const PROVIDERS = [
  { id: 'google', name: 'Google', category: 'Google', description: 'Drive, Gmail e Calendar', authType: 'oauth', icon: Search, popular: true },
  { id: 'slack', name: 'Slack', category: 'Comunicação', description: 'Mensagens e canais do Slack', authType: 'oauth', icon: MessageSquare, popular: true },
  { id: 'github', name: 'GitHub', category: 'Codificação', description: 'Repositórios e pull requests', authType: 'oauth', icon: GitBranch, popular: true },
  { id: 'notion', name: 'Notion', category: 'Notas', description: 'Páginas e workspaces do Notion', authType: 'oauth', icon: BookOpen, popular: false },
  { id: 'gmail', name: 'Gmail', category: 'Google', description: 'Emails e caixa de entrada', authType: 'oauth', icon: Mail, popular: true },
  { id: 'calendar', name: 'Google Calendar', category: 'Google', description: 'Eventos e agenda', authType: 'oauth', icon: Calendar, popular: false },
  { id: 'drive', name: 'Google Drive', category: 'Google', description: 'Arquivos em nuvem', authType: 'oauth', icon: FileText, popular: false },
  { id: 'web', name: 'Web Search', category: 'Automatização', description: 'Pesquisa na internet', authType: 'none', icon: Globe, popular: true },
];