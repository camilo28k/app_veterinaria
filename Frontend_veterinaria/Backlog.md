# Backlog de Historias de Usuario – ACTUALIZACIÓN
Este documento contiene el listado **completo** de Historias de Usuario (HU) extraídas de las tarjetas de proyecto, **incluyendo los nuevos módulos de Productos y Categorías**.  
Las historias están clasificadas por módulo, prioridad (MUST / SHOULD) y estado actual en el tablero.

## Tabla Maestra (resumen rápido)

| ID    | Título                        | Módulo           | Rol           | Prioridad | Estado      | Descripción breve                                                      |
|-------|-------------------------------|------------------|---------------|-----------|-------------|-------------------------------------------------------------------------|
| HU1   | Listar Usuarios               | Gestión Usuarios | Administrador | MUST      | To Do       | Ver lista de usuarios.                                                 |
| HU1.1 | Crear Usuario                 | Gestión Usuarios | Administrador | MUST      | To Do       | Registrar nuevos usuarios.                                             |
| HU1.2 | Editar Usuario                | Gestión Usuarios | Administrador | MUST      | To Do       | Actualizar datos de usuarios.                                          |
| HU1.3 | Ver detalle de usuario        | Gestión Usuarios | Administrador | SHOULD    | In progress | Ver ficha completa del usuario.                                        |
| HU2   | Listar Mascotas               | Gestión Mascotas | Veterinario   | MUST      | To Do       | Ver lista de mascotas.                                                 |
| HU2.1 | Crear Mascota                 | Gestión Mascotas | Veterinario   | MUST      | To Do       | Registrar nueva mascota.                                               |
| HU2.2 | Editar Mascota                | Gestión Mascotas | Veterinario   | MUST      | In progress | Modificar datos de mascota.                                            |
| HU2.3 | Ver detalle de mascota        | Gestión Mascotas | Veterinario   | SHOULD    | In progress | Ver ficha clínica y general.                                           |
| HU3   | Listar tipos de mascota       | Tipos Mascota    | Administrador | SHOULD    | In progress | Ver catálogo de tipos.                                                 |
| HU3.1 | Crear tipo de mascota         | Tipos Mascota    | Administrador | MUST      | In progress | Agregar nuevo tipo.                                                    |
| HU3.2 | Editar tipo de mascota        | Tipos Mascota    | Administrador | MUST      | In progress | Actualizar datos del tipo.                                             |
| HU4   | Listar Productos              | Productos        | Veterinario   | MUST      | To Do       | Ver productos disponibles (imagen, nombre, precio).                    |
| HU4.1 | Ver detalle de producto       | Productos        | Administrador | SHOULD    | In progress | Ver ficha completa del producto.                                       |
| HU4.2 | Crear Producto                | Productos        | Administrador | MUST      | To Do       | Registrar producto con categoría y precio.                             |
| HU4.3 | Editar Producto               | Productos        | Administrador | SHOULD    | Backlog     | Modificar nombre, precio o categoría.                                  |
| HU5   | Listar Categorías             | Categorías       | Administrador | MUST      | In progress | Ver lista de categorías (icono + nombre).                              |
| HU5.1 | Crear Categoría               | Categorías       | Administrador | MUST      | Backlog     | Agregar nueva categoría.                                               |
| HU5.2 | Editar Categoría              | Categorías       | Administrador | MUST      | Backlog     | Actualizar datos de la categoría.                                      |

---

## NUEVOS MÓDULOS – DETALLE Y CRITERIOS GHERKIN
# Detalles por Módulo y Criterios Gherkin

---

## Módulo: Gestión de Usuarios (HU1)

### HU1: Listar Usuarios
**Rol:** Administrador  
**Descripción:** Como administrador quiero ver la lista de usuarios para gestionarlos fácilmente.  
**Prioridad:** MUST  

#### Criterio Gherkin:
```gherkin
Given que estoy en el módulo de usuarios
When visualizo la lista
Then debo ver cards con nombre, rol y estado
```

---

### HU1.1: Crear Usuario
**Rol:** Administrador  
**Descripción:** Como administrador quiero registrar nuevos usuarios para agregar personal.  
**Prioridad:** MUST  

#### Criterio Gherkin:
```gherkin
Given que estoy en la pantalla de creación de usuario
When ingreso los datos y presiono "Guardar"
Then el sistema valida y guarda el nuevo usuario
```

---

### HU1.2: Editar Usuario
**Rol:** Administrador  
**Descripción:** Como administrador quiero actualizar los datos de los usuarios para mantener información vigente.  
**Prioridad:** MUST  

#### Criterio Gherkin:
```gherkin
Given que selecciono un usuario
When ingreso a editar
Then debo poder modificar y guardar cambios
```

---

### HU1.3: Ver detalle de usuario
**Rol:** Administrador  
**Descripción:** Como administrador quiero ver el detalle completo del usuario para conocer su información.  
**Prioridad:** SHOULD  

