import Fastify from "fastify";

const fastify = Fastify({
    logger: true 
})



fastify.get('/', function (request, reply) {
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


