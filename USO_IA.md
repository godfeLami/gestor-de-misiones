# 🤖 Uso de Inteligencia Artificial

## Herramienta utilizada
Se utilizó ChatGPT como apoyo durante el desarrollo del proyecto.

## ¿En qué se utilizó?
La IA fue utilizada para:

- Generar validaciones de formularios (campos obligatorios, longitud mínima)
- Implementar validación de fechas (evitar fechas pasadas)
- Aplicar sanitización básica para prevenir vulnerabilidades XSS
- Refactorizar funciones JavaScript en módulos más claros (render, validar, agregar)
- Mejorar la estructura general del código y buenas prácticas del DOM
- Sugerir mejoras visuales y de experiencia de usuario (UI/UX)

## Decisiones tomadas por el estudiante
- Se optó por usar `createElement` y `textContent` en lugar de `innerHTML` por seguridad
- Se adaptaron las validaciones para mantener coherencia con lo aprendido en clases
- Se simplificaron algunas funciones sugeridas por la IA para mayor claridad
- Se integró localStorage para persistencia de datos

## Conclusión
La Inteligencia Artificial fue utilizada como una herramienta de apoyo para mejorar la calidad del código, pero todas las decisiones finales, adaptaciones y validaciones fueron realizadas manualmente por el estudiante.

### Prompt utilizado en ChatGPT

"Estoy desarrollando una aplicación web en JavaScript para gestionar tareas (tipo gestor de misiones). 
Necesito validar formularios, manipular el DOM de forma segura y evitar vulnerabilidades como XSS. 
Además, quiero organizar los datos en un arreglo de objetos y renderizarlos dinámicamente usando createElement en lugar de innerHTML.

Ayúdame a:
1. Crear funciones modulares (validar, renderizar, agregar, eliminar)
2. Validar campos (texto, select, fecha)
3. Evitar fechas pasadas
4. Aplicar sanitización básica
5. Mejorar la estructura del código con buenas prácticas
6. Mantener el código simple, claro y acorde a nivel académico"

### Resultado aplicado

Gracias a este prompt se logró:

- Separar la lógica en funciones reutilizables
- Implementar validaciones robustas
- Aplicar sanitización para evitar XSS
- Usar createElement y textContent para seguridad
- Mejorar la claridad y organización del código

El código final fue adaptado manualmente para cumplir con los contenidos vistos en clases.

### Prompt adicional

"¿Cómo puedo mejorar la experiencia de usuario (UI/UX) en una aplicación web simple de JavaScript sin usar frameworks? 
Sugiere mejoras visuales, animaciones, feedback al usuario y diseño responsive."

### Resultado aplicado

- Se agregaron animaciones hover en tarjetas
- Se implementaron tooltips en botones
- Se mejoró el diseño con colores temáticos (Naruto)
- Se hizo responsive con CSS Grid
- Se añadió feedback visual al completar tareas