import express from 'express';
import workshopRouter from './routers/workshopRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';
import maintenanceRouter from './routers/maintenanceRouter.js';
import dbConfig from './config/dbConfig.js';

dbConfig();

const app = express();

app.use(express.json());

app.use('/workshop', workshopRouter);
app.use('/vehicle', vehicleRouter);
app.use('/maintenance', maintenanceRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));