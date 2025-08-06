import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect(":@/");
        console.log('MongoDB connect...')
    } catch (error) {
        
    }
}