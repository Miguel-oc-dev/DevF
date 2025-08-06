import dotenv from 'dotenv'

dotenv.config();

export const port = process.env.PORT_APP
export const uri = process.env.URI_APP

export const mongoDomain = process.env.MONGO_DOMAIN
export const mongoUser = process.env.MONGO_USER
export const mongoPwd = process.env.MONGO_PWD
export const mongoDb = process.env.MONGO_DATABASE
