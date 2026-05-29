import { Router, Request, Response } from 'express';
import Todo from '../models/Todo';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

router.post('/', async (req: Request, res: Response) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.status(201).json(todo);
});

router.patch('/:id', async (req: Request, res: Response) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

router.delete('/:id', async (req: Request, res: Response) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
