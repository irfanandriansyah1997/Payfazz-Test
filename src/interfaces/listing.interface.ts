export interface ListingInterface {
    id: number;
    name: string;
    price: number;
    unitCost: number;
}

export interface ResponseListingRest {
    count: number;
    data: ListingInterface[];
}
