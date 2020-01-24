const fs = require('fs')
const colors = require('colors')
let data = ''

let listar = (base,limite) => {
    if(!Number(base) || !Number(limite)){
        console.log(`El valor ingresado: ${colors.red(base)} o ${colors.red(limite)} no son un numero`)
        return
    }else{
        for (let index = 1; index <= limite; index++) {
            console.log(`${colors.magenta(base)} * ${colors.magenta(index)} = ${colors.cyan(base * index)}`)
        }
    }

}


let crearArchivo = (base,limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject(`El valor ingresado: ${colors.red(base)} o ${colors.red(limite)} no son un numero`)
            return
        }

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index} \n`)
        }
        
        let nombre = `tabla-${base}-al-${limite}.txt`

        fs.writeFile('tablas/'+nombre,data,(err) =>{
            if(err){
                reject(err)
            }else{
                resolve(nombre)
            }
        })
    });
}

module.exports = {
    crearArchivo,
    listar
}