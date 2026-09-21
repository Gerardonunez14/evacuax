import { analizarCorredor } from '../motor/ocupacion.js';

export function resumirEscenario(escenario) {
  return { nombre: escenario.nombre, corredores: escenario.corredores.map(analizarCorredor) };
}
