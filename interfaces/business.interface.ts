export interface Business {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    urls?: { link: string; label: string }[];
}