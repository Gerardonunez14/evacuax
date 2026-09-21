import test from 'node:test';
import assert from 'node:assert/strict';
import { obtenerSalidasHabilitadas } from '../backend/src/motor/salidas.js';

test('Excluye salidas bloqueadas sin modificar la lista original', () => {
  const salidas = [{id:'E-01',estado:'bloqueada'},{id:'E-02',estado:'disponible'}];
  const antes = structuredClone(salidas);
  assert.deepEqual(obtenerSalidasHabilitadas(salidas), [salidas[1]]);
  assert.deepEqual(salidas, antes);
});
test('Devuelve lista vacía si no hay salidas disponibles', () => {
  assert.deepEqual(obtenerSalidasHabilitadas([]), []);
  assert.deepEqual(obtenerSalidasHabilitadas([{estado:'bloqueada'}]), []);
});
test('Rechaza lista o estados inválidos', () => {
  for (const dato of [null, {}, [null], [{estado:'desconocida'}]]) assert.throws(() => obtenerSalidasHabilitadas(dato), TypeError);
});
