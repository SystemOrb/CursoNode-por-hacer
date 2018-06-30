/*
Archivo para hacer la data persistente
*/
const fs = require('fs');
let jobs = [];
let jobCreate = async(description, complete = false) => {
    if (!description || (typeof description !== 'string')) {
        throw new Error('Debes asignar una descripción a esta tarea');
    }
    loadDB();
    data = {
        description,
        complete
    }
    jobs.push(data);
    return jobs;
}
let loadDB = () => {
    try {
        jobs = require('./db.json');
    } catch (error) {
        jobs = [];
    }
}
let saveData = async(data) => {
    if (!data) {
        throw new Error('Debes asignar un objeto de tipo Tarea');
    }
    fs.writeFile('./db/DB.json', JSON.stringify(jobs), (err) => {
        if (err) throw err;
    });
    return true;
}
let getListado = async() => {
    try {
        loadDB();
        return jobs;
    } catch (error) {
        throw new Error('Fallo al cargar el listado ' + error);
    }
}
let Actualizar = async(description, complete = true) => {
    loadDB();
    try {
        let index = jobs.findIndex((item) => {
            return item.description === description;
        });
        if (index >= 0) {
            jobs[index].complete = complete;
            saveData(jobs);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error(' No se pudo cargar el listado de tareas ' + error);
    }
}
let Borrar = async(description) => {
    loadDB();
    try {
        let index = jobs.findIndex((item) => {
            return item.description === description
        });
        if (index >= 0) {
            jobs.splice(jobs[index], 1);
            saveData(jobs);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error('No se pudo eliminar esta tarea ' + error);
    }
}
module.exports = {
    jobCreate,
    saveData,
    getListado,
    Actualizar,
    Borrar
}