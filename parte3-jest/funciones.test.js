const { calcularArea, cambiarNombre, esCuadrado } = require("./funciones");

test("calcularArea(4, 3) es 6", () => {
    expect(calcularArea(4, 3)).toBe(6);
});
test("calcularArea(4, 3) no es 10", () => {
    expect(calcularArea(4, 3)).not.toBe(10);
});

test("cambiarNombre con cadena vacia devuelve null", () => {
    expect(cambiarNombre("")).toBeNull();
});
test("cambiarNombre con Ana no devuelve null", () => {
    expect(cambiarNombre("Ana")).not.toBeNull();
});

test("esCuadrado(5, 5) es true", () => {
    expect(esCuadrado(5, 5)).toBe(true);
});
test("esCuadrado(5, 3) no es true", () => {
    expect(esCuadrado(5, 3)).not.toBe(true);
});