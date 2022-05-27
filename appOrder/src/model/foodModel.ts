export interface Food {
    id: string;
    category: string;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    };
    title: string;
}
export interface FoodCategory{
    id?: string;
    name: string;
}
