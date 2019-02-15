let opciones = {

    descripcion: {
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer',
        demand: true

    },
    completado: {
        alias: 'c',
        desc: 'Marca la tarea como completada o pendiente',
        default: true
    }

};

let opciones2 = {

    descripcion: {
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer',
        demand: true

    }

}

const argv = require('yargs')
    .command('crear', 'crea una nueva tarea', opciones2)
    .command('actualizar', 'actualiza las tareas', opciones)
    .command('borrar', 'Borra una tarea', opciones2)
    .help()
    .argv;

module.exports = {
    argv
}