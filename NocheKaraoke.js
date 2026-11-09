
//Funcion que recibe arreglo de numeros enteros.

function prepareSongs(canciones) {
    //Primero verificamos el tamaño del arreglo
    //Si este es 0, significa que no tiene "canciones" en el arreglo
    if(canciones.length === 0) {
        return "No existen canciones";
    }

    //1.Para almacenar canciones unicas, primero creamos un arreglo vacio
    let temp = [];
    
    //2. Crea un primer ciclo que recorre todos los elementos del ciclo
    //tomando el primer elemento del arreglo
    for(const song of canciones) {
        //2.1 Creamos una bandera de control que nos indica
        //si el elemento actual fue agregado o no
        let agregado = false;
        
        //3. Creamos un segundo ciclo que recorre el arreglo temporal
        for (const existe of temp) {
            //3.1  Comparamos si el elemento actual del primer ciclo es igual al elemento actual del segundo ciclo
            if (song === existe) {
                //En caso de ser verdadero, significa que el elemento actual del primer ciclo
                //ya existe en el arreglo temporal
                agregado = true;
                break;
            }
        }
        //Si la condición nunca se cumplio, significa que el elemento actual del primer ciclo
        //no existe en el arreglo temporal
        //por lo que procedemos a agregar el elemento actual del primer ciclo al arreglo temporal.
        if (agregado === false) {
            temp.push(song);
        }
    }    

    //Por ultimo solo retornamos el arreglo ordenado
    //uso de la función sort para acortar codigo
    return temp.sort();
}

//EXPLICACIÓN DE FUNCIONAMIENTO
/*
Al principio de la función tenemos un bloque que evalua una condición de longitud del arreglo
Si el arreglo es 'estrictamente igual' a 0, significa que este no contiene elementos.

Posteriomente declaramos un arreglo temporal que nos ayudara a almacenar los elementos sin repetición.

Declaramos un ciclo for que tomara siempre el elemento actual del arreglo, es decir, si tenemos un arreglo [1,2,3],
este ciclo tomara el elemento 1.

Dentro de este tenemos una bandera de control (boolean) que señala si algun elemento fue agregado o no a nuestro arreglo temporal.

Seguido, tenemos un segundo ciclo que recorre todo el arreglo temporal.
Dentro de este ciclo tenemos una condición: 'Si el elemento actual del primer ciclo, existe en el arreglo temporal' este no se agregara
lo que cambiara la bandera de control a true, indicando que este ya existe y rompiendo el segundo ciclo

La función de nuestro segundo ciclo es recorrer todo el arreglo temporal y ver si el elemento que tenemos en el primer ciclo,
existe en el arreglo temporal, ayudandonos con nuestro segundo ciclo y la condición.

En caso de que el segundo ciclo recorre todo el arreglo temporal, y este no haya encontrado existencia del elemento actual del primer ciclo
este se agregara al arreglo temporal.

Finalmente se retorna el arreglo ordenado.
*/

const songs1 = [3, 1, 2, 3, 4, 2, 5]
const playlist1 = prepareSongs(songs1)
console.log(playlist1) // [1, 2, 3, 4, 5]

const songs2 = [6, 5, 5, 5, 5]
const playlist2 = prepareSongs(songs2)
console.log(playlist2) // [5, 6]

const songs3 = []
const playlist3 = prepareSongs(songs3)
console.log(playlist3) // []
// Nadie anotó nada, la lista queda vacía
