# EvacuaX - TP 1

Base académica para Metodología de Sistemas II, UTN FRT, 2026.
El proyecto completo será un sistema web de simulación y comparación de estrategias de evacuación.
Este TP implementa solamente dos funciones pequeñas del motor y practica Git.
No incluye todavía interfaz Vue.js, servidor Express, base MySQL ni cálculo de rutas o tiempos.

## Ejecutar
Con Node.js 20 o superior, desde la carpeta del proyecto:
```bash
npm run demo
npm test
```
No requiere descargar dependencias ni ejecutar npm install.
En main queda la versión inicial. Para ejecutar ambas funciones, usar feature/salidas-habilitadas.

## Organización
- frontend/: espacio reservado para Vue.js.
- backend/src/motor/: lógica inicial del modelo.
- backend/src/escenarios/: resumen de los datos de un escenario.
- database/: espacio reservado para scripts MySQL.
- docs/: decisiones técnicas, evidencia y guía del TP.
- test/: verificaciones del comportamiento.

## Estado
Historial local real, generado con asistencia de IA. Los commits no simulan autores humanos.
La publicación remota y los Pull Requests todavía deben realizarse y revisarse por el estudiante.
No crear un repositorio nuevo a partir de archivos sueltos: clonar evacuax.bundle para conservar el historial.
Los umbrales son parámetros académicos de este modelo; no constituyen validación de seguridad de un edificio.
