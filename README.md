# Therapy & Wellness Cancún — Landing

Landing bilingüe (ES/EN) con el concepto "Herbario de bienestar". Sitio estático: HTML + CSS + JS, sin dependencias ni compilación.

```
index.html      contenido (español en el HTML, bueno para SEO)
css/styles.css  estilos y paleta
js/main.js      traducciones EN, enlaces de WhatsApp, pestañas, carrusel y animaciones
images/         fotos reales (ver images/README.md)
```

Para verlo, abre `index.html` en el navegador. Para publicarlo, sirve la carpeta en cualquier hosting estático (GitHub Pages, Netlify, Vercel…).

## Pendiente antes de publicar

- **Precios**: cada ficha y cada paquete tiene un `<span class="price"></span>` vacío (línea dorada punteada). Escribe el precio dentro, p. ej. `<span class="price">$650</span>`.
- **Fotos**: agrega los archivos listados en `images/README.md`.
- **Logo**: la marca está en texto (serif + detalle dorado). Sustitúyela en el header y el footer cuando tengas el archivo.
- **Reseñas**: las del carrusel son de ejemplo; cámbialas por reseñas reales de Google (ES en `index.html`, EN en `js/main.js`).
- **Llegada**: confirma que el spa realmente sale a recibir al cliente cuando avisa por WhatsApp (sección "Tu visita").
- **Redes**: los enlaces de Facebook e Instagram del footer son genéricos.

## Notas

- Idioma: botón ES/EN en el header; se recuerda en el navegador y también funciona con `?lang=en`. Los textos en inglés están en el objeto `EN` de `js/main.js`.
- WhatsApp: número `529983851240` (constante `WA` en `js/main.js`). Cada botón abre un mensaje ya escrito según la terapia o paquete.
- Terapias: por defecto en pestañas. Para mostrar todas las familias a la vez, agrega la clase `terapias--all` a `<section id="terapias">`.
- Las animaciones se desactivan si el usuario tiene activado "reducir movimiento".
