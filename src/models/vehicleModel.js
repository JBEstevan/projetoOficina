import { Schema, model } from 'mongoose';
import dbConfig from '../config/dbConfig.js';

const vehicleSchema = new Schema({
    plate: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintenances: {
        type: [Schema.Types.ObjectId],
        ref: "Maintenance"
    }
});

export default model('Vehicle', vehicleSchema);