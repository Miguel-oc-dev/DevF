import mongoose from "mongoose"
import {mongoDomain, mongoUser, mongoPwd, mongoDb} from './constans.js'

const connectDB = async() => {
    try {
        await mongoose.connect(`${mongoDomain}${mongoUser}:${mongoPwd}@${mongoDb}/`);
        console.log('MongoDB connect...')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}