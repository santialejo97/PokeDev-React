# PokèDev

Aplicación web construida con **React + TypeScript + Vite** que consume la [PokeAPI](https://pokeapi.co/) para explorar, buscar y consultar información de los Pokémon.

## Objetivo del proyecto

Crear una interfaz interactiva que permita a los usuarios descubrir Pokémon de forma visual y cómoda, mostrando su información de forma clara y amigable.

## Funcionalidad

- **Listado de Pokémon** con dos vistas:
  - **Grid de cartas**: visualización tipo tarjeta con scroll infinito (IntersectionObserver + React Query).
  - **Tabla**: vista tabular con tipos, estadísticas básicas y acceso rápido a la ficha.
- **Búsqueda por nombre** de Pokémon mediante el query param `?query=` en la URL.
- **Ficha detallada** de cada Pokémon: artwork, tipos, estadísticas (con barras de progreso), altura, peso y experiencia base.
- **Pokémon favoritos**: agregar/eliminar desde las tarjetas y verlos en una vista dedicada (`/favorites`). Se persisten en `localStorage`.
- **Tema**: soporte para modo oscuro / claro / sistema.

## Estructura de carpetas

```
pokedev-react/
├── public/
│   └── images/          # Logo y recursos estáticos
├── src/
│   ├── api/              # Cliente de Axios (PokemonApi.ts)
│   ├── assets/           # Fuentes (Outfit)
│   ├── components/
│   │   ├── providers/   # Provider (React Query, Sonner, Theme)
│   │   └── ui/           # Componentes shadcn/ui (badge, button, table, etc.)
│   ├── lib/              # Utilidades (cn, normalizarDataPokemon) y configuración de GSAP
│   ├── project/          # Lógica principal de la aplicación
│   │   ├── actions/      # Acciones/queries (pokemonList, pokemonDetail)
│   │   ├── components/   # Tarjetas, grid, tabla, header, búsqueda, etc.
│   │   ├── hooks/        # usePokemonGrid, useSearch, useBadge
│   │   ├── interfaces/   # Interfaces y tipos de TypeScript
│   │   ├── layout/       # PokeLayout (shell de la app)
│   │   ├── pages/        # ListPoke, FavoritePoke
│   │   └── store/        # Zustand (con persist en localStorage)
│   ├── router/           # Configuración de React Router
│   ├── main.tsx
│   └── PokeDev.tsx
├── .env
├── components.json
├── vite.config.ts
└── package.json
```

## Tecnologías utilizadas

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** + **shadcn/ui** + **Base UI**
- **TanStack React Query** (+ devtools)
- **Zustand** (con persistencia)
- **GSAP** + **@gsap/react** (animaciones)
- **React Router** 8
- **Axios**
- **Lucide React** / **react-icons**
- **Sonner** (notificaciones)
- **ESLint** + **React Compiler**

## Levantar el proyecto

Requisitos: **Node.js 20+** y **npm**.

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview

# Linter
npm run lint
```

El servidor de desarrollo queda corriendo en `http://localhost:5173`.

## Configuración

- Variable de entorno en `.env`:

  ```
  VITE_API_URL = https://pokeapi.co/api/v2/
  ```

- Alias de path `@` configurado en `vite.config.ts` y `tsconfig.app.json` (ej. `@/project/...`).

- **React Compiler** habilitado mediante Babel plugin en `vite.config.ts`.

- **React Query Devtools** integrado en `src/PokeDev.tsx`.
