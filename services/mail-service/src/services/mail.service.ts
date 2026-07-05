import { IMailData } from "../controllers/mail.controller";
import transporter from "../config/mail.config";

const sendMailService = async (data : IMailData) => {

    let info = await transporter.sendMail({
        from: data.from,
        to: data.email,
        subject: data.subject,
        html: data.body
    })

return info; 
}
export default sendMailService;