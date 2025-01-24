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

2) Metodo reservar
 reservar(date){
                if(this.estado === 'disponible'){
                    this.estado = 'prestado';
                    this.fecha = date;
                    return true;
                }
                return false;
            };
Esto nos ayuda a cambiar el estado del libro a prestado y registrar la fecha de reserva si el estado es disponible.
El parameto es date -> la fecha de reserva 
que nos devolvera true si se realizo con exito o falso si el libro ya fue presatado

3) metodo devolver
devolver() {
                if (this.estado === 'prestado') {
                    this.estado = 'disponible';
                    this.fechaPrestamo = null;
                    return true;
                }
                return false;
            }
esto nos permitira devolver el libro si su estado es prestado o sino cambiar el estado a disponible actualizando la fecha de prestamo, no implementamos parametros en este metodo y nos devolvera verdadero si se devolvio con exito o falso si el libro no estaba prestado

4) clase inventario
class inventario {
    libros = [];

    AgregaLibro(id, titulo, autor,genero, estado) {
        this.libros.push(new libro(id, titulo, autor, genero, estado));//Guarda en arreglo productos, con los atributos 
    }

    buscarLibro(termino) {//busca, titulo, autor, genero
        return this.libros.filter(function(libro) {
            return libro.titulo.includes(termino) ||
                   libro.autor.includes(termino) ||
                   libro.genero.includes(termino);
        });
    }

    filtrarPorEstado(estado) {
        return estado ? this.libros.filter(libro => libro.estado === estado) : this.libros;
    }
}

Esta clase maneja la coleccion de los libros tiene un arreglo que almacena los libros en la clase libro
* metodo agregar libro
crea una instancia libro y lo agrega al arreglo 
* metodo buscarlibro
busca los libros que tengan el titulo el autor o el genero con el mismo termino usando filter para dar el arreglo con los resultados
* filtrarPorEstado
este metodo filtra los libros segun el estdo ya sea disponible o prestados, sino tenemos un estado nos devolvera todos los libros

5) Clase Libraria
class Libraria {
    constructor(libraria) {
        // Guardar el sistema de librería
        this.sistemaLibreria = libraria;
        
        // Poner todo listo al inicio
        this.configurarEventos();
        this.mostrarLibros();
    }
}   

Esta clase nos ayuda a la interaccion entre la interfaz del usuario y el sistema, tiene un constructor que tiene un parametro que es libraria que se inicia en la clase inventario esto alamacena su referencia configura los eventos iniciales y me muestra los libros que existen en la tabla

* metodo configurarEventos()
utilizamos el cajaBusqueda.onkeyup:
que detecta cuando el usuario escribe en el campo de busqueda, nos filtra los libros y muestra esos libros en la tabla
select.onchange: ayuda a detectar la seleccion de un estrado y filtra y muestra esos libros

* mostrarLibros
muestra los libros del inventario y limpia la tabla antes de rellenarla con los libros

*mostrarNotificacion(mensaje)
esto nos muestra un mensaje temporal en la pagina que desaparece despues de 3seg

* reservaLibro(id)
busca el libro por el id si no lo encuentra y esta disponible lo reserva 

Introduccion al dom
UTILIZAMOS ELEMENTOS COMO
#searchInput: Campo de búsqueda para filtrar libros.
#filterState: Selector para filtrar por estado.
#booksBody: Cuerpo de la tabla donde se listan los libros.
#notifications: Elemento donde se muestran las notificaciones.
EVENTOS DOM:
onkeyup: Detecta cambios en el campo de búsqueda.
onchange: Detecta cambios en el selector de estado.