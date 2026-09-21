# Apps de Dante

Repositorio personal. Cada carpeta es una app independiente, sin dependencias
ni build, servidas por GitHub Pages.

| App | Qué es | Dónde |
|---|---|---|
| **PULSO** | Reproductor de beats con visualizador de onda | raíz — `/` |
| **Français** | Curso de francés con lecciones, conjugador y repaso espaciado | `/frances/` |

Cada una se instala por separado en el celular con "Agregar a pantalla de inicio".

---

# PULSO 🔊

Reproductor de audio para tus beats, con visualizador de onda en tiempo real y efectos que se disparan con el ritmo. Todo en negro, con gradiente de calor ámbar → coral estilo medidores VU.

## Qué hace

- **Carga tus beats** — toca la pantalla o el botón `+` y elige tus archivos de audio (MP3, WAV, M4A, OGG, FLAC…). Puedes cargar varios a la vez y se arma tu playlist.
- **Forma de onda sincronizada** — la onda completa de la pista se dibuja con barras ("rayitas") y va pasando por el centro de la pantalla, sincronizada con la música. Lo ya reproducido se pinta con el gradiente de calor; lo que viene, en gris.
- **Efectos con el ritmo** — detección de beats en tiempo real (energía de graves): destellos, partículas que explotan desde la línea de reproducción, resplandor que respira con el bajo, y pulsos en el logo y el botón de play.
- **Controles** — tap en la pantalla = play/pausa · arrastra horizontal = adelantar/regresar · botones de pista anterior/siguiente · lista de beats deslizable.
- **Pensada para grabar la pantalla** — el bloque de texto (nombre de la pista, onda, tiempo y marca) baja hasta donde nada lo tapa: por debajo del Dynamic Island del iPhone y por debajo de la franja superior que Instagram ocupa con su interfaz. Da igual si subes la grabación completa o si la recortas a 9:16: en los dos casos se lee. Los controles se desvanecen del todo mientras suena, para que no salgan en la grabación.
- **Instalable como app** — ábrela en tu cel y usa "Agregar a pantalla de inicio": se instala como app en pantalla completa (PWA).

## Cómo usarla en tu cel

1. Activa **GitHub Pages** en este repo: Settings → Pages → Deploy from branch → elige `main` y la carpeta `/ (root)`.
2. Abre la URL que te da GitHub Pages desde el navegador de tu cel. PULSO queda en la raíz; Français en `/frances/`.
3. En el menú del navegador elige **"Agregar a pantalla de inicio"** para instalarla como app.

También puedes abrir `index.html` directamente en cualquier navegador de escritorio (soporta arrastrar y soltar archivos).

## Tecnología

Un solo archivo `index.html` sin dependencias: Web Audio API (análisis de frecuencia + decodificación de la onda), Canvas 2D para el visualizador, y Media Session API para los controles de la pantalla de bloqueo.

El encuadre seguro se recalcula en cada cambio de tamaño y se pasa a la hoja de estilos como `--safeTop`. Se respeta la más baja de tres cotas: el `env(safe-area-inset-top)` del aparato (~59 px con Dynamic Island, 44-47 con notch), el 10.4 % superior que Instagram tapa en un Reel de 1080×1920, y ese mismo porcentaje medido sobre el recorte 9:16 centrado por si el video se recorta. Verificado en iPhone SE, 13, 14/15 Pro y 16 Pro Max.

---

# Français 🇫🇷

Curso de francés en `/frances/`: examen de nivelación, 35 lecciones de A1 a B2,
conjugador de 178 verbos, tarjetas, expresiones, modo escucha y repaso espaciado.
Todo el francés se puede oír con la voz del sistema.

Se adapta sola: en el celular sirve sesiones cortas de práctica; en la computadora,
lecciones largas de estudio.

Documentación completa en [`frances/README.md`](frances/README.md).
