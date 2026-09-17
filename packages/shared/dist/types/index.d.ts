export interface AgentState {
    mood: 'calma' | 'caotica' | 'focada' | 'prestativa';
    lastUpdated: string;
}
export interface Persona {
    name: string;
    style: {
        tone: string;
        keywords: string[];
        emojis: string[];
    };
}
export interface Product {
    id: string;
    imageUrl: string;
    description: string;
    price: number;
}
