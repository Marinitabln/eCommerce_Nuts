# 🛒 Proyecto Ecommerce "Nuts | Tienda"

Este proyecto es una aplicación **Ecommerce** desarrollada para la gestión y visualización de productos, orientada a una arquitectura frontend moderna con consumo de APIs REST.

---

## 🚀 Características principales

* Listado de productos
* Creación, edición y eliminación de productos
* Formularios con validaciones
* Gestión de estados y manejo de errores
* Navegación entre vistas
* Integración con API REST

---

## 🧰 Tecnologías utilizadas

* **React**
* **TypeScript**
* **Vite**
* **React Router**
* **CSS Modules** 
* **Fetch API**

---

## 📁 Estructura del proyecto

```bash
src/
├── components/        # Componentes reutilizables
├── pages/             # Vistas principales
├── services/          # Lógica de conexión con la API
├── hooks/             # Custom hooks
├── types/             # Tipos y modelos TypeScript
├── utils/             # Funciones utilitarias
├── styles/            # Estilos globales
└── main.tsx           # Punto de entrada
```

---

## 🔗 API

El proyecto consume una API REST para la gestión de productos.

### Endpoints

* `GET /products` → Obtener todos los productos
* `GET /products/:id` → Obtener producto por ID
* `POST /products` → Crear producto
* `PUT /products/:id` → Actualizar producto
* `DELETE /products/:id` → Eliminar producto

---

## 📝 Modelo de producto

```ts
export type ProductBase = {
  product_name: string
  description: string
  url_img: string
  category: string
  presentations: string[]
  price: number[]
}

export type ProductType = ProductBase & {
  id: string
}

```

---

## ▶️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/Marinitabln/eCommerce_Nuts.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto en desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador:

```
http://localhost:5173
```

---

## ✅ Validaciones

* Campos obligatorios
* Formatos válidos (URLs, números)
* Control de errores de API

-
---

## 👩‍💻 Autor

Desarrollado por **Marina Blanco**
Frontend Developer

---

## 📄 Licencia

Este proyecto se distribuye bajo licencia MIT.
