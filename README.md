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
- **FilterPagination.tsx**: Componente de React que maneja la lógica de paginación y maneja según los casos los filtros definidos en Filters.txt.
- **Filters.tsx**: Componente de React que implementa la lógica de filtrado para los criterios de busqueda.

### Layouts

- **MainLayout.astro**: Layout principal que aplica estilos globales utilizando Tailwind CSS.

### Páginas

- **index.astro**: Página principal que muestra la lista de artículos con paginación.

## Instalación

1. Clona el repositorio:

   ```
   git clone  git@github.com:HERDACHI/frontend-system.git
   cd frontend-system
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abre tu navegador y navega a http://localhost:4321 para ver la aplicación en funcionamiento.

## Uso
- Puedes ver la aplicación en funcionamiento navegando a http://147.182.199.159:8080/
- El checkbox "Con stock" muestra solo los artículos con stock>0.
- El campo "Buscar por título" permite buscar un artículo por su nombre o titulo.
- El campo "Buscar por serial" es un filtro que permite buscar según el serial del artículo.
- La lista de artículos está mostrada para una paginación de 6 en 6.
- Los botones de paginación se encuentran en la parte inferior del listado definidos por números 
  y se puede acceder a cada pagina haciendo click sobre estos.

# Servir Aplicación Astro con NGINX en Docker
Estos son los pasos para servir la carpeta `dist` de un proyecto Astro utilizando una imagen de NGINX en Docker.

## Pasos para Servir `dist` con NGINX en Docker

### 1. Construir el proyecto para generar la carpeta `dist`
```
npm run build
```

2. Crear el Dockerfile
```
# Usar una imagen base de NGINX
FROM nginx:alpine

# Copiar los archivos de construcción a la carpeta NGINX
COPY ./dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
```

3. Contruir la imagen de Docker
```
docker build -t astro-nginx-app .
```
4. Ejecutar el contenedor de Docker en el puerto 8080 o un puerto diferente.
```
docker run -p 8080:80 astro-nginx-app
```
5. Acceder a la aplicación
```
Acceder a la aplicación en http://ip-servidor:8080.
```



