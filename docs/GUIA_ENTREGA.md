# TP 1 - EvacuaX: guía de uso y entrega

## Qué contiene
- `Informe_TP1_EVACUAX.pdf`: informe de dos páginas; indica las tareas remotas pendientes.
- `codigo/`: copia legible del código y documentación; no incluye la carpeta .git.
- `evacuax.bundle`: repositorio Git portable con todos los commits y ramas.
- Esta guía: restauración, ejecución, publicación y revisión.

No alcanza con entregar el PDF: la cátedra pide un enlace a un repositorio real y un Pull Request revisado e integrado.
La base fue preparada con asistencia de IA. Revisá el código y las decisiones antes de presentarlo; los commits indican su procedencia y no atribuyen trabajo a compañeros ficticios.

## 1. Recuperar el historial en Windows
Extraé el ZIP. Abrí Git Bash en la carpeta `EVACUAX_TP1` que contiene el archivo `evacuax.bundle`.
Ejecutá, uno por uno:

```bash
git clone -b main evacuax.bundle evacuax
cd evacuax
git branch feature/ocupacion-corredores origin/feature/ocupacion-corredores
git branch feature/salidas-habilitadas origin/feature/salidas-habilitadas
git switch feature/salidas-habilitadas
git log --all --graph --oneline --decorate
```

Ahora `evacuax` sí tiene el historial real. Abrí esa carpeta en VS Code.
No uses `git init` sobre `codigo/` para la entrega: eso crearía otro historial y perderías la evidencia del ejercicio.
Configurá tu nombre y correo para los commits que vos hagas desde ahora (reemplazá los textos):

```bash
git config user.name "TU NOMBRE"
git config user.email "TU CORREO DE GITHUB"
```

## 2. Ejecutar y entender
Necesitás Git y Node.js 20 o superior instalados. No se requieren dependencias externas.

```bash
npm run demo
npm test
```

La demo debe devolver el corredor C-04 con ocupación 188 %, estado Crítico, y E-02 como única salida habilitada. Las 8 pruebas deben pasar.
No hay página web para abrir todavía. Esta es la base del TP de versionado, no el TFI completo.
La capacidad del corredor representa personas simultáneas en este modelo; no debe confundirse con el caudal de una salida en personas/minuto.
Los intervalos se fijaron sin superposición: hasta 70 % Normal; más de 70 y hasta 100 % Alta; más de 100 y hasta 130 % Congestionado; más de 130 % Crítico.
Filtrar salidas habilitadas no prueba que sean alcanzables: ese análisis pertenece al cálculo de rutas futuro.

## 3. Publicar en un repositorio nuevo
Creá en tu cuenta de GitHub un repositorio vacío llamado `evacuax`, sin README ni archivos iniciales. Si ya existe un repositorio con trabajo, no lo reemplaces: esta guía supone un remoto vacío.
Copiá su dirección HTTPS y reemplazá `TU_USUARIO` en el comando. `origin` ya existe porque primero apuntaba al bundle.

```bash
git remote set-url origin https://github.com/TU_USUARIO/evacuax.git
git push -u origin main
git push -u origin feature/ocupacion-corredores
git push -u origin feature/salidas-habilitadas
git push origin tp1-inicio
```

El primer push publica la versión inicial de main. Los siguientes publican el trabajo de las ramas.
Si se solicita autenticación, completá el acceso en tu equipo; no compartas contraseñas ni tokens en el chat.
No ejecutes un merge local a main y lo subas antes de abrir el Pull Request: se necesita conservar un cambio pendiente de integración para el ejercicio.

## 4. Crear el Pull Request
En GitHub seleccioná `feature/salidas-habilitadas` y usá **Compare & pull request**. Configurá:

- **base:** `main`
- **compare:** `feature/salidas-habilitadas`

Usá el título y contenido de `docs/PR_PROPUESTO.md` y creá el Pull Request. Esta rama ya contiene la fusión local de `feature/ocupacion-corredores`, por lo que el PR integra las dos funciones y conserva todos los commits.
Fuente: [Crear un Pull Request, GitHub Docs](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

## 5. Revisar antes de integrar
Leé los archivos modificados y los commits. Ejecutá las pruebas. Comprobá los seis puntos del checklist preparado. La cátedra permite revisión propia o de otro estudiante.
Dejá un comentario real en el PR con tus observaciones y resultados antes del merge. Indicá qué revisaste, qué resultado obtuviste y si quedan ajustes; no afirmes una revisión que todavía no hiciste. Si el repositorio requiere aprobación de otra persona, esa revisión debe completarse.
Las revisiones permiten dejar comentarios y registrar decisiones antes de integrar. Fuente: [Revisiones de Pull Requests, GitHub Docs](https://docs.github.com/en/pull-requests/reference/pull-request-reviews).

Tras la revisión, integrá el PR usando **Create a merge commit** para conservar los commits separados; evitá squash o rebase en este ejercicio. Conservá las ramas hasta que se evalúe el TP.
Luego actualizá tu copia:

```bash
git switch main
git pull --ff-only origin main
npm test
git log --all --graph --oneline --decorate
```

## 6. Completar el informe y entregar
El informe actual describe lo realizado localmente y declara pendientes la publicación y el PR. Luego de hacerlos, completá nombre, comisión, URL del repositorio, URL del PR y fecha/revisor, y actualizá ese estado. Hay una versión editable en `docs/INFORME_EDITABLE.md`.
Entregá el enlace al repositorio y el informe final de 1 a 2 páginas por el canal de la cátedra. Si el repositorio es privado, la persona que evalúa debe tener acceso.

## Qué se cumplió y qué falta
| Consigna | Estado de esta preparación |
|---|---|
| Repositorio y carpetas | Hecho localmente |
| Commit inicial y push | Commit hecho; push pendiente |
| Dos tareas y dos commits por rama | Hecho |
| Conflicto controlado | Producido realmente en Git |
| Resolución razonada | Hecha y registrada en un merge commit |
| Pull Request y revisión previa | Pendiente en GitHub; texto y checklist preparados |
| Documento breve | Preparado, con estado real de avance |

## Explicación para defenderlo oralmente
Un commit registra una versión del trabajo. Una rama permite trabajar en una tarea sin cambiar main. Las dos ramas nacieron del mismo commit y modificaron el mismo resumen de maneras diferentes. Git no podía elegir automáticamente. Se conservaron ambos imports y ambos campos porque la ocupación y la disponibilidad de salidas son datos complementarios. Las pruebas comprueban que ninguno desapareció. El Pull Request permitirá revisar ese resultado antes de incorporarlo a main.

## Volver a observar el conflicto (opcional, en una copia de práctica)
No hace falta repetirlo para conservar la evidencia: ya está en el historial. Si querés entenderlo en la computadora, desde `EVACUAX_TP1` creá una copia separada:

```bash
git clone -b main evacuax.bundle practica-conflicto
cd practica-conflicto
git switch -c practica 735cccabdc09a596326c6170548306df120f3657
git merge origin/feature/ocupacion-corredores
```

Git se detendrá en `backend/src/escenarios/resumen.js`. Abrí el archivo para ver las marcas. Para salir de esta práctica sin alterar la entrega:

```bash
git merge --abort
```

El texto exacto del conflicto original está en `docs/conflicto-real.txt` de la rama de salidas.
