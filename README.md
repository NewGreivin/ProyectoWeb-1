# Juego de Trivia - Kahoot

Aplicación web interactiva desarrollada con React y Vite que implementa un juego de trivia con preguntas dinámicas obtenidas desde APIs externas.

## 🎯 Características

- **Interfaz Responsiva**: Diseño adaptable a diferentes dispositivos usando Bootstrap
- **Juego Dinámico**: Preguntas obtenidas desde la API Open Trivia Database
- **Traducción Automática**: Traducción de preguntas al español usando APIs de traducción
- **Sistema de Puntuación**: Acumulación de puntos por respuestas correctas
- **Selección de Categoría y Dificultad**: Los usuarios pueden elegir parámetros del juego
- **Límite de Tiempo**: Cada pregunta tiene un tiempo límite variable según la dificultad
- **Estadísticas**: Registro de aciertos, errores y porcentaje de éxito

## 📦 Tecnologías

- **React** - Librería de UI con hooks (useState, useEffect)
- **Vite** - Herramienta de construcción rápida
- **Bootstrap** - Framework CSS para UI responsivo
- **APIs Externas**:
  - Open Trivia Database (https://the-trivia-api.com/)
  - Text Translator 2 (https://text-translator2.p.rapidapi.com/translate)

## 🚀 Inicializacion del proyecto y uso

```bash
# Comando para evadir archivo Package-lock.json
git update-index --assume-unchanged package-lock.json

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```
## 👥 Requisitos del Proyecto

- UI intuitiva y atractiva con React y Bootstrap
- Consumo de APIs para preguntas y traducción
- Componentes reutilizables
- Gestión de estado con hooks
- Navegación entre pantallas
- Control de tiempo para cada pregunta

## 📅 Fecha de Entrega

Semana 14 del curso Tecnologías y Sistemas Web I