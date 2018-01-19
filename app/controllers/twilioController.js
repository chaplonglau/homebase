class twilioController {
  init(daySummary,dayTempMax,dayTempMin) {
    console.log('twilio init controller has been reached')
    this.twilioAdapter(daySummary,dayTempMax,dayTempMin)
  }

  twilioAdapter(daySummary,dayTempMax,dayTempMin){

      var accountSid = 'AC88294b3dfbf1f4e1ec2e7cdcbc4e7dea'; // replace with your account SID
      var authToken = 'e826550dc311ec0a11c6ac2cf5008ee2'; // replace with your auth token

      client.messages
        .create({
          to: '+14087086249',
          from: '+13475279841',
          body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        })
        .then(message => console.log(message.sid));
      }



}