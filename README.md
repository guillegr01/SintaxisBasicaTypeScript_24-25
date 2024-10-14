# SINTAXIS BÁSICA DE TYPESCRIPT

Este repositorio ha sido creado para tener a mano una breve introducción a la sintaxis más basica del lenguaje de programación typescript.

Aqui explicamos:

1- tipos de datos

2- como crear tipos de datos primitivos y complejos

3- crear objetos

4- declaración de funciones

5- principales métodos aplicados a los arrays

# PRIMEROS PASOS

## Inicializar un entorno de trabajo con deno.js en vs code

Lo primero que hay que hacer es crearse una carpeta y abrirla en visual studio code. Obviamente la carpeta estará vacia al principio.

- Instalar Deno en nuestro ordenador a través de la terminal. En la pagina de deno pone como hacerlo.

- Una vez intalado, nos instalamos la extension de Deno en visual code.

- Para inciar la extension, abrimos el command palette con "ctrl+shift +p", y escribimos "Deno", escogemos la opción "Enable" o "initialize workspace configuration", y le damos enter. Con esto ya tendríamos Deno inicializado. Para comnprobar que Deno esta incializado en nuestro workspace, en la parte inferior derecha de vs code, debajo de la terminal nos deberá a parecer "Deno y la version".
  ![image](https://github.com/user-attachments/assets/4df2f895-390c-474a-ad6f-a02dbd8986f4)

- En la terminal de vs code, ponemos el comando "deno init", y se nos crearán una serie de carpetas necesarias. De todas esas podemos borrar la de "main_test.ts".

- Si queremos comprobar si hay alguna nueva versión de Deno, en la terminal de vs code ponemos el comando "deno upgrade".

- Veremos en nuestro explorador de archivos de la carpeta abierta en vs code que tenemos un archivo llamado "deno.json". Tendremos que abrir ese archivo y darlo todos los permisos de ejecucción, por lo que tendremos que modificarlo para que quede de la siguiente manera: 

![codeSnap](https://github.com/user-attachments/assets/1d1dba81-df68-46f0-9d7f-5ee1423c5742)
- Tras todos estos pasos, ya tendríamos el entorno listo para empezar a programar. Para ejecutar un archivo tendremos que poner en la linea de comandos de vs code "deno run" deguido del nombre del archivo que queremos ejecutar.

## Inicializar entorno y subiendo a github

En el caso de que quisiesemos inicializar un entorno y sincronizarlo con github, lo mejor es seguir los pasos explicados anteriormente, habiendo hecho previamente lo siguiente.

- Entrar en tu cuenta de github y crear un repositorio nuevo.

- Copiarnos la url del repositorio

- En vs code abrir la command palette con "ctrl +shift + p", ponemos Git Clone, damos enter e ingresamos la URL copiada de nuestro repo.

- Tras ello, nos llevará al explorador de archivos y nos dirá que donde queremos guardar el repositorio clonado. Nos crearemos una carpeta donde queramos y con el nombre que queramos.

- Tras crear la carpeta nos preguntará que si queremos abrir el repositorio clonado en vs code y le diremos que si. A partir de aqui ya tendremos una carpeta completamente nueva abierta en vs code y que además estará ligada a nuestro repositorio en git hub.
