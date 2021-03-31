const https = require('https');

require('dotenv').config()

const API_KEY = process.env.API_KEY;

const getCalendarData = (cal_id, timeMin, timeMax) => {
  const data = JSON.stringify({
    timeMin,
    timeMax,
    items: [
      {id: cal_id}
    ]
  })

  const options = {
    hostname: 'www.googleapis.com',
    path: `/calendar/v3/freeBusy?key=${API_KEY}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  return new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        const data = [];
        res.on('data', chunk => {
          data.push(chunk)
        })

        res.on('end', () => {
          const d = JSON.parse(data.join(''));
          d.error ? reject(d) : resolve(d);
        })
      }).on('error', (e) => {
        reject(e);
      })
      req.write(data);
    }
  )
}

const from = new Date();
from.setMonth(1);
const to = new Date();
to.setMonth(2);

const calendarId = 'fb3up8j21od3mf1k8b6hk0489s@group.calendar.google.com';

getCalendarData(calendarId, from.toISOString(), to.toISOString())
  .then(d => {
    console.log(d.calendars[calendarId])
  })
  .catch(e => console.log(e));
