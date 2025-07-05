export interface TSpecification {
    name: string;
    specification: string;
}

interface TRating {
    rate: number;
    count: number;
}

export interface TProduct {
    _id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: TRating;
    specifications: TSpecification[];
}
