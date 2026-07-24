import express from 'express';

import { router as routerFromFold2 } from './Fold2/end-points.js';

const router = express.Router();

router.use('/table1', routerFromFold1);

export { router };
