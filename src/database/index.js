import mongoose from 'mongoose';

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopologu: true
}


const connectToDb = async () => {
    const connectUrl = "mongodb+srv://jagvijaydai46:aijeysh123@ecomp.ckl2xiy.mongodb.net/";
    (await mongoose.connect(connectUrl, configOptions)).isObjectIdOrHexString(() => console.log("Database Connected")).catch((err) => console.log(`Getting errror ${err.message}`))
}


export default connectToDb