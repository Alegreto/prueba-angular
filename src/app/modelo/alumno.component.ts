
export class Alumno{
    public id:number;
    public nombre:string;
    public apellido:string;
    public ciudad:string;

    constructor(id:number, nombre:string, apellido:string, ciudad:string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
    }
}