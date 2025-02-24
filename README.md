# Proyecto de Tienda en Línea

## Descripción
Este proyecto consiste en el desarrollo de una aplicación de tienda en línea utilizando .NET ASP CORE y Angular. La aplicación incluye CRUDs para clientes, tiendas y artículos, además de un módulo de autenticación y un carrito de compras.

## Requisitos
- .NET ASP CORE 3.1 o superior
- Angular (preferencia)
- MySQL o SQL Server
- Node.js (para Angular)
  
## Paquetes NuGet Necesarios
- `Microsoft.EntityFrameworkCore.Tools`
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.SqlServer`
  
## Estructura de la Base de Datos
### Clientes
- Nombre
- Apellidos
- Dirección

### Tienda
- Sucursal
- Dirección

### Artículos
- Código
- Descripción
- Precio
- Imagen
- Stock

### Relaciones
- Relación artículo - tienda
  - Artículo
  - Tienda
  - Fecha

- Relación cliente - artículo
  - Cliente
  - Artículo
  - Fecha

## Diseño de la Aplicación
La aplicación está diseñada en una estructura de 4 capas:
1. **Business**
2. **Data**
3. **Entities**
4. **Front**

## Funcionalidades
1. **CRUD para Tienda y Artículo (relación tienda)**:
   - Crear, leer, actualizar y eliminar tiendas y artículos.
   
2. **CRUD para Cliente (relación cliente - artículo)**:
   - Crear, leer, actualizar y eliminar clientes y sus relaciones con artículos.
   
3. **Módulo de Autenticación**:
   - Login de cliente.
   
4. **Carrito de Compras**:
   - Permite a los clientes comprar artículos y se relaciona con su cuenta.

## Pasos para Ejecutar el Proyecto
1. **Crear la base de datos**:
   - Crear tablas `Clientes`, `Tienda`, y `Artículos` con las relaciones correspondientes.
   - **Crear el build para las migraciones**:
     - Instalar los paquetes NuGet necesarios. 
     - Utilizar la consola NuGet para ejecutar los comandos:
       - `update-database`

2. **Configurar el back-end**:
   - Clonar el repositorio.
   - Navegar a la carpeta del proyecto y restaurar los paquetes necesarios.
   - Configurar la conexión a la base de datos en el archivo de configuración.
   - Ejecutar las migraciones para crear las tablas.

3. **Configurar el front-end**:
   - Navegar a la carpeta `Front` del proyecto.
   - Instalar las dependencias de Node.js utilizando `npm install`.
   - Ejecutar el proyecto utilizando `ng serve`.

4. **Ejecutar la aplicación**:
   - Navegar a `http://localhost:4200` para ver la aplicación en ejecución.

## Notas Adicionales
Dado el tiempo limitado, no se ha completado la implementación del carrito de compras. Este módulo permitirá a los clientes agregar artículos a 
