type Casa = {
    plantas:number;
}

type Persona = {
    name:string,
    age:number,
    coche:boolean,
    amigos?:string[],
    casa?:Casa, //la interrogacion es para que la variable casa no sea obligatoria inicializarla para crear un obj persona
}

const yo: Persona = {
    name:"Guillermo",
    age:21,
    coche : true,
    amigos : ["algo"]
}

console.log(yo.casa?.plantas || "No tengo casa");

const claves = Object.keys(yo);//devuelve los atributos que tiene el objeto(name,age,coche,amigos)

claves.forEach((elem,i) => {
    console.log(yo[elem as keyof Persona]); //Para imprimir los valores de los atributos del objeto
})