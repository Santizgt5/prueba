
export interface Videogame {
    id:             number;
    title:          string;
    stock:          number;
    companyId:      string;
    releaseDate:    string;
    platform:       string;
    price:          number;
}

export class Convert {
    public static toVideogame(json: string): Videogame {
        return JSON.parse(json);
    }

    public static videogameToJson(value: Videogame): string {
        return JSON.stringify(value);
    }
}
