import 'dotenv/config';

import cors from '@fastify/cors';
import FastifyJWT from '@fastify/jwt';
import Fastify from 'fastify';

import { env } from './config/env';
import { privateRoutes, publicRoutes } from './routes';

const fastify = Fastify();

fastify.register(cors)

fastify.register(FastifyJWT, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '60s',
  },
});
fastify.register(publicRoutes);
fastify.register(privateRoutes);

fastify.listen({ port: 3000 }).then(() => {
  console.log('> Server is now listening on http://localhost:3000');
});
