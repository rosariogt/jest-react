import Libro from "./libro";

describe('Libro', ()=> {

    it('Calcular el descuento para un libro nuevo', ()=>{
        const descuentoEsperado = 0;
        const libroNuevo = new Libro({titulo: 'TestingBook1', precio:50, fechaRegistro:'2023-06-05'});
        expect(libroNuevo.obtenerDescuento()).toBe(descuentoEsperado);
    })

    it('Calcular el descuento para un libro antiguo', ()=>{
        const descuentoEsperado = 12.5;
        const libroAntiguo = new Libro({titulo: 'TestingBook2', precio:25, fechaRegistro:'2010-06-05'});
        expect(libroAntiguo.obtenerDescuento()).toBe(descuentoEsperado);
    })

    it('Calcular el descuento para un libro de antiguedad intermedia', ()=>{
        const descuentoEsperado = 6;
        const libroIntermedio = new Libro({titulo: 'TestingBook3', precio:60, fechaRegistro:'2021-06-05'});
        expect(libroIntermedio.obtenerDescuento()).toBe(descuentoEsperado);
    })

})