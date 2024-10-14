import mongoose from 'mongoose';

function dbConfig() {
    mongoose
    .connect('mongodb://localhost:27017/workshop')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

export default dbConfig;