import { resumirEscenario } from './escenarios/resumen.js';
const escenario = {
  nombre: 'EvacuaX - escenario académico',
  corredores: [{ id: 'C-04', personasActuales: 47, capacidad: 25 }],
  salidas: [
    { id: 'E-01', estado: 'bloqueada' },
    { id: 'E-02', estado: 'disponible' }
  ]
};
console.log(JSON.stringify(resumirEscenario(escenario), null, 2));
