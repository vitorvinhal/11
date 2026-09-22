interface SlideInput {
    heading: string;
    content: string;
}
export declare function generatePPTX(title: string, slides: SlideInput[]): Promise<{
    message: string;
}>;
export {};
