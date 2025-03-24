import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-case/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FyleSystemDataSource } from "../infrastructure/datasources/filye-system.datasource";
import { envs } from "../config/plugins/envs.plugin";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-case/email/send-email-logs";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";

const logRepository = new LogRepositoryImpl(
  //new FyleSystemDataSource(),
  new MongoLogDataSource(),
);

const emailService = new EmailService();

export class Server {
    public static async start(){
        console.log('Server started..');
        const url = 'http://googlehjshdsvbhj.com/';

        //Mandar email
        //new SendEmailLogs(emailService, fileSystemLogRepository).execute(envs.MAILER_SEND_EMAIL)
        //emailService.sendEamilWithFileSytemLogs(envs.MAILER_SEND_EMAIL);
        //emailService.sendEmail({
        //  to: envs.MAILER_SEND_EMAIL,
        //  subject: 'Logs de sistema',
        //  htmlBody: `
        //    <h3>Logs de sistema - NOC</h3>
        //    <p>Culpa aliqua cillum aliquip culpa amet laborum officia cillum consequat ea non anim non. Elit non id quis dolor laboris. Consectetur culpa amet in sint minim deserunt mollit duis amet mollit esse mollit do.</p>
        //    <p>Ver logs adjuntos</p>
        //  `,
        //});
        //const logs = await logRepository.getLog(LogSeverityLevel.low)
        //console.log(logs);
        //CronService.createJob(
        //    '*/5 * * * * *',
        //    () => {
        //      new CheckService(
        //        logRepository,
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