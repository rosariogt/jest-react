import React, {Component} from "react";

class Libro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: props.titulo,
            precio: props.precio,
            fechaRegistro: props.fechaRegistro
        };
    }

    DESCUENTO_LIBRO_NUEVO = 0;
    DESCUENTO_LIBRO_ANTIGUO = 0.50;
    DESCUENTO_LIBRO_INTERMEDIO = 0.10;

    obtenerDescuento() {
        const {precio, fechaRegistro} = this.props;
        let descuento = 0;
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        console.log('anioActual', anioActual);

        let fechaRegistroLibro = new Date(fechaRegistro);
        let anioLibro = fechaRegistroLibro.getFullYear();
        console.log('anioLibro', anioLibro);

        let antiguedad = anioActual - anioLibro;
        console.log('antiguedad', antiguedad);
        
        if (antiguedad === 0)
            descuento = precio * this.DESCUENTO_LIBRO_NUEVO;
        else if (antiguedad >= 10)
            descuento = precio * this.DESCUENTO_LIBRO_ANTIGUO;
        else 
            descuento = precio * this.DESCUENTO_LIBRO_INTERMEDIO;

        console.log('descuento', descuento);
        return descuento;

    }

    render() {
        const {titulo, precio, fechaRegistro} = this.props;
        return (
            <div>
                <h2>{titulo}</h2>
                <p>Precio: {precio}</p>
                <p>Fecha de registro: {fechaRegistro}</p>
                <p>Descuento: {this.obtenerDescuento()}</p>
            </div>

        );
    }
}

export default Libro;