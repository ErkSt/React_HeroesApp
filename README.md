# 🦸‍♂️ Heroes App

Una aplicación moderna y de alto rendimiento para la gestión y visualización de héroes, construida con las últimas tecnologías de desarrollo web. Este proyecto se enfoca en una experiencia de usuario fluida, una arquitectura escalable y una cobertura de pruebas exhaustiva para garantizar la calidad del software.

---

## 🚀 Características Principales

* **Interfaz Generada con IA:** El diseño y la estructura de la UI han sido optimizados y generados utilizando herramientas de vanguardia como **v0**, **Lovable** y **Bolt.new**.
* **Implementación de shadcn/ui y Tailwind CSS:** Estilos consistentes y componentes de alta calidad, incluyendo elementos avanzados como el **Slider de shadcn**, garantizando una estética moderna y totalmente responsive.
* **Gestión de Estado y Datos:**
    * Uso de **Context API** para la gestión global de superhéroes favoritos.
    * Implementación de **Custom Hooks** para encapsular la lógica de negocio y reutilización de código.
    * Priorización de **Query Params** sobre `useState` para que el estado de la aplicación (filtros y búsquedas) sea persistente y compartible mediante la URL.
* **Navegación y Estructura:**
    * Gestión robusta de rutas con **React Router**.
    * Arquitectura basada en **Layouts** para mantener la coherencia visual en todas las vistas.
    * **Lazy Loading** en el enrutamiento para reducir el tiempo de carga inicial.
* **Búsqueda Avanzada:** Sistema de **filtro de búsqueda multi-filtro** para una localización precisa de héroes.

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React** | Biblioteca principal de UI |
| **TanStack Query** | Gestión de estado asíncrono y caché de datos |
| **Axios** | Cliente HTTP para consumo de API |
| **Tailwind CSS** | Framework de estilos utilitarios |
| **shadcn/ui** | Componentes de UI altamente personalizables |
| **React Router** | Gestión de rutas y navegación |
| **Vite** | Herramienta de construcción y entorno de desarrollo |

## 🧪 Calidad y Testing

Se ha implementado una robusta suite de pruebas para asegurar el correcto funcionamiento de cada pieza de la aplicación:

* **Componentes y Hooks:**
    * Testing unitario y de integración de componentes.
    * Testing de **Custom Hooks** integrados con **TanStack Query**.
* **Estado y Navegación:**
    * Testing de **Context API** y componentes dependientes del contexto.
    * Pruebas de navegación utilizando **Memory Router**.
    * Validación de páginas con envío y lectura de **Search Params**.
    * Pruebas específicas para componentes de **carga perezosa (Lazy Load)**.
* **Simulación (Mocking):**
    * **Mockeo de Axios** para evitar peticiones reales durante los tests.
    * Mockeo de **Actions** y objetos globales (como **localStorage**).
    * Mockeo de componentes complejos para facilitar la lectura de la jerarquía de componentes con `screen.debug`.
* **Interacciones:**
    * Testing de comportamiento mediante el disparo de eventos sobre componentes para simular la interacción real del usuario.

## 📦 Instalación y Configuración

> [!IMPORTANT]
> Esta aplicación requiere el backend de Nest Heroes para funcionar correctamente: [Backend Repository](https://github.com/Klerith/nest-heroes-backend)

1. **Clonar el repositorio**
2. **Configurar variables de entorno:** Crea y edita el archivo `.env` basado en el archivo `.env.template`.
3. **Instalar dependencias:**
   ```bash
   npm install

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev

Link de desplegado en produccion del frontend: cerulean-cannoli-2e4d1f.netlify.app
Link de desplegado en produccion del backend: https://heroesapp-backend-gfdl.onrender.com/

Hecho con ❤️ por ErkSt