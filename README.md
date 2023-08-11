# rick-and-morty

Proyecto de prueba para nextjs 13, express y typescript.

## Ejecución del proyecto backend

1. cd hasta la carpeta be.
2. correr `npm i`
3. renombrar el archivo `.env.example` como `.env`
4. de ser necesario cambiar el puerto de servicio.
5. si todo va bien puede ver el servicio corriendo por la url `http://localhost:8070/graphql`

### Información general del servicio

Este es un ejemplo básico de un servicio en graphql en express, que consume la api graphql de rick and morty todo haciendo uso de typescript. Para graphql se utilizo la librería de type-graphql con finalidad de darle al proyecto un soporte total en typescript. y una mayor escalabilidad..

Si lo desea puede ver la información de las consultas en `http://localhost:8070/graphql` si cambio la ruta en el .env corrija esta url.

## Ejecución de aplicación web

1. cd a la carpeta de fe.
2. correr correr `npm i`.
3. renombre la contante en `.env` para que acceda a lugar donde tenga corriendo en servicio por defecto esto es `http://localhost:8070/graphql`.

### Información general del frontend.

La aplicación front es muy básica, tiene una barra de navegación con una advertencia y el listado de humanos que se encuentran en la api, tambíen se implemento una paginacion básica con el fin de listas a todos los humanos registrados.

Se utilizo para realizar las consultar las librerías de @apollo/client y graphql con el fin de dar un poco mas de estructura a las consultas y que el código sea mas legible.

Proyecto creado con una estructura básica de nextjs haciendo uso de routing y server components. todo echo con typescript.

## Construcción del proyecto

Para ambos casos correr `npm run build` y posteriormente `npm start`

@copy Cristian Melo Álvarez - Agosto de 2023
