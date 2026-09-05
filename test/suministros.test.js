// Prueba unitaria para el modulo de suministros
function validarConsumo(cantidad) {
  if (cantidad < 0) return false;
  return true;
}

test('CP-01: Rechaza consumos negativos', () => {
  expect(validarConsumo(-5)).toBe(false);
});

test('CP-01: Acepta consumos validos', () => {
  expect(validarConsumo(10)).toBe(true);
});
