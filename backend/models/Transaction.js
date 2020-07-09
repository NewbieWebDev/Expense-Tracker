const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim: true,
        required:[true,"PLease add some text"]
    },
    amount: {
        type:Number,
        required:[true,'PLease add a positive or negative number']
    },
    createdAT : {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Transaction',TransactionSchema);