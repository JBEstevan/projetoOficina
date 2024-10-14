import Vehicle from '../models/vehicleModel.js';

export const store = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        return res.status(201).json(vehicle);
    } catch {
        return res.status(400).json({ error: 'Vehicle creation failed' });
    }
};

export const index = async (req, res) => {
    try {
        const vehicle = await Vehicle.find().exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ error: 'Vehicle search failed' });
    }
};

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ error: 'Vehicle update failed' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Vehicle deletion failed' });
    }
};