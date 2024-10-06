/**
 * Crear a partir de un array de objetos tipo personas, un array que solo almacene sus nombres.
 */

type Persona = {
    name:string,
    edad:number,
    apellido?:string,
}

const arrayPersonas:Persona[] = [{name:"Guillermo", edad:22}, {name:"Rosa", edad:56}, 
    {name:"Ines", edad:18}, {name:"Carlos", edad: 56, apellido:"Gil"}];

const arrayNombresPersonas:string[] = arrayPersonas.map((elem:Persona, i:number) => {
    return elem.name;
});

console.log(arrayNombresPersonas);