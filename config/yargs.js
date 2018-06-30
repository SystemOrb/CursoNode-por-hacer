const ARG = require('yargs').command(
    'crear', 'Aplicación para verificar las tareas', {
        crear: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    }
).command('actualizar', 'Para actualizar el estado de una tarea', {
    actualizar: {
        alias: 'a',
        demand: true,
        desc: 'Actualizar el estado de una tarea'
    }
}).command('completar', 'Para completar una tarea', {
    completado: {
        alias: 'c',
        demand: false,
        default: true
    }
}).command('listar', 'Mostrar todas las tareas', {
    listar: {
        demand: false,
        alias: 'l',
        desc: 'Mostrar lista de tareas'
    }
}).command('borrar', 'Borrar una tarea', {
    borrar: {
        demand: true,
        alias: 'b',
        desc: 'Borrar un elemento del array'
    }
}).help().argv;
module.exports = {
    ARG
}