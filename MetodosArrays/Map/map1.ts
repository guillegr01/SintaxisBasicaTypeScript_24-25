/**
 * Crear a partir de un array de objetos tipo personas, un array que solo almacene sus nombres.
 */

type Persona = {
    nombre:string,
    edad:number,
    apellido?:string,
}

const arrayPersonas:Persona[] = [{nombre:"Guillermo", edad:22}, {nombre:"Rosa", edad:56}, 
    {nombre:"Ines", edad:18}, {nombre:"Carlos", edad: 56, apellido:"Gil"}];

const arrayNombresPersonas:string[] = arrayPersonas.map((elem:Persona, i:number) => {
    return elem.nombre;
});

console.log(arrayNombresPersonas);