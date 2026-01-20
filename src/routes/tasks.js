import { tasks } from '../database/tasks.js';
import { parseBody } from '../middleware/parseBody.js';
import crypto from 'node:crypto';

export async function tasksRoutes(req, res) {
  const { method, url } = req;

  if (method === 'GET' && url === '/tasks') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(tasks));
  }

  if (method === 'POST' && url === '/tasks') {
    try {
      const body = await parseBody(req);

      if (!body || !body.title || !body.description) {
        res.statusCode = 400;
        return res.end('title e description são obrigatórios');
      }

      const task = {
        id: crypto.randomUUID(),
        title: body.title,
        description: body.description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      tasks.push(task);

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(task));
    } catch (error) {
      res.statusCode = 400;
      return res.end('JSON inválido');
    }
  }

  if (method === 'PUT') {
    const routeParams = url.match(/^\/tasks\/([a-zA-Z0-9-]+)$/);

    if (routeParams) {
      const [, id] = routeParams;

      const taskIndex = tasks.findIndex(task => task.id === id);

      if (taskIndex === -1) {
        res.statusCode = 404;
        return res.end('Task não encontrada');
      }

      try {
        const body = await parseBody(req);

        const { title, description } = body ?? {};

        if (!title && !description) {
          res.statusCode = 400;
          return res.end('Informe title ou description');
        }

        const existingTask = tasks[taskIndex];

        tasks[taskIndex] = {
          ...existingTask,
          title: title ?? existingTask.title,
          description: description ?? existingTask.description,
          updated_at: new Date(),
        };

        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(tasks[taskIndex]));
      } catch {
        res.statusCode = 400;
        return res.end('JSON inválido');
      }
    }
  }

  if (method === 'DELETE') {
    const routeParams = url.match(/^\/tasks\/([a-zA-Z0-9-]+)$/);

    if (routeParams) {
      const [, id] = routeParams;

      const taskIndex = tasks.findIndex(task => task.id === id);

      if (taskIndex === -1) {
        res.statusCode = 404;
        return res.end('Task não encontrada');
      }

      tasks.splice(taskIndex, 1);

      res.statusCode = 204;
      return res.end();
    }
  }


  return false;
}
