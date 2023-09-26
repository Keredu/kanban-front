# Kanban-front


This is the repository where the front part of the Kanban project is hosted. The back-end is located [here](https://github.com/Keredu/kanban).

# Cloning the repository

To download the repository, you must use the `git clone git@github.com:Keredu/kanban.git` command.

# Creación de ramas del repositorio

This project has two important branches:

- main: it is the main branch of the project and it is where the latest productive version is saved.
- dev: this branch serves to integrate all the features or fixes that occur during development.

# Contributions
If you want to contribute to the project, you must create a new branch as follows:

1. Move to the dev branch with the `git checkout dev` command.
2. Update said branch with the latest changes with `git pull`.
3. Check that the dev branch is updated, then use `git checkout -b <nombre rama>`.
4. The following standard will be used for the branch name:
    - If the branch adds a new **feature** the branch name will be feature/name.
    - If the branch applies a **fix** the branch name will be fix/name.

To integrate the changes, you must make a pull-request pointing to the dev branch and assign it to another developer to validate that these changes are correct.

# Instalación y ejecución de la página web

Para ejecutar este código, hemos hecho uso de la extensión de VSCode llamada Live Server.

Para ejecutarlo simplemente debemos de movernos al fichero index.html, hacer click derecho y ejecutar la opción `Open with Live Server`.





