import { Router } from 'express';
const router = Router();
import { updatePassword } from '../Controllers/update-password.js';

router.post("/update-password", updatePassword);

export default router;