import fastify from 'fastify';

export const app = (() => {
  const app = fastify();

  app.get('/', (_, reply) => {
    reply.send('Hello world!');
  });

  if (import.meta.env.PROD) {
    void app.listen(3000);
  }

  return app;
})();
