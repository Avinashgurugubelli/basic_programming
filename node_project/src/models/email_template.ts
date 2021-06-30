
export interface EmailTemplate {
    fromAddress: string;
    emailHTMLBody: string;
    subject: string;
    toAddress: string;
    ccAddress: string;
    bccAddress: string;
    caseId: string;
}