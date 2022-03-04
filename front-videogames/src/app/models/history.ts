
export interface History {
    id?:             number;
    date:           Date;
    quantity:       number;
    title:          string;
    totalPrice:     number;

}

export class Convert {
    public static toVideogame(json: string): History {
        return JSON.parse(json);
    }

    public static videogameToJson(value: History): string {
        return JSON.stringify(value);
    }
}
