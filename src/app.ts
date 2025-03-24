import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo/';
import { Server } from './presentation/server';

const main = async() => {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    //Crear una colección = tables, dociumentos = rows
    //const newLog = await LogModel.create({
    //    message: 'Test Message desde Mongo',
    //    origin: 'app.ts',
    //    level: 'low',
    //});
//
    //await newLog.save();
//
    //console.log(newLog);
    //const logs = await LogModel.find();
    //console.log(logs[1].message);
    //Server.start();
};

(async() => {
    main();
})();
