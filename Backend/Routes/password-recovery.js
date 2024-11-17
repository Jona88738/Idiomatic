import { Router } from 'express';

const router = Router();
import  {sendEmailF} from '../Controllers/password-recovery.js';

router.post("/password-recovery", sendEmailF);

export default router;