const Redis = require("ioredis");

export const redisConfig = (): typeof Redis => {
    return new Redis(
        {
            port: 6379,
            host: "redis-0",
            password: "a-very-complex-password-here"
        }
    );
}