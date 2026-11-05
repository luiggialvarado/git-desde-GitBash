/**
 * Calcula el area de un triangulo
 * @param {number} base - La base del triangulo
 * @param {number} altura - La altura del triangulo
 * @returns {number}  El area del triangulo
 */
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

/**
 * Describe una figura a partir de su nombre
 * @param {string} nombre - El nombre de la figura
 * @returns {string} - La descripcion de la figura
 */
function describir(nombre) {
    return "Esta es una figura llamada: " + nombre;
}

/**
 * Cambia el nombre de una figura
 * @param {string} nombreActual  - El nombre actual de la figura
 * @param {string} nuevoNombre - El nuevo nombre de la figura
 * @returns {string} - El nombre actualizado de la figura
 */
function cambiarNombre(nombreActual, nuevoNombre) {
    return nuevoNombre;
}

/**
 * Comprueba si una figura es un cuadrado
 * @param {number} lado1 - El primer lado de la figura
 * @param {number} lado2 - El segundo lado de la figura
 * @returns {string} "Es un cuadrado." si los lados son iguales, de lo contrario "No es un cuadrado."
 */
function esCuadrado(lado1, lado2) {
    if (lado1 === lado2) {
        return "Es un cuadrado.";
    } else {
        return "No es un cuadrado.";
    }
}