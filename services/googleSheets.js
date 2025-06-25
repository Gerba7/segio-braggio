import { google } from 'googleapis';



const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});


const sheets = google.sheets({ version: 'v4', auth });

// const auth = new google.auth.OAuth2(
//   process.env.GOOGLE_SHEETS_CLIENT_ID,
//   process.env.GOOGLE_SHEETS_CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT
// );


const cmsSheets = google.sheets({ version: 'v4', auth });


export async function appendDataToSheet(data) {

  // auth.setCredentials({ 
  //   refresh_token: process.env.GOOGLE_SHEETS_REFRESH_TOKEN,
  //   tls: {
  //       rejectUnauthorized: false
  //   }
  // })

  // const accessToken = await auth.getAccessToken();
  
  // auth.setCredentials({ 
  //   access_token: accessToken
  // });
  

  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = 'Sheet1!A2:Z'; 

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: { values: [data] },
    });
    
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }

}


export async function getSheetData(data) {
  
  const spreadsheetId = process.env.SPREADSHEET_CMS_ID;
  const range = 'ToBe!B1:B15'; 

  try {

    const response = await cmsSheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })

    return extractData(response.data.values)

  } catch(err) {

    console.log("Error fetching Sheets Data:", err)
    return []

  }

}


const extractData = (data) => {
  
  const info = {
    start: data[0][0],
    end: data[1][0],
    classes: data[2][0],
    hours: data[3][0],
    day: data[4][0],
    firstHour: data[5][0],
    secondHour: data[6][0],
    thirdHour: data[7][0],
    fourthHour: data[8][0],
    usdPrice: data[9][0],
    usdTimes: data[10][0],
    usdTimesPrice: data[11][0],
    pesosPrice: data[12][0],
    pesosCuotas: data[13][0],
    pesosCuotasValor: data[14][0],
  }

  return {info}

}