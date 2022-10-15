import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,

    },
    email:{
        type: String,
        required: true,
    }
})

export default model('User',userSchema)