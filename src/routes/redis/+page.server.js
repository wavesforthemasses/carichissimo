import { createClient } from 'redis';

// Create Redis client with correct TLS options for Redis Cloud
const client = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: true,
        servername: 'redis-14756.c135.eu-central-1-1.ec2.redns.redis-cloud.com', // Extract from your REDIS_URL
        rejectUnauthorized: false
    }
});

// Connect to Redis and handle errors
client.on('error', err => console.error('Redis Client Error:', err));
await client.connect();

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // Example: Get some data from Redis
    try {
        const value = await client.get('example-key');
        return {
            data: value
        };
    } catch (error) {
        console.error('Redis Load Error:', error);
        return {
            data: null
        };
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    // Example: Set data in Redis
    set: async ({ request }) => {
        const data = await request.formData();
        const value = data.get('value');
        
        try {
            await client.set('example-key', value);
            return { success: true };
        } catch (error) {
            console.error('Redis Set Error:', error);
            return { success: false };
        }
    },
    
    // Example: Delete data from Redis
    delete: async () => {
        try {
            await client.del('example-key');
            return { success: true };
        } catch (error) {
            console.error('Redis Delete Error:', error);
            return { success: false };
        }
    }
};
