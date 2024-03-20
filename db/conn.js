const mongoose = require('mongoose')
const url = 'localhost'


async function main(){
    await mongoose.connect('url')
}

main().catch((err) => console.log(err))

module.exports = mongoose