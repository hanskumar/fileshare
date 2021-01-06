module.exports = (data)=>{

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Demystifying Email Design</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
      <style type="text/css">
        a[x-apple-data-detectors] {color: inherit !important;}
      </style>
    
    </head>
    <body style="margin: 0; padding: 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding: 20px 0 30px 0;">
    
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
      <tr>
        <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
          <img src="https://assets.codepen.io/210284/h1_1.gif" alt="Creating Email Magic." width="300" height="230" style="display: block;" />
        </td>
      </tr>
      <tr>
        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
            <tr>
              <td style="color: #153643; font-family: Arial, sans-serif;">
                <p style="font-size: 16px;margin: 0;">${data.emailFrom} has shared a file with you.</h1>
                <p style="font-size: 16px;margin: 0;">Please click to given button to download your file.</p>
              </td>
            </tr>
            <tr>
              <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                    <a style="display: inline-block; background-color: #19cca3; color: #ffffff; border: 1px solid #19cca3; border-radius: 6px; line-height: 220%; width: 200px; font-family: Helvetica, sans-serif; font-size: 18px; font-weight: 600; text-align: center; text-decoration-line: none; text-size-adjust: none; margin-left: auto;margin-right: auto;vertical-align: middle;
                    display: table;
                    position: relative;" href="https://www.activecampaign.com" target="_blank" rel="noopener noreferrer">Download</a>           
              </td>
            </tr>
            
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#ee4c50" style="padding: 30px 30px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
            <tr>
              <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
                <p style="margin: 0;">&reg; All rights Reserved@Ishare<br/>
               <a href="#" style="color: #ffffff;">Unsubscribe</a> to this newsletter instantly</p>
              </td>
              <td align="right">
                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                  <tr>
                    <td>
                      <a href="http://www.twitter.com/">
                        <img src="https://assets.codepen.io/210284/tw.gif" alt="Twitter." width="38" height="38" style="display: block;" border="0" />
                      </a>
                    </td>
                    <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                    <td>
                      <a href="http://www.twitter.com/">
                        <img src="https://assets.codepen.io/210284/fb.gif" alt="Facebook." width="38" height="38" style="display: block;" border="0" />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </table>
    </body>
    </html>`
}