## Crear aplicacion
yarn create vite y yarn install para instalar los modulos de node

## Correr aplicacion
yarn dev

## Construir el build
yarn build

## Subir a github pages
generar el build con: yarn build
la carpeta llamada dist cambiarla de nombre a docs
hacer el push
Ir a la parte de pages en github
Seleccionar main y docs
Si lo abrimos nos va a dar errores porque hay que configurar lo siguiente:
Ir a docs, luego a html y cambiar esto:
    <script type="module" crossorigin src="/assets/index.c8ebc99f.js"></script>
    <link rel="stylesheet" href="/assets/index.36afc740.css">
por esto
    <script type="module" crossorigin src="./assets/index.c8ebc99f.js"></script>
    <link rel="stylesheet" href="./assets/index.36afc740.css">
Simplemente añadirle un punto

Y ya luego subir los cambios a github