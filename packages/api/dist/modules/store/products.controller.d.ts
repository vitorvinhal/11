export declare class ProductsController {
    list(): Promise<any>;
    create(product: {
        image_url: string;
        description: string;
        price: number;
    }): Promise<any>;
}
