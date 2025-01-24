class libro {
    constructor(id, titulo, autor,genero, estado) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.estado= estado;
        this.fecha= null;
        
        }

    reservar(date){
        if(this.estado === 'disponible'){
            this.estado = 'prestado';
            this.fecha = date;
            return true;
        }
        return false;
    };

    devolver() {
        if (this.estado === 'prestado') {
            this.estado = 'disponible';
            this.fechaPrestamo = null;
            return true;
        }
        return false;
    }
}

class inventario {
    libros = [];

    AgregaLibro(id, titulo, autor,genero, estado) {
        this.libros.push(new libro(id, titulo, autor, genero, estado));//Guarda en arreglo productos, con los atributos 
    }

    buscarLibro(termino) {
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