import { PrismaClient } from '@prisma/client';
import { envs } from './config/plugins/envs.plugin';
import { MongoDatabase } from './data/mongo/';
import { Server } from './presentation/server';

const main = async() => {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    Server.start()
};

(async() => {
    main();
})();
