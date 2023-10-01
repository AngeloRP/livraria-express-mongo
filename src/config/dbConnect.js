import 'dotenv/config';
import mongoose, { Mongoose } from "mongoose";

async function conectaNaDataBase () {
    mongoose.connect(process.env.STRING_CONEXAO_DB);

    return mongoose.connection;
}

export default conectaNaDataBase;