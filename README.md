# Kanban-front

Este es el repositorio donde está alojado la parte front del proyecto de Kanban. La parte back-end se encuentra [aquí](https://github.com/Keredu/kanban).

# Clonación del repositorio

Para clonar este fichero, se debe hacer uso del comando `git clone git@github.com:Keredu/kanban.git <nombre carpeta>`.

# Creación de ramas del repositorio

Este proyecto cuenta con dos ramas principales:

- master: esta rama es la principal del proyecto y es donde se guarda la última versión productiva.
- dev: esta rama sirve para integrar todas las características o arreglos que se producen durante el desarrollo.

Siempre que se quiera crear una nueva rama en el proyecto, debemos realizar lo siguiente:

1. Movernos a la rama dev con el comando `git checkout dev`.
2. Actualizar dicha rama con los últimos cambios `git pull`.
3. Una vez comprobemos que la rama dev está actualizada, debemos utilizar el comando `git checkout -b <nombre rama>`.
4. Para el nombre de la rama se utilizará el siguiente estándar:
    - Si la rama añade una nueva característica: el nombre de la rama será feature/<nombre caracteristica>.
    - Si la rama aplica un correctivo: el nombre de la rama será fix/<nombre correctivo>.

Cuando hayamos terminado de aplicar los cambios a la nueva rama creada y queramos integrar en la rama dev. Debemos crear una pull-request que apunte a dev y siempre debe estar asignada a otro compañero para que valide que los cambios son correctos.

# Instalación y ejecución de la página web

Para ejecutar este código, hemos hecho uso de la extensión de VSCode llamada Live Server.

Para ejecutarlo simplemente debemos de movernos al fichero index.html, hacer click derecho y ejecutar la opción `Open with Live Server`.





