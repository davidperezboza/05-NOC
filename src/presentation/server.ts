import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-case/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FyleSystemDataSource } from "../infrastructure/datasources/filye-system.datasource";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FyleSystemDataSource(),
);

export class Server {
    public static start(){
        console.log('Server started..');
        const url = 'http://google.com/';
        //CronService.createJob(
        //    '*/5 * * * * *',
        //    () => {
        //      new CheckService(
        //        fileSystemLogRepository,
        //        //undefined,
        //        //undefined,
        //        () => console.log(`${url} is ok`),
        //        (error) => console.log(error)
        //      ).execute(url); 
        //      //new CheckService().execute('http://localhost:3000/'); 
        //    }
        //);
    }
};