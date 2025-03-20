import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-case/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FyleSystemDataSource } from "../infrastructure/datasources/filye-system.datasource";
import { envs } from "../config/plugins/envs.plugin";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FyleSystemDataSource(),
);

export class Server {
    public static start(){
        console.log('Server started..');
        const url = 'http://google.com/';

        //Mandar email
        //const emailService = new EmailService()
        //emailService.sendEmail({
        //  to: envs.MAILER_SEND_EMAIL,
        //  subject: 'Logs de sistema',
        //  htmlBody: `
        //    <h3>Logs de sistema - NOC</h3>
        //    <p>Culpa aliqua cillum aliquip culpa amet laborum officia cillum consequat ea non anim non. Elit non id quis dolor laboris. Consectetur culpa amet in sint minim deserunt mollit duis amet mollit esse mollit do.</p>
        //    <p>Ver logs adjuntos</p>
        //  `,
        //});
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