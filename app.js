/* Este es la logica de mi función tareas por hacer
 */
const { ARG } = require('./config/yargs');
require('colors');
const {
    jobCreate,
    saveData,
    getListado,
    Actualizar,
    Borrar
} = require('./db/db');
switch (ARG._[0]) {
    case 'crear':
        jobCreate(ARG.crear).then(
            (jobData) => {
                saveData(jobData).then(
                    (saveFile) => {
                        if (saveFile) {
                            console.log('Tarea guardada con éxito'.green);
                        }
                    }
                ).catch(
                    (err) => console.log(err)
                );
            }
        ).catch(
            (err) => console.log(err)
        )
        break;
    case 'listar':
        getListado().then(
            (data) => {
                for (let object of data) {
                    console.log('==================='.rainbow);
                    console.log('Tarea: ' + object.description.green);
                    console.log('Estado: ' + object.complete);
                    console.log('==================='.rainbow);
                }
            }
        ).catch((err) => console.log(err))
        break;
    case 'actualizar':
        Actualizar(ARG.actualizar).then(
            (success) => console.log(success)
        ).catch(
            (err) => console.log(err)
        );
        break;
    case 'borrar':
        Borrar(ARG.borrar).then(
            (removed) => {
                if (removed) {
                    console.log('Item eliminado con éxito'.red);
                }
            }
        ).catch(
            (err) => console.log(err)
        );
        break;

}