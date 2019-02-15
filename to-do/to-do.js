const fs = require('fs');
const colors = require('colors');

let listadoporhacer = [];

//Pendiente con el archivo punto .json NO ".JSON";

const guardar = () => {

    let data = JSON.stringify(listadoporhacer);
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDb = () => {

    try {
        listadoporhacer = require('../DB/data.json');
    } catch (error) {
        listadoporhacer = [];
    }


}

const crear = (descripcion) => {

    cargarDb();

    let porhacer = {

        descripcion,
        completado: false
    };


    listadoporhacer.push(porhacer);

    guardar();

    return porhacer;
}

let getlistado = () => {

    //esto es para cargar la "base de datos"
    cargarDb();
    return listadoporhacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDb(); //Hay que cargar la base de datos

    //estoy buscando la poscion del listado por hacer que contenga la misma descripcion sintactica
    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    //si el findindex no se cumple retorna un -1

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardar();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDb();

    let nuevolistado = listadoporhacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if (nuevolistado.length === listadoporhacer.length) {
        return false;
    } else {
        listadoporhacer = nuevolistado;
        guardar();
        return true;
    }
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}