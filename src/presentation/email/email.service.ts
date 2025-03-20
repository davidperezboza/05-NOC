import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface sendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[],
};

interface Attachment {
    filename: string;
    path: string; 
}

//TODO: Attachement

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        },
    });

    async sendEmail(options: sendEmailOptions):Promise<boolean> {
        const {to, subject, htmlBody:html, attachments} = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html,
                attachments,
            });

            return true;
        } catch (error) {
            return false;
        }
    };

    async sendEamilWithFileSytemLogs(to: string | string[]){
        const subject = 'Logs del servidor';
        const htmlBody = `
            <h3>Logs de sistema - NOC</h3>
            <p>Culpa aliqua cillum aliquip culpa amet laborum officia cillum consequat ea non anim non. Elit non id quis dolor laboris. Consectetur culpa a
            <p>Ver logs adjuntos</p>
        `;

        const attachments:Attachment[] = [
            {filename: 'logs-all.log', path: './logs/logs-all.log'},
            {filename: 'logs-high.log', path: './logs/logs-high.log'},
            {filename: 'logs-medium.log', path: './logs/logs-medium.log'},
        ];

        return this.sendEmail({
            to,
            subject,
            htmlBody,
            attachments,
        });
    }

};