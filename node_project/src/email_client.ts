import { EmailResponse } from './models/email-response';
import { HttpClient } from './util/http-client';
import { EmailTemplate } from './models/email_template';
import { AxiosResponse } from 'axios';

export class EmailClient {

    public static sendEmail(emailTemplate: EmailTemplate[], url: string, token: string): void {
        HttpClient.post<EmailTemplate[], EmailResponse[]>(url, emailTemplate, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then((response: AxiosResponse<EmailResponse[]>) => {
            console.log("Email sent successfully, refer below for response: ");
            console.log(response.data);
        }).catch((error: any) => {
            console.log("Error occurred while sending Email, refer below error details");
            console.error(error);
        });
    }

}

const token: string = "";
const url: string = "";
const emailTemplate: EmailTemplate[] = [{
    "fromAddress": "",
    "emailHTMLBody": "",
    "subject": "",
    "toAddress": "",
    "ccAddress": "",
    "bccAddress": "",
    "caseId": ""
}];

//calling an email client
EmailClient.sendEmail(emailTemplate, url, token);