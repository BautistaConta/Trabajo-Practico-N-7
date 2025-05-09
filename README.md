# Trabajo-Practico-N-7
# Microservicios en Node.js

Este proyecto demuestra el patrón de arquitectura de microservicios usando Node.js y Express.

## Estructura

- **User Service**: Maneja usuarios (`/users`)
- **Product Service**: Maneja productos (`/products`) y consulta datos de usuarios a través de HTTP

## Cómo ejecutar

1. Instalar dependencias en cada servicio:
   ```bash
   cd user-service
   npm install
   cd ../product-service
   npm install
