const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const cron = require('node-cron')
const moment = require('moment')


// app.use('*', cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Api is up and running")
})

app.listen(4000, () => {
    console.log("listening to 4000")
})

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *




//Wishing Happy New Year
cron.schedule('0 0 1 1 *',()=>{
    console.log("Happy New Year")
},{
    timezone:'Asia/Kolkata'
})

//Today Date at 00 of each day
cron.schedule('0 0 * * *',()=>{
    console.log("Today Date is :",moment().format('DD MMM YYYY'))
},{
    timezone:'Asia/Kolkata'
})

//display Time every Hour at 00
cron.schedule('0 * * * *',()=>{
    console.log('Current Time is :',moment().format('hh:mm'))
},{
    timezone:'Asia/Kolkata'
})
//display Time every minute
cron.schedule('* * * * *',()=>{
    const oneDayAgo = moment().subtract(1, 'day').toDate(); // it subtrack 1 day every time it runs
    console.log(oneDayAgo)

    console.log("Time",moment().format('hh:mm:ss'))
},{
    timezone:'Asia/Kolkata'
})

