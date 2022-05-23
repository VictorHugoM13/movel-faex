export class Usuario {
    id: string;
    nome: string;
    senha: string;
    tipo: string;

    constructor(id: string, nome: string, senha: string, tipo: string) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.tipo = tipo;
    }
}