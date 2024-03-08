//1. Implementar ES6 para toda la estructura del código.
//2.-Crear una función asíncrona para obtener los datos de la URL
const get_albumes = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  //3.-Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción awaitpara recibir el valor directamente de la promesa
  try {
    const datos = await fetch(url);
    const albumes = await datos.json();
    //4.-Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
    console.log(albumes.slice(0, 20));
  } catch (error) {
    console.log(error);
  }
};
//5.-Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.
const funcion_promesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
};

//6.-Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
const funcion_asincrona = async () => {
  get_albumes();
  const msg = await funcion_promesa();
  console.log(msg);
};
funcion_asincrona();
