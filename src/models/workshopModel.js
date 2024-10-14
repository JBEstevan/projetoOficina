import { Schema, model } from 'mongoose';

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        minLength: 8,
        maxLength: 8,
    },
    specialties: {
        type: [String],
        required: true
    }
});

export default model('Workshop', workshopSchema);