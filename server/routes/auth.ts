import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  res.json({ message: 'Login' });
});

export default router;
