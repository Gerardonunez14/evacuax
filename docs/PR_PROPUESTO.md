# Integra ocupación de corredores y salidas habilitadas en EvacuaX

## Problema
La base del proyecto solo devuelve el nombre del escenario. Se necesita conocer la ocupación de los corredores y cuáles salidas están disponibles para alimentar el futuro motor de simulación.

## Cambios
- Calcula porcentaje de ocupación y clasifica Normal, Alta, Congestionado y Crítico.
- Valida cantidades enteras no negativas y capacidades enteras positivas.
- Excluye salidas bloqueadas y rechaza estados desconocidos.
- Integra ambas funciones en el resumen, conservando los cambios de dos ramas.
- Documenta el conflicto real y su resolución.

## Verificación local del asistente
Se ejecutaron `npm test` (8 pruebas aprobadas) y `npm run demo`.
La demo debe mostrar C-04 con 188 % y estado Crítico, y únicamente E-02 habilitada.
Estos resultados deben comprobarse nuevamente por quien revise el PR.

## Revisión humana pendiente
Marcar después de revisar el código en GitHub, antes del merge:
- [ ] El título y la descripción explican el cambio y su motivo.
- [ ] Las funciones hacen lo declarado y no hay código temporal olvidado.
- [ ] Los mensajes de commit describen el avance con claridad.
- [ ] El alcance se limita a las dos funciones y su integración.
- [ ] Se comprobaron las pruebas y la demo.
- [ ] Se verificó que la resolución conserva ambos cambios.

No incluye todavía el simulador completo, React, Express ni MySQL.
