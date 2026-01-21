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

claves.forEach((elem) => {
    console.log(yo[elem as keyof Persona]); //Para imprimir los valores de los atributos del objeto
})

//Union types
type HeroPowerScale = 'local' | 'planetary' | 'galactic';
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

//Intersection types

type HeroBasicInfo = {
    name: string
    age:number
}

type HeroProperties = {
    readonly id: HeroId
    isActive?: boolean
    powerScale: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties;

const CreateHero = (basicInfo: HeroBasicInfo, props: HeroProperties): Hero => {

    const {name, age} = basicInfo;
    const {isActive, powerScale} = props;

    return {
        name: name,
        age: age,
        id:crypto.randomUUID(),
        isActive: isActive,
        powerScale: powerScale
    };

}

console.log(JSON.stringify(CreateHero({name: 'Thor',age: 27},{id: crypto.randomUUID(), isActive: true, powerScale: "planetary" })));
