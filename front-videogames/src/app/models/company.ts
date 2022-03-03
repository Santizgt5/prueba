
export interface Company {
    id:             number;
    name:           string;
    description:    string;
    born:           Date;
    nit:            string;
}

export class Convert {
    public static toCompany(json: string): Company {
        return JSON.parse(json);
    }

    public static companyToJson(value: Company): string {
        return JSON.stringify(value);
    }
}
