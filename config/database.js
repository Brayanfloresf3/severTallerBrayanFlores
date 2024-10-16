import mongoose from 'mongoose'

let url = process.env.URI_MONGO

// console.log(url)

async function conectionDataBase(url) {
    try {
      await  mongoose.connect(url)
        console.log("Base de datos Conectada a Mongo")
    } catch (error) {
        console.log(error);
    }
}

conectionDataBase(url)


