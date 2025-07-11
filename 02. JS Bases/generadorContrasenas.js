function checkLongitud(longitud) {
  /* TU CODIGO */
  if (longitud === "") return "Debe ingresar la longitud";

  if (typeof longitud !== "string") return "La longitud debe ser un número";

  if (longitud < 3) return "La longitud debe ser mayor o igual a 3";

  if (longitud > 10) return "La longitud debe ser menor o igual a 10";

  return longitud;
}

function generarContrasena(
  longitud,
  incluirEspeciales,
  incluirNumeros,
  incluirMayusculas
) {
  /* TU CODIGO */
  //a. Crear una variable que contenga todas las posibles letras que se incluirán en la contraseña ( abecedario en letras minúsculas )
  var letras = "abcdefghijklmnopqrstuvwxyz";

  //b. Crear una variable que contenga todos los posibles números que se incluirán en la contraseña
  var numeros = "0123456789";

  // c. Crear una variable que contenga todos los posibles caracteres especiales que se incluirán en la contraseña
  var especiales = "!@#$%^&*()_+[]{}|;:,.<>?";

  //d. Crear una variable que contenga todas las posibles letras Mayúsculas que se incluirán en la contraseña
  var letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //e. Crear una variable que guarde solo los caracteres en una contraseña normal ( solo letras )
  var caracteresDisponibles = letras;

  //f.  Si el usuario desea incluir caracteres especiales en la contraseña se debe agregar a la variable que guarda los caracteres disponibles ( concatenar a los caracteres disponibles, los caracteres especiales ), el listado de caracteres especiales.
  if (incluirEspeciales === true)
    caracteresDisponibles = especiales + caracteresDisponibles;

  if (incluirNumeros === true)
    caracteresDisponibles = numeros + caracteresDisponibles;

  if (incluirMayusculas === true)
    caracteresDisponibles = letrasMayusculas + caracteresDisponibles;

  //i. Crea una variable que guardará la contraseña final devuelta al usuario, inicializa esta variable con un string vacío
  var contrasena = "";

  //j. Generar una condición para la cual - Si la longitud recibida es mayor o igual a 3:
  if (longitud >= 3) {
    //1 - Genera un valor aleatorio utilizando el objeto Math
    var aleatorio = Math.random();
    //2 - Multiplica este valor por la cantidad (longitud) de "caracteresDisponibles"
    var aleatorioMultDisponibles = aleatorio * caracteresDisponibles.length;
    //3 - Extrae el valor entero de la multiplicación anterior
    var valorEntero = Math.floor(aleatorioMultDisponibles);
    //4 - Extrae el carácter dentro del listado de "caracteresDisponibles", que se encuentre en la posicion del numero entero generado.
    var caracter = caracteresDisponibles.charAt(valorEntero);
    // 5 - concatena este carácter a la "contrasena" generada anteriormente (la que inicializamos como string vacío).
    contrasena = contrasena + caracter;

    //6 - repite este proceso 3 veces más
    var aleatorio2 = Math.random();
    var aleatorioMultDisponibles2 = aleatorio2 * caracteresDisponibles.length;
    var valorEntero2 = Math.floor(aleatorioMultDisponibles2);
    var caracter2 = caracteresDisponibles.charAt(valorEntero2);
    contrasena = contrasena + caracter2;

    var aleatorio3 = Math.random();
    var aleatorioMultDisponibles3 = aleatorio3 * caracteresDisponibles.length;
    var valorEntero3 = Math.floor(aleatorioMultDisponibles3);
    var caracter3 = caracteresDisponibles.charAt(valorEntero3);
    contrasena = contrasena + caracter3;

    //7 - Devuelve la contraseña generada
    return "contraseña generada: " + contrasena;
  }
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
