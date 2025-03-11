import fastifyMongodb from "@fastify/mongodb";
import fastifyPlugin from "fastify-plugin";

/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {*} options 
 */
export function dbConnector(fastify, options) {
    fastify.register(fastifyMongodb, {
        url: 'mongodb://localhost:27017/test'
    })
}


export default fastifyPlugin(dbConnector)