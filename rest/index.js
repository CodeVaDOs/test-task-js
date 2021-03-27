const https = require('https');

require('dotenv').config()

const API_KEY = process.env.API_KEY;

const getCalendarData = (cal_id, timeMin, timeMax) => {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${cal_id}/events?timeMin=${timeMin}&timeMax=${timeMax}&key=${API_KEY}`;

  return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        const data = [];
        res.on('data', (chunk) => {
          data.push(chunk);
        })

        res.on('end', () => {
          const d = JSON.parse(data.join(''));
          d.error
            ? reject(d)
            : resolve(d);
        })
      }).on('error', (e) => {
        reject(e);
      });
    }
  )
}

const getBusyIntervals = (calendarData) => {
  return calendarData.items.map((item) => ({
    start: item.start.dateTime,
    end: item.end.dateTime
  }));
}

const from = new Date();
const to = new Date();
to.setMonth(6);

getCalendarData('fb3up8j21od3mf1k8b6hk0489s@group.calendar.google.com', from.toISOString(), to.toISOString())
  .then(d => getBusyIntervals(d))
  .then(busyIntervals => {
    console.log(busyIntervals);
  })
  .catch(e => console.log(e));
