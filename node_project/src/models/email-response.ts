export interface EmailResponse {
    messageStatus: string;
    messageStatusCode: number;
    messageID?: string;
    description?: string;
    caseID?: string;
}