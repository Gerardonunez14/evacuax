export function analizarCorredor({ id, personasActuales, capacidad }) {
  if (!Number.isSafeInteger(personasActuales) || personasActuales < 0) {
    throw new RangeError('Las personas actuales deben ser un entero no negativo.');
  }
  if (!Number.isSafeInteger(capacidad) || capacidad <= 0) {
    throw new RangeError('La capacidad debe ser un entero positivo.');
  }
  const ocupacion = personasActuales / capacidad * 100;
  // Intervalos sin solapamiento: [0,70], (70,100], (100,130], (130,+infinito).
  const estado = ocupacion <= 70 ? 'Normal'
    : ocupacion <= 100 ? 'Alta'
    : ocupacion <= 130 ? 'Congestionado' : 'Crítico';
  return { id, ocupacion, estado };
}
