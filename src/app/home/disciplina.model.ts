export class Disciplina{
    public nome: String;
    public horasTotais: number;
    public horasCompletadas: number;


    constructor(nome: String, horasTotais: number, hoursCompletadas: number){
        this.nome = nome;
        this.horasTotais = horasTotais;
        this.horasCompletadas = hoursCompletadas;
    }

}