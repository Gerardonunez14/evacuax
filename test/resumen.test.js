import test from 'node:test';
import assert from 'node:assert/strict';
import { resumirEscenario } from '../backend/src/escenarios/resumen.js';

test('La resolución conserva ocupación y salidas disponibles', () => {
  const resumen = resumirEscenario({nombre:'Prueba',corredores:[{id:'C-04',personasActuales:47,capacidad:25}],salidas:[{id:'E-01',estado:'bloqueada'},{id:'E-02',estado:'disponible'}]});
  assert.equal(resumen.nombre,'Prueba');
  assert.equal(resumen.corredores[0].ocupacion,188);
  assert.equal(resumen.corredores[0].estado,'Crítico');
  assert.deepEqual(resumen.salidasHabilitadas.map(s => s.id),['E-02']);
});
test('El resumen admite un escenario vacío', () => {
  assert.deepEqual(resumirEscenario({nombre:'Vacío',corredores:[],salidas:[]}),{nombre:'Vacío',corredores:[],salidasHabilitadas:[]});
});
