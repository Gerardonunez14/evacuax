import test from 'node:test';
import assert from 'node:assert/strict';
import { analizarCorredor } from '../backend/src/motor/ocupacion.js';

test('Clasifica los límites sin solapamientos', () => {
  for (const [personasActuales, estado] of [[0,'Normal'],[70,'Normal'],[71,'Alta'],[100,'Alta'],[101,'Congestionado'],[130,'Congestionado'],[131,'Crítico']]) {
    assert.equal(analizarCorredor({personasActuales, capacidad:100}).estado, estado);
  }
});
test('47 personas en capacidad 25 producen 188 %', () => {
  assert.deepEqual(analizarCorredor({id:'C-04',personasActuales:47,capacidad:25}), {id:'C-04',ocupacion:188,estado:'Crítico'});
});
test('Rechaza capacidad cero y cantidades inválidas', () => {
  for (const capacidad of [0,-1,1.5,NaN,Infinity]) assert.throws(() => analizarCorredor({personasActuales:1,capacidad}), RangeError);
  for (const personasActuales of [-1,1.5,NaN,Infinity]) assert.throws(() => analizarCorredor({personasActuales,capacidad:25}), RangeError);
});
