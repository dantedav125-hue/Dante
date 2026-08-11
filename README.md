# PULSO 🔊

Reproductor de audio para tus beats, con visualizador de onda en tiempo real y efectos que se disparan con el ritmo. Todo en negro, con gradiente de calor ámbar → coral estilo medidores VU.

## Qué hace

- **Carga tus beats** — toca la pantalla o el botón `+` y elige tus archivos de audio (MP3, WAV, M4A, OGG, FLAC…). Puedes cargar varios a la vez y se arma tu playlist.
- **Forma de onda sincronizada** — la onda completa de la pista se dibuja con barras ("rayitas") y va pasando por el centro de la pantalla, sincronizada con la música. Lo ya reproducido se pinta con el gradiente de calor; lo que viene, en gris.
- **Efectos con el ritmo** — detección de beats en tiempo real (energía de graves): destellos, partículas que explotan desde la línea de reproducción, resplandor que respira con el bajo, y pulsos en el logo y el botón de play.
- **Controles** — tap en la pantalla = play/pausa · arrastra horizontal = adelantar/regresar · botones de pista anterior/siguiente · lista de beats deslizable.
- **Graba el video ya en formato** — en Configuración, elige **9:16** (Reels/TikTok), **1:1** o **16:9** y toca "Iniciar grabación". La app vuelve a dibujar el visualizador en un lienzo con esa proporción exacta y lo graba junto con el audio. Sale un MP4 de 1080×1920 listo para subir: nada que recortar ni reencuadrar en CapCut. Al terminar, "Guardar video" abre la hoja de compartir del teléfono.
- **Guía de encuadre** — si prefieres la grabación de pantalla del cel, prende la guía 9:16: marca en pantalla el área que sobrevive el recorte y recorre el nombre y la onda hacia adentro para que no se pierdan.
- **Instalable como app** — ábrela en tu cel y usa "Agregar a pantalla de inicio": se instala como app en pantalla completa (PWA).

## Cómo usarla en tu cel

1. Activa **GitHub Pages** en este repo: Settings → Pages → Deploy from branch → elige el branch y la carpeta `/ (root)`.
2. Abre la URL que te da GitHub Pages desde el navegador de tu cel.
3. En el menú del navegador elige **"Agregar a pantalla de inicio"** para instalarla como app.

También puedes abrir `index.html` directamente en cualquier navegador de escritorio (soporta arrastrar y soltar archivos).

## Tecnología

Un solo archivo `index.html` sin dependencias: Web Audio API (análisis de frecuencia + decodificación de la onda), Canvas 2D para el visualizador, y Media Session API para los controles de la pantalla de bloqueo.

La grabación usa `canvas.captureStream()` sobre un lienzo aparte del tamaño exacto que se pide, más `MediaStreamAudioDestinationNode` colgado del mismo analizador, y ambas pistas entran a `MediaRecorder` (MP4 donde el navegador lo soporta, si no WebM). El HUD —nombre, onda, tiempo y marca— es HTML en pantalla, así que para el video se redibuja dentro del lienzo escalado con el mismo factor, y el resultado se ve igual que el teléfono. Si el navegador no soporta grabar, el botón se deshabilita y queda la guía 9:16.
