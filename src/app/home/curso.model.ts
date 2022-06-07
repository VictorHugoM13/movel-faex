export class Curso {
    id : string;
    nome : string;
    horasTotais : number;

    constructor(id: string, nome: string, horasTotais: number) {
        this.id = id;
        this.nome = nome;
        this.horasTotais = horasTotais;
    }
}