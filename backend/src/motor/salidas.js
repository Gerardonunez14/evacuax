export function obtenerSalidasHabilitadas(salidas) {
  return salidas.filter(salida => salida.estado === 'disponible');
}
