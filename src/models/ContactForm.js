import mongoose from "mongoose"

const ContactSchema=new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email: { 
        type: String,
        required:true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ContactForm=mongoose.models.ContactForm||mongoose.model('ContactForm',ContactSchema);

export default ContactForm;