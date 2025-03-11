/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {*} options 
 */
async function routes(fastify, options) {
    fastify.get('/', async (request,response) => {
        return {
            region: 'Kampala'
        }
    })
}


export default routes;