import {envs} from '../../../src/config/plugins/envs.plugin';

describe('env.plugin.ts', () => { 
    test('should return options', () => { 
         expect(envs).toEqual({
            PORT: 3000,
            MAILER_EMAIL: 'merovingio1987@gmail.com',
            MAILER_SEND_EMAIL: 'david.perez@babelgroup.com',
            MAILER_SECRET_KEY: 'nmvtgjonfosdiiwi',
            MAILER_SERVICE: 'gmail',
            PROD: true,
            MONGO_URL: 'mongodb://david:1234567879@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'david',
            MONGO_PASS: '1234567879'
         });
    }); 

    test('should return PORT', async() => { 
        jest.resetModules();
        process.env.PORT = 'ABC';
        try {
            await import('../../../src/config/plugins/envs.plugin');
            expect(true).toBe(false);
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }
    });
});