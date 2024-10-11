# Proyecto de Lista de Artículos

Este proyecto es una aplicación web desarrollada con Astro y React que muestra una lista de artículos con paginación. Utiliza Tailwind CSS para el diseño y estilo de los componentes.

## Características

- **Listado de Artículos**: Muestra una lista de artículos con detalles como título, descripción, precio, stock, categoría, serial, marca, descuento y calificación.
- **Paginación**: Permite navegar entre páginas de artículos, mostrando 5 artículos por página.
- **Estilos con Tailwind CSS**: Utiliza clases de utilidad de Tailwind CSS para un diseño moderno y responsivo.

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
.
.
.
├── public/
│   └── favicon.svg
├── src/
    ├── components/
    │   └── ArticleCard.tsx
    │   └── FilterPagination.tsx
    │   └── Filters.tsx
    ├── data/
    │   └── articles.json
    ├── layouts/
    │   └── MainLayout.astro
    ├── pages/
    │   └──  index.astro
.   
.
.
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
└── astro.config.mjs

```

### Componentes

- **ArticleCard.tsx**: Componente de React que muestra la información de un artículo.
- **FilterPagination.tsx**: Componente de React que maneja la lógica de paginación.
- **Filters.tsx**: Componente que maneja la lógica de filtrado para los criterios de busqueda.

### Layouts

- **MainLayout.astro**: Layout principal que aplica estilos globales utilizando Tailwind CSS.

### Páginas

- **index.astro**: Página principal que muestra la lista de artículos con paginación.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/HERDACHI/boom-solutions
   cd frontend-system
   ```

2. Instala las dependencias:
    npm install

3. Inicia el servidor de desarrollo:
   npm run dev

4. Abre tu navegador y navega a http://localhost:4321 para ver la aplicación en        funcionamiento.

## Uso
- ArticleCard.tsx
  Este componente recibe un objeto article como prop y muestra la información del artículo. 
- index.astro
  La página principal que muestra la lista de artículos con paginación.  
- MainLayout.astro
  Este layout aplica estilos globales utilizando Tailwind CSS.
- Filters.tsx  
  Este componente maneja la lógica de filtrado y permite buscar por un criterio seleccionado.
- FilterPagination.tsx
  Este componente maneja la lógica de paginación y permite navegar entre páginas.. 
