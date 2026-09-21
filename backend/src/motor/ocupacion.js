export function analizarCorredor({ id, personasActuales, capacidad }) {
  const ocupacion = personasActuales / capacidad * 100;
  // Intervalos sin solapamiento: [0,70], (70,100], (100,130], (130,+infinito).
  const estado = ocupacion <= 70 ? 'Normal'
    : ocupacion <= 100 ? 'Alta'
    : ocupacion <= 130 ? 'Congestionado' : 'Crítico';
  return { id, ocupacion, estado };
}
