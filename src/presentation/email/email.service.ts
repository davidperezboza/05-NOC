import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface sendEmailOptions {
    to: string;
    subject: string;
    htmlBody: string;
    // TODO attachements: 
};

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
        const {to, subject, htmlBody:html} = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html,
            });

            console.log(sentInformation);
            
            return true;
        } catch (error) {
            return false;
        }
    };

};