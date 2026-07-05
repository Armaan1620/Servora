const mailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Servora OTP Verification</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#333333;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:40px 20px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center"
              style="background:linear-gradient(135deg,#2563eb,#4f46e5);padding:40px 20px;color:#ffffff;">

              <h1 style="margin:0;font-size:32px;font-weight:bold;">
                Servora
              </h1>

              <p style="margin-top:10px;font-size:16px;opacity:.95;">
                Secure Account Verification
              </p>

            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:45px 40px;">

              <h2 style="margin-top:0;font-size:26px;color:#111827;">
                Verify Your Email
              </h2>

              <p style="font-size:16px;line-height:28px;color:#4b5563;">
                Hello,
              </p>

              <p style="font-size:16px;line-height:28px;color:#4b5563;">
                Thank you for choosing <strong>Servora</strong>.
                Use the One-Time Password (OTP) below to verify your email address.
              </p>

              <!-- OTP -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">

                    <div style="
                      display:inline-block;
                      padding:18px 36px;
                      margin:25px 0;
                      background:#f3f6ff;
                      border:2px dashed #2563eb;
                      border-radius:12px;
                      font-size:34px;
                      font-weight:bold;
                      letter-spacing:10px;
                      color:#2563eb;
                    ">
                      {{OTP}}
                    </div>

                  </td>
                </tr>
              </table>

              <p style="font-size:15px;color:#dc2626;font-weight:600;">
                ⏳ This OTP will expire in <strong>5 minutes</strong>.
              </p>

              <p style="font-size:15px;line-height:26px;color:#4b5563;">
                If you didn't request this verification code, you can safely ignore this email.
              </p>

              <hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;">

              <p style="margin:0;font-size:14px;color:#6b7280;">
                Need help?
              </p>

              <p style="margin:8px 0 0;">
                <a href="mailto:armaaaaan2003@gmail.com"
                  style="color:#2563eb;text-decoration:none;font-weight:600;">
                  armaaaaan2003@gmail.com
                </a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="background:#f9fafb;padding:30px;text-align:center;font-size:13px;color:#6b7280;">

              <strong>Servora</strong>

              <br><br>

              Built with ❤️ by
              <strong>Armaan Sharma</strong>

              <br><br>

              © 2026 Servora. All rights reserved.

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;

export default mailTemplate;