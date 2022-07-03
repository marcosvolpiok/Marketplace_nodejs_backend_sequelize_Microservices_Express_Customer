const { createClient } = require("redis");

const getClient = async () => {
    await createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    });
    return client.connect();
}

const getCache = async (client, key) => {
    return await client.get(key);
}

const setCache = async (client, key, value) => {
    client.set(key, value);
}




module.exports = {getCache, setCache};