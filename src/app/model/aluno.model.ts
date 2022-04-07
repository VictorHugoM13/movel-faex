export class Aluno {
    ra: number;
    nome: string;
    senha: string;

    constructor(ra: number, nome: string, senha: string) {
        this.ra = ra;
        this.nome = nome;
        this.senha = senha;
    }
}