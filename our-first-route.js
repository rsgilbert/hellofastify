/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {*} options 
 */
async function routes(fastify, options) {
    const people = fastify.mongo.db.collection('people')

    fastify.get('/', async (request,response) => {
        return people.find().toArray()
    })

    fastify.get('/:firstName', async (request, reply) => {
        const firstName = request.params.firstName
        const result = await people.findOne({ firstName})
        if(!result) {
            throw new Error('No person with firstName ' +  firstName)
        }
        return result;
    })

    const personJsonBodySchema = {
        type: 'object',
        required: ['firstName'],
        properties: {
            firstName: { type: 'string'}
        }
    }

    const schema = {
        body: personJsonBodySchema
    }

    fastify.post('/', { schema }, async (request, reply) => {
        const result = await people.insertOne({ firstName: request.body.firstName, })
        return result;
    })
}


export default routes;