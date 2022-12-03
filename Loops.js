
let count = 1;
const Person = {
    nombre: "Daniel",
    apellido: "Perez"
}
const Persons = [{nombre:"Oscar",apellido:"Martinez"}, {nombre:"Pepe",apellido:"Glez"}];
const array = [3,5,7,9]
const DobleArray=[[1,2],[2,3]]

// WHILE
hola:
while (count < 5) {
    console.log(count);
    count++;
} 
while (count <10) {
    console.log(count);
    hola : break;
    
}


// DO WHILE
/* let menuPizza = "menu pizza select an option"

do{
    console.log(menuPizza);
    count++;
}while(count <= 3); */
//FOR

/* for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    if(array[index]==5){
        
        //break;
        //continue;
    }
    
} */
//FOR IN

/* for (const key in Person) {
    //PRINT THE KEYS
    /* console.log(key); */
    // PRINT VALUE OF KEYS
    /* console.log(Person[key]); */
    //PRINT VALUE AND KEYS
    /*console.log(`${key}: ${Person[key]}`); 
} */
//FOR IN PRINT ARRAYS
/* 
for (const key in array) {
    console.log(key);
} */
//FOR OFF
//for of in an object
/* for (const iterator of Person) {
    console.log(iterator);
} */
/* for (const iterator of Object.entries(Person)) {
    console.log(iterator);
} */
/* for (const iterator of array) {
    console.log(iterator);
} */
//FOR EACH
/* console.log(array.forEach(element => {
    console.log(element);
})) */
// AUXILIAR STATEMENTS
/* array.forEach(element => {
    console.log(element);
}); */