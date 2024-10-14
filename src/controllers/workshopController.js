import Workshop from '../models/workshopModel.js';

export const store = async (req, res) => {
    try {
        console.log(req.body)
        const workshop = await Workshop.create(req.body);
        console.log(workshop)
        return res.status(201).json(workshop);
    } catch {
        return res.status(400).json({ error: 'Workshop creation failed' });
    }
};

export const index = async (req, res) => {
    try {
        const workshop = await Workshop.find().exec();
        return res.status(200).json(workshop);
    } catch (error) {
        return res.status(400).json({ error: 'Workshop search failed' });
    }
};

export const update = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(workshop);
    } catch (error) {
        return res.status(400).json({ error: 'Workshop update failed' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Workshop.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Workshop deletion failed' });
    }
};