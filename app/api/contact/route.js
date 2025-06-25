import { appendDataToSheet } from '@/services/googleSheets';
import { abyaMail } from '@/services/nodemailer';



export async function POST(request, res) {
  
  const { name, surname, email, phone, country, course } = await request.json();

  if (request.method === 'POST') {
    
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const range = 'Sheet1!A2:F';

    const data = [
      name, surname, email, phone, country, course
    ];
    
    try {

      const success = await appendDataToSheet(data, spreadsheetId, range);

      if (success) {

        // const mailOptions = {
        //   from: 'your_email@example.com',
        //   to: formData.email,
        //   subject: 'Form Submission Confirmation',
        //   text: `Thank you for submitting the form. Your information is:\n\n${JSON.stringify(formData)}`,
        // };

        await abyaMail('To Be', {name, surname, email, phone, country, course});

        return new Response('Data submitted successfully and email sent', {
          status: 200,
        })
        

      } else {

        return new Response('Error submitting data', {
          status: 500,
        })

      }

    } catch (error) {

      console.error(error);
      
      return new Response('An error occurred', {
        status: 500,
      })

    }
  } else {

    return new Response('Method Not Allowed', {
      status: 405,
    })

  }
  
}