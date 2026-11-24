# MEXXA

MEXXA es un catálogo streetwear desarrollado como proyecto final de TripleTen. Permite explorar camisas y playeras, buscar prendas y consultar su foto y descripción. Está hecho con React, React Router, Vite y CSS.

## Ejecutar en local

Usa Node.js 24 y npm. Ejecuta estos comandos desde la raíz de tu copia de `mexxa-frontend`.

```sh
npm ci
npm run dev
```

Vite abre la aplicación en el navegador. También puedes usar la dirección que aparece en la terminal, normalmente [localhost:5173](http://localhost:5173/).

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación de MEXXA y enlaces a Catálogo y Sobre mí. |
| `/catalogo` | Buscador, tarjetas de prendas y ventana de detalles. |
| `/About` | Información sobre el autor. |

## Probar el catálogo

1. Desde Inicio, pulsa **Explorar catálogo**. Verás las primeras tres prendas. Pulsa **Mostrar más** para ver el siguiente grupo.
2. Busca `plaid` y abre **Ver detalles** en la tarjeta de **Man Plaid Shirt**. El diálogo muestra su foto y descripción. Puedes cerrarlo con la **X**, **Escape** o un clic fuera.
3. Envía el buscador vacío para ver la validación. Busca `mexxa-sin-coincidencias-2603` para ver el estado sin resultados.

El catálogo obtiene los datos de ejemplo de la categoría `mens-shirts` de DummyJSON. La búsqueda conserva esa categoría. Se requiere conexión a Internet para cargar los productos y sus imágenes. [Documentación de DummyJSON](https://dummyjson.com/docs/products)

MEXXA usa Inter Variable como fuente local. [Licencia de Inter](src/vendor/fonts/LICENSE.txt)

## Verificaciones

```sh
npm run lint
npm run build
```

La compilación de producción se genera en `dist/`.
