import { obtenerSalidasHabilitadas } from '../motor/salidas.js';

export function resumirEscenario(escenario) {
  return { nombre: escenario.nombre, salidasHabilitadas: obtenerSalidasHabilitadas(escenario.salidas) };
}
