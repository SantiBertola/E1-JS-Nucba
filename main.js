const pizzas = [ 
{
   id: 1,
   nombre: "Pizza Especial",
   precio: 500,
   ingredientes: ["Jamon cocido", "Tomate", "Aceitunas", "Huevo", "Pimiento"],  
}, {
   id: 2,
   nombre: "Pizza de Palmitos",
   precio: 1000,
   ingredientes: ["Jamon cocido", "Tomate", "Salsa Golf", "Palmitos"] ,
}, {
   id: 3,
   nombre: "Pizza Napolitana",
   precio: 550,
   ingredientes: ["Jamon cocido", "Oregano", "Tomate", "Aceitunas", "Huevo"] ,
}, {
   id: 4,
   nombre: "Pizza de Anana",
   precio: 800,
   ingredientes: ["Jamon cocido", "Anana", "Aceitunas", "Azucar negra"] ,
}, {
   id: 5,
   nombre: "Pizza de Rucula",
   precio: 700,
   ingredientes: ["Jamon cocido", "Rucula", "Aceitunas", "Queso rallado"] ,
}, {
   id: 6,
   nombre: "Pizza Fugazzeta",
   precio: 650,
   ingredientes: ["Cebolla", "Pimienta", "Aceitunas Negras", "Queso"] ,
},


];
// console.log(pizzas)

// A) Pizza id Impar

const pizzaImpar = pizzas.forEach((pizzas) => {
    if (pizzas.id % 2 !== 0) {
        console.log(`El id de ${pizzas.nombre} es impar. Su ID es ${pizzas.id}`)
}});

// B) Pizza < $600

const pizzaBaratas = pizzas.forEach((pizzas) => {
    if (pizzas.precio < 600) {
        console.log(`La ${pizzas.nombre} vale menos de 600$ . Cuesta ${pizzas.precio} pesos`)
    }
})

// C) Todas las pizzas con su precio

const listaPizzas = pizzas.map((lista) =>{
    console.log(`La ${lista.nombre} cuesta $${lista.precio}` )})


// D) Todos los ingredientes de cada Pizza


pizzas.forEach((listaPizzas) => {
   console.log(`La ${listaPizzas.nombre} contiene estos ingredientes: ${listaPizzas.ingredientes}`)
})