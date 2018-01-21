class ForecastController {
  init(userZip) {
    console.log('forecastcontroller has been reached')
    this.zipcodeAdapter(userZip)
  }

  zipcodeAdapter(userZip){
     var latitude=0;
     var longitude=0; 
     var googlekey= ""
     $.ajax({
       url : `https://maps.googleapis.com/maps/api/geocode/json?address=${userZip}&key=${googlekey}`,
       method: "GET",
       success:function(data){
           latitude = data.results[0].geometry.location.lat;
           longitude= data.results[0].geometry.location.lng;
           ForecastController.prototype.forecastAdapter(latitude,longitude)
       
       }
    })
  }

  forecastAdapter(latitude,longitude){
    $.ajax({
       url : `https://api.darksky.net/forecast/${forecastkey}/${latitude},${longitude}`,
       method: "GET"
    }).done(function(response){
      let daySummary=response.daily.summary
      let dayTempMax= response.daily.data[0].temperatureMax
      let dayTempMin=response.daily.data[0].temperatureMin
      ForecastController.prototype.renderForecast(daySummary,dayTempMax, dayTempMin)
    })
  }

  renderForecast(daySummary,dayTempMax, dayTempMin)
  {
    $('#weather-feed').empty()
    $('#weather-feed').append(`
        <div class="col-md-9">
          <p> ${daySummary} Today Max: ${dayTempMax} Today Min: ${dayTempMin} </p> 
        </div>
    `)
     ForecastController.prototype.addTexterEventHandler(daySummary,dayTempMax,dayTempMin)
  }


}