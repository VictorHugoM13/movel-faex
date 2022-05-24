export class Token {
    public id: string;
    public token: string;
    public timestamp?: number;
    public status?: string;

    constructor(id: string, token: string, timestamp?: number, status?: string) {
        this.id = id;
        this.token = token;
        this.timestamp = timestamp;
        this.status = status;
    }
}