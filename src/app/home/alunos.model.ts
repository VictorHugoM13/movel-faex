import { Curso } from './curso.model';
export class Aluno {
    id: string;
    nome: string;
    curso_obj: Curso;
    curso: string;
    horasCompletadas: number;
    status: string;
   
    

    constructor(id: string, nome: string, curso: string, horasCompletadas: number, status: string) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.horasCompletadas = horasCompletadas;
        this.status = status;
        
    }
}