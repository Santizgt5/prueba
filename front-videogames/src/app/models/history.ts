
export interface History {
    id:             number;
    date:           string;
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