#### Criterio Gherkin:
```gherkin
Given que selecciono un usuario
When accedo al detalle
Then debo ver su información completa
```

---

## Módulo: Gestión de Mascotas (HU2)

### HU2: Listar Mascotas
**Rol:** Veterinario  
**Descripción:** Como veterinario quiero ver la lista de mascotas para gestionarlas.  
**Prioridad:** MUST  

#### Criterio Gherkin:
```gherkin
Given que estoy en el módulo de mascotas
When visualizo la lista
Then debo ver cards con nombre, especie y propietario
```

---

### HU2.1: Crear Mascotas
**Rol:** Veterinario  
**Descripción:** Como veterinario quiero registrar nuevas mascotas para mantener el control clínico.  
**Prioridad:** MUST  

#### Criterio Gherkin:
```gherkin
Given que estoy en la pantalla de registro de mascota
When lleno los campos y guardo
Then se crea la mascota asociada al propietario
```

---

### HU2.2: Editar Mascota
**Rol:** Veterinario  
**Descripción:** Como veterinario quiero editar los datos de una mascota para actualizar su información.  
**Prioridad:** MUST  

#### Criterio Gherkin:
```gherkin
Given que selecciono una mascota
When accedo a editar
Then debo poder modificar los datos y guardarlos
```

---

### HU2.3: Ver detalle de mascota
**Rol:** Veterinario  
**Descripción:** Como veterinario quiero ver el detalle clínico y general de una mascota.  
**Prioridad:** SHOULD  

#### Criterio Gherkin:
```gherkin
Given que selecciono una mascota
When ingreso al detalle
Then debo visualizar su estado de salud, especie y propietario
```


### Módulo: Tipos de Mascota (HU3) – *continuación*

#### HU3.2: Editar tipo de mascota
- **Rol:** Administrador  
- **Descripción:** Como administrador quiero actualizar los datos de los tipos de mascotas para mantener la información vigente.  
- **Prioridad:** MUST  
- **Estado:** In progress  
- **Criterio Gherkin:**
  ```gherkin
  Given que selecciono un tipo de mascota
  When ingreso a editar
  Then debo poder modificar y guardar cambios
  ```

---

# Módulo: Productos (HU4)

## HU4: Listar Productos
- **Rol:** Veterinario  
- **Descripción:** Como veterinario quiero ver los productos disponibles para ofrecerlos o recomendarlos.  
- **Prioridad:** MUST  
- **Estado:** To Do  

### Criterio Gherkin:
```gherkin
Given que estoy en el módulo de productos
When visualizo la lista
Then debo ver imagen, nombre y precio
```

---

## HU4.1: Ver detalle de producto
- **Rol:** Administrador  
- **Descripción:** Como administrador quiero ver el detalle completo del producto para conocer su información.  
- **Prioridad:** SHOULD  
- **Estado:** In progress  

### Criterio Gherkin:
```gherkin
Given que selecciono el producto
When accedo al detalle
Then debo ver su información completa
```

---

## HU4.2: Crear Producto
- **Rol:** Administrador  
- **Descripción:** Como administrador quiero registrar productos con su categoría y precio.  
- **Prioridad:** MUST  
- **Estado:** To Do  

### Criterio Gherkin:
```gherkin
Given que estoy en crear producto
When lleno los campos y selecciono categoría
Then el sistema valida y guarda el producto
```

---

# Historias de Usuario - Módulo de Productos y Categorías

## HU4.3: Editar Producto  
**Rol:** Administrador  
**Descripción:** Como administrador quiero actualizar productos para mantener su stock o precio actualizados.  
**Prioridad:** SHOULD  
**Estado:** Backlog  

### Criterio Gherkin:
```gherkin
Given que selecciono un producto  
When ingreso a editar  
Then puedo modificar nombre, precio o categoría  
```

---

## Módulo: Categorías (HU5)

### HU5: Listar Categorías  
**Rol:** Administrador  
**Descripción:** Como administrador quiero ver las categorías para organizar productos.  
**Prioridad:** MUST  
**Estado:** In progress  

#### Criterio Gherkin:
```gherkin
Given que accedo al módulo de categorías  
When visualizo la lista  
Then debo ver cards con icono y nombre  
```

---

### HU5.1: Crear Categoría  
**Rol:** Administrador  
**Descripción:** Como administrador quiero crear categorías nuevas para clasificar los productos.  
**Prioridad:** MUST  
**Estado:** Backlog  

#### Criterio Gherkin:
```gherkin
Given que estoy en la pantalla de nueva categoría  
When ingreso nombre y descripción  
Then el sistema guarda la categoría  
```

---

### HU5.2: Editar Categoría  
**Rol:** Administrador  
**Descripción:** Como administrador quiero actualizar los datos de las categorías para mantener información vigente.  
**Prioridad:** MUST  
**Estado:** Backlog  

#### Criterio Gherkin:
```gherkin
Given que selecciono una categoría  
When ingreso a editar  
Then debo poder modificar y guardar cambios  
```
