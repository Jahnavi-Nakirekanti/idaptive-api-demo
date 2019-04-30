export class User {
    "id": string = '';
    "Name": string = '';
    "Mail": string = '';
    "DisplayName": string = '';
    "Password": string = '';
    "PasswordNeverExpire": boolean = true;
    "ForcePasswordChangeNext": boolean = false;
    "ServiceUser": boolean = false;
    "SendEmailInvite": boolean = true;
    "SendSmsInvite": boolean = false;
    "Description": string = '';
    "OfficeNumber": string = '';
    "HomeNumber": string = '';
    "MobileNumber": string = '';
    "ReportsTo": string = '';
    "InSysAdminRole": boolean = false;
    "InEverybodyRole": boolean = true;
}
