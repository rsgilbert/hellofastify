import Fastify from "fastify";
import ourFirstRoute from './our-first-route.js'

const fastify = Fastify({
    logger: true 
})

fastify.register(ourFirstRoute)

fastify.get('/hello', function (request, reply) {
    reply.send({ hello: 'How are you?'})
})


fastify.listen({ port: 3000, host:'0.0.0.0' }, function (err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    else {
        fastify.log.info('The Server is now listening on ', address)
    }
})


