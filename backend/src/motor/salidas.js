export function obtenerSalidasHabilitadas(salidas) {
  if (!Array.isArray(salidas)) throw new TypeError('Las salidas deben ser una lista.');
  for (const salida of salidas) {
    if (!salida || !['disponible', 'bloqueada'].includes(salida.estado)) {
      throw new TypeError('Cada salida debe estar disponible o bloqueada.');
    }
  }
  return salidas.filter(salida => salida.estado === 'disponible');
}
