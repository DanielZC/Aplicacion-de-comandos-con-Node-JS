const multiplicar = require('./file/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs').argv

let accion = argv._[0]
console.log(argv)

switch (accion) {
    case 'listar':
            multiplicar.listar(argv.base,argv.limite)
        break;
    case 'crear':
            multiplicar.crearArchivo(argv.base,argv.limite).then((result) => {
                console.log(`The file ${result.green} has been saved!`)
            }).catch((err) => {
                console.log(err)
            });
        break

    default:
        console.log(`"${argv._[0].red}" no es un comando reconocido`)
        break;
}