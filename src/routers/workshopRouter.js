import { Router } from "express";
import {
    store,
    index,
    update,
    destroy
} from '../controllers/workshopController.js';

import via_cep from "../middlewares/via_cep.js"

const router = Router();

router.post('/', via_cep, store);
router.get('/', index);
router.put('/:id', via_cep, update);
router.delete('/:id', destroy);

export default router;