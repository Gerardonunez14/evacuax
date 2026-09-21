import { analizarCorredor } from '../motor/ocupacion.js';
import { obtenerSalidasHabilitadas } from '../motor/salidas.js';

export function resumirEscenario(escenario) {
  return {
    nombre: escenario.nombre,
    corredores: escenario.corredores.map(analizarCorredor),
    salidasHabilitadas: obtenerSalidasHabilitadas(escenario.salidas)
  };
}
