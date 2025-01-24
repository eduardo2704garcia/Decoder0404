# Decoder0404
Prueba-Conjunta
Biblioteca Digital

Descripcion del trabajo:
Realizaremos un sistema web para poder prestarle los libros a los usuarios usando funcionalidades de busqueda, filtrar y reservacion

Caracteristicas:
* Buscar los libros por el titulo autor o el genero
* Filtrar los libros por estado(disponibles u ocupados)
* Reservar si estar disponibles
* Mostrar avisos de devolucion

Recursos a utilizar:
*HTML
*CSS
*JavaScript

Estructura:
index.html como nuestra interfaz principal
script.js para el script de funcionamiento
readme.md para la documentacion

Instalacion:
* Clonar el repositorio
* Ejecutar el index.html


1) Creacion de la clase libro

        class libro {
            constructor(id, titulo, autor,genero, estado) {
                this.id = id;
                this.titulo = titulo;
                this.autor = autor;
                this.genero = genero;
                this.estado= estado;
                this.fecha= null;
                
                }
        }
Esta clase la realizamos para crear objetos que representan los libros. Cada libro tiene las propiedades de los requerimientos el id el titulo el autor el genero el estado y adicional una fecha=null donde vemos si el libro fue reservado o prestado