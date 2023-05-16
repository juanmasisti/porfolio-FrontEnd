export class Skill {
    id?: number;
    titulo:string;
    parrafo:string;
    porcentaje:number;

    constructor(titulo: string, parrafo: string, porcentaje: number){
        this.titulo = titulo;
        this.parrafo = parrafo;
        this.porcentaje = porcentaje
    }
}