import { Router } from 'express';
import { getUser } from '../controllers/getUserComCache.controller';
import { getEmail } from '../controllers/getUserComCache.controller copy';
import { semCache } from '../controllers/getUserSemCache.controller';

import { login } from '../controllers/Login.controller';

const router = Router();

router.post('/login', login);
router.get('/getUser', getUser);
router.get('/semChache', semCache);
router.get('/getEmail', getEmail);

export { router };
