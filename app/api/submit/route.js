import { abyaMailSubmit } from '@/services/nodemailer';



export async function POST(request) {
  
  const { name, surname, email, phone, message, course } = await request.json();

  if (request.method === 'POST') {
    
    try {

      await abyaMailSubmit(course, {name, surname, email, phone, message, course});

      return new Response('Data submitted successfully and email sent', {
        status: 200,
      })
        

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