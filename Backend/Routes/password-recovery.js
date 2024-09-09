import { Router } from 'express';

const router = Router();
import { sendEmail } from '../Controllers/password-recovery.js';

router.post("/password-recovery", sendEmail);

export default router;