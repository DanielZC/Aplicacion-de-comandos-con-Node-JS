const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('listar','Imprime una listado de multiplicaciones', opts)
.command('crear','Genera un archivo de texto con la tabla', opts)
.help()
.argv

module.exports = {
    argv
}