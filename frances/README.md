# Français 🇫🇷

App para aprender francés. Examen de nivelación, lecciones con teoría y ejemplos,
conjugador de 178 verbos, tarjetas de vocabulario, expresiones reales, modo escucha
y repaso espaciado. Todo el francés se puede oír.

## Cómo usarla

Se abre desde el navegador, en la compu y en el celular, con la misma URL.
En el cel, "Agregar a pantalla de inicio" la instala como app en pantalla completa.

La primera vez pide hacer un **examen de nivelación** de 40 preguntas de dificultad
creciente. El nivel no sale de cuántas aciertas en total: sale del punto más alto
en el que sigues respondiendo bien de forma consistente, con umbral del 60% y sin
saltos. Quien acierta todo A1 y A2 pero falla B1 es un A2 sólido, no un B1 flojo.

## Dos modos

La app detecta el ancho de pantalla y cambia de modo sola. Se puede forzar desde
Progreso → Ajustes.

| | **Práctica** (celular) | **Estudio** (computadora) |
|---|---|---|
| Para | ratos muertos, 3 minutos | sentarse a estudiar |
| Contenido | tarjetas, memoria, drills, escucha | lecciones largas, teoría, tablas |

## Qué tiene dentro

- **35 lecciones** de A1 a B2 con teoría extensa, tablas, ejemplos con audio y
  avisos de las trampas específicas para hispanohablantes.
- **178 verbos** conjugados en 12 tiempos, incluido el *passé simple* para poder
  leer literatura.
- **307 palabras** en 11 mazos temáticos, cada sustantivo con su género.
- **118 expresiones** que los franceses dicen de verdad, marcadas por registro.
- **28 recursos externos** verificados uno por uno.
- **Modo escucha**: la lección leída en voz alta, alternando voz española para la
  explicación y francesa para los ejemplos. Para el coche o el metro.
- **Repaso espaciado**: lo que fallas vuelve; lo que aciertas se aleja.

## Cómo está construido

Sin dependencias, sin build, sin servidor. HTML, CSS y JavaScript plano.

```
frances/
├── index.html            carcasa y estilos
├── js/
│   ├── conjugueur.js     motor de conjugación
│   ├── app.js            vistas, router y lógica de estudio
│   ├── audio.js          síntesis de voz y cola del modo escucha
│   ├── srs.js            repaso espaciado
│   └── store.js          persistencia
└── data/
    ├── verbes.js         base de verbos
    ├── grammaire-*.js    lecciones por nivel
    ├── vocabulaire.js    mazos
    ├── expressions.js    expresiones
    ├── ressources.js     material externo
    └── placement.js      examen y cálculo de nivel
```

### El conjugador

No guarda formas: guarda **radicales**. El francés parece irregular y casi no lo es
— todo verbo es radical + terminación, y las terminaciones son iguales para todos
según el tiempo. `boire` no se almacena con sus 42 formas, sino con sus tres
radicales de presente (`boi-` / `buv-` / `boiv-`); el motor deriva el resto.
Solo `être`, `avoir`, `aller`, `faire` y un puñado más guardan formas completas.

Eso es lo que permite que los ejercicios de conjugación se generen solos y no se
acaben nunca.

El motor pasa una batería de 83 pruebas contra formas verificadas, incluidos los
casos que las apps malas fallan: `nous mangions` (no *mangeions*), `j'achète` (no
*j'achette*), `il met` (no *mett*), `je préférerai` con é en futuro.

### El audio

Voz del sistema, no archivos grabados. Por eso **cada** ejemplo, conjugación y
frase tiene botón de escuchar, en vez de solo los que alcanzara a grabar alguien.
En iPhone y Mac las voces francesas (Thomas, Amélie) son buenas; en Android
depende del motor de Google.

## El progreso

Vive en `localStorage`, o sea en ese dispositivo y nada más. Para pasarlo del
celular a la computadora: Progreso → Respaldo → Exportar, y Importar del otro lado.
