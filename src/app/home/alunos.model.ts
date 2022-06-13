import { Curso } from './curso.model';
export class Aluno {
    id: string;
    nome: string;
    curso_obj: Curso;
    curso: string;
    horasCompletadas: number;
    
   
    

    constructor(id: string, nome: string, curso: string, horasCompletadas: number) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.horasCompletadas = horasCompletadas;
        
        
    }
}