const fastify = require('fastify')({logger: true})
fastify.register(require('fastify-cors'), {
    cors: true
})
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'Requests'}
    }
})
fastify.register(require('./routes/todos'))

const PORT = 4000

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()