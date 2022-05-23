export class Aluno {
    id: string;
    nome: string;
    curso: string;
    horasCompletadas: number;
    horasTotais: number;
    

    constructor(id: string, nome: string, curso: string, horasCompletadas: number, horasTotais: number) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.horasCompletadas = horasCompletadas;
        this.horasTotais = horasTotais;
    }
}