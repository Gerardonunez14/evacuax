# TP 1 - Versionado y trabajo colaborativo

**Proyecto:** EvacuaX

**Materia:** Metodología de Sistemas II - UTN FRT - 2026

**Estudiante y comisión:** completar

**Estado:** preparación local; publicación y PR pendientes.

## 1. Proyecto y alcance

EvacuaX es un sistema web proyectado para representar edificios mediante grafos, configurar emergencias y comparar estrategias de evacuación. Para este TP se preparó una base JavaScript ejecutable con Node.js y dos funciones pequeñas del motor. React, Express, MySQL, las rutas y la simulación visual corresponden a etapas posteriores.

## 2. Organización del repositorio

Se separaron frontend/ (interfaz prevista), backend/src/motor/ (ocupación y salidas), backend/src/escenarios/ (resumen), database/ (persistencia prevista), docs/ (decisiones y evidencia) y test/ (verificaciones). package.json reúne los comandos de ejecución. .gitignore excluye dependencias, archivos de entorno y resultados temporales.

## 3. Estrategia de ramas

Se utilizó main como base y una rama por tarea. Ambas nacieron del mismo commit inicial. feature/ocupacion-corredores calcula el porcentaje y estado de ocupación; feature/salidas-habilitadas filtra las salidas disponibles. Esta separación permite desarrollar y revisar cada tarea de forma independiente. No se agregó una rama develop porque el alcance de esta práctica no la requiere.

## 4. Commits y trazabilidad

El historial contiene un commit inicial, dos commits propios de cada funcionalidad, un commit de fusión que resuelve el conflicto y documentación posterior. Los mensajes expresan cambios concretos. Los identificadores siguientes permiten comprobar el recorrido en Git; la autoría indica la asistencia de IA empleada.

| Registro | Commit | Contenido |
|---|---|---|
| Base | 4b9db23 | Estructura inicial y escenario |
| Ocupación 1 | 8d6939d | Cálculo y clasificación |
| Ocupación 2 | 32390d1 | Validaciones y pruebas |
| Salidas 1 | 9e47846 | Filtrado de disponibles |
| Salidas 2 | 735ccca | Validaciones y pruebas |
| Resolución | f370a69 | Conserva ambas funciones |

## 5. Conflicto provocado y resolución

1. Las dos ramas modificaron backend/src/escenarios/resumen.js partiendo de la misma base: una agregó corredores y la otra salidasHabilitadas.
2. Desde feature/salidas-habilitadas se ejecutó git merge --no-ff feature/ocupacion-corredores. Git informó un conflicto de contenido.
3. Se analizaron ambas versiones: elegir solo una eliminaba la información incorporada por la otra tarea.
4. Se editaron las líneas conflictivas, conservando ambos imports, el nombre del escenario y los dos campos del resumen. Se retiraron las marcas de conflicto.
5. Se ejecutaron las pruebas, se marcaron los archivos con git add y se confirmó la resolución con un commit que explica el motivo.

## 6. Decisión técnica y comprobación

La ocupación se calcula como personas actuales / capacidad × 100. Se definieron límites no superpuestos: hasta 70 % Normal; hasta 100 % Alta; hasta 130 % Congestionado; por encima, Crítico. Se rechazan cantidades inválidas y capacidad cero. Las salidas bloqueadas se excluyen; si no hay disponibles, se devuelve una lista vacía. Son parámetros académicos del modelo.
Las 8 pruebas automatizadas pasaron, incluida la comprobación de ambas funciones después del merge. La demo produce C-04 con 188 % y estado Crítico, y E-02 como única salida disponible. Esta verificación no valida todavía rutas ni tiempos de evacuación.

## 7. Pull Request y estado de entrega

Se dejó main en la versión inicial para que la integración final pueda realizarse mediante un Pull Request real. La rama feature/salidas-habilitadas contiene ambas funcionalidades y la resolución del conflicto. Se preparó el título, descripción y checklist: claridad del cambio, comportamiento esperado, mensajes comprensibles y alcance acotado.
Pendiente: publicar el repositorio, abrir el PR hacia main, registrar una revisión propia o de un compañero antes del merge e integrarlo. Estos pasos todavía no fueron ejecutados ni se presentan como hechos. El informe deberá actualizarse con los enlaces y la revisión una vez realizados.

**Repositorio / PR / revisión:** completar con evidencia real al finalizar.

**Referencia:** Dossier de Cátedra, Metodología de Sistemas II, UTN FRT, 2026, pp. 12-19.
