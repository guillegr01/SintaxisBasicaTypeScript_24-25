type Student = {
    name: string,
    mark:number,
}

const arrayStudents:Student[] = [
    {name:"Guillermo", mark:10},
    {name:"Ines", mark:0},
    {name:"Alvaro", mark:4.9}
];

const arrayAprobados:Student[] = arrayStudents.filter((elem:Student, i:Number) => {
    if (elem.mark>=5) {
        return elem;
    }
})

//console.log(arrayAprobados);

arrayAprobados.forEach((elem,i) => {
    console.log("El estudiante "+elem.name+" ha aprobado con una nota de "+elem.mark+".");
})