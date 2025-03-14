import { CronService } from "./cron/cron-service";
import { CheckService } from "./domain/use-case/checks/check-service";

export class Server {
    public static start(){
        console.log('Server started..');
        const url = 'http://google.com';
        CronService.createJob(
            '*/5 * * * * *',
            () => {
              new CheckService(
                () => console.log(`${url} is ok`),
                (error) => console.log(error)
              ).execute(url); 
              //new CheckService().execute('http://localhost:3000/'); 
            }
        );
    }
};