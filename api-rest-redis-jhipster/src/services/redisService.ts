import { redisConfig } from "../config/redisConfig";
const redis = redisConfig();

export class RedisService {


    public setKeyRedis(value: String) {
        console.log("método setKeyRedis");
        redis.set(value, "x-auth-token test");
    }

    public async validateToken(value: String) {
        console.log("método validateToken");
        let response = 0;

        try {
            const res = await redis.get(value);
            if (res == null) {
                return -1;
            }
            return 0;
        } catch (err) {
            throw new Error('Erro de conexão');
        }
        
    }

}

