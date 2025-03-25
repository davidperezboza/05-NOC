import {MongoDatabase} from '../../../src/data/mongo/init';

describe('init MongoDB', () => { 
    test('should connect to MongoDB', async() => { 
        console.log(process.env.MONGO_URL, process.env.MONGO_DB_NAME);
         //MongoDatabase.connect({
         //   
         //});
    }); 
});