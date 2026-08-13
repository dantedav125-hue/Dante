# PULSO 🔊

Reproductor de audio para tus beats, con visualizador de onda en tiempo real y efectos que se disparan con el ritmo. Todo en negro, con gradiente de calor ámbar → coral estilo medidores VU.

## Qué hace

- **Carga tus beats** — toca la pantalla o el botón `+` y elige tus archivos de audio (MP3, WAV, M4A, OGG, FLAC…). Puedes cargar varios a la vez y se arma tu playlist.
- **Forma de onda sincronizada** — la onda completa de la pista se dibuja con barras ("rayitas") y va pasando por el centro de la pantalla, sincronizada con la música. Lo ya reproducido se pinta con el gradiente de calor; lo que viene, en gris.
- **Efectos con el ritmo** — detección de beats en tiempo real (energía de graves): destellos, partículas que explotan desde la línea de reproducción, resplandor que respira con el bajo, y pulsos en el logo y el botón de play.
- **Controles** — tap en la pantalla = play/pausa · arrastra horizontal = adelantar/regresar · botones de pista anterior/siguiente · lista de beats deslizable.
- **Pensada para grabar la pantalla** — el nombre de la pista, la onda, el tiempo y la marca arrancan dentro del área 9:16 centrada, no pegados al borde superior. Así, cuando grabas la pantalla del cel y recortas a vertical para Reels o TikTok, el texto sigue dentro del cuadro en vez de perderse por arriba. Los controles se desvanecen del todo mientras suena, para que no salgan en la grabación.
- **Instalable como app** — ábrela en tu cel y usa "Agregar a pantalla de inicio": se instala como app en pantalla completa (PWA).

## Cómo usarla en tu cel

1. Activa **GitHub Pages** en este repo: Settings → Pages → Deploy from branch → elige el branch y la carpeta `/ (root)`.
2. Abre la URL que te da GitHub Pages desde el navegador de tu cel.
3. En el menú del navegador elige **"Agregar a pantalla de inicio"** para instalarla como app.

También puedes abrir `index.html` directamente en cualquier navegador de escritorio (soporta arrastrar y soltar archivos).

## Tecnología

Un solo archivo `index.html` sin dependencias: Web Audio API (análisis de frecuencia + decodificación de la onda), Canvas 2D para el visualizador, y Media Session API para los controles de la pantalla de bloqueo.

El encuadre seguro se calcula en cada cambio de tamaño: la pantalla del teléfono es más alargada que 9:16, así que sobra una banda arriba y otra abajo. Esa banda se mide y se pasa a la hoja de estilos como `--safeTop`, que empuja el bloque de texto hacia adentro del recorte.
