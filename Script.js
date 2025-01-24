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
            return true;//si esta prestado
        }
        return false;//Si esta disponible
    }
}

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

class Libraria {
    constructor(libraria) {
        // Guardar el sistema de librería
        this.sistemaLibreria = libraria;
        
        // Poner todo listo al inicio
        this.configurarEventos();
        this.mostrarLibros();
    }
    
    // Configurar cuando algo cambie en la página
    configurarEventos() {
        // Buscar cuando escriba algo
        var cajaBusqueda = document.getElementById('searchInput');
        cajaBusqueda.onkeyup = function() {
            var palabraBuscar = cajaBusqueda.value;
            var librosFiltrados = this.sistemaLibreria.buscarLibro(palabraBuscar);
            this.mostrarLibros(librosFiltrados);
        }.bind(this);
        
        // Filtrar por estado del libro
        var selectEstado = document.getElementById('filterState');
        selectEstado.onchange = function() {
            var estadoElegido = selectEstado.value;
            var librosFiltrados = this.sistemaLibreria.filtrarPorEstado(estadoElegido);
            this.mostrarLibros(librosFiltrados);
        }.bind(this);
    }
    
    // Mostrar los libros en la tabla
    mostrarLibros(libros) {
        // Si no me pasan libros, uso todos
        if (!libros) {
            libros = this.sistemaLibreria.libros;
        }
        
        // Limpiar tabla antes de poner nuevos libros
        var tablaLibros = document.getElementById('booksBody');
        tablaLibros.innerHTML = '';
        
// Recorrer cada libro y ponerlo en la tabla
    for (var i = 0; i < libros.length; i++) {
        var libro = libros[i];
        
        var botonReserva = libro.estado === 'disponible'
            ? `<button onclick="biblioteca.reservarLibro(${libro.id})">Reservar</button>`
            : '<button disabled>No Disponible</button>';
        
        tablaLibros.innerHTML += `
            <tr>
                <td>${libro.id}</td>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.genero}</td>
                <td class="book-${libro.estado}">${libro.estado}</td>
                <td>${botonReserva}</td>
            </tr>
        `;
    }
        }
    
    // Mostrar mensajes al usuario
    mostrarNotificacion(mensaje) {
        var avisos = document.getElementById('notifications');
        avisos.textContent = mensaje;
        avisos.style.display = 'block';
        
        // cada 3 segundos
        setTimeout(function() {
            avisos.style.display = 'none';
        }, 3000);
    }
    
    reservarLibro(id) {
        // Buscar el libro 
        var libroEncontrado = null;
        for (var i = 0; i < this.sistemaLibreria.libros.length; i++) {
            if (this.sistemaLibreria.libros[i].id === id) {
                libroEncontrado = this.sistemaLibreria.libros[i];
                break;
            }
        }
        
        // Si encontro
        if (libroEncontrado) {
            if (libroEncontrado.reservar()) {
                this.mostrarNotificacion('Libro "' + libroEncontrado.titulo + '" reservado exitosamente');
                this.mostrarLibros();
            }
        }
    }
}