const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = todo.getlistado();
        for (let tarea of listado) {
            console.log('\n====Por Hacer===='.cyan);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================='.cyan);

        }
        break;

    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no introducido');

}