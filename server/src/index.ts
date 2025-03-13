import express from 'express';
import logger from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { connectDB } from './db';

async function startServer() {
  const port = process.env.PORT ?? 3000;

  const app = express();
  const server = createServer(app);
  const io = new Server(server, {
    cors: { origin: '*' },
  });

  await connectDB();

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
  });

  app.use(logger('dev'));

  app.get('/', (_req, res) => {
    res.send('Hello, World!');
  });

  server.listen(port, () => {
    console.log(`🚀 Server running on port: ${port}`);
  });
}

startServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
