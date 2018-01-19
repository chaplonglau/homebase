class twilioController {
  init(daySummary,dayTempMax,dayTempMin) {
    console.log('twilio init controller has been reached')
    this.twilioAdapter(daySummary,dayTempMax,dayTempMin)
  }

  twilioAdapter(daySummary,dayTempMax,dayTempMin){

      var accountSid = '***REMOVED***'; // replace with your account SID
      var authToken = '***REMOVED***'; // replace with your auth token

      client.messages
        .create({
          to: '+14087086249',
          from: '+13475279841',
          body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        })
        .then(message => console.log(message.sid));
      }



}