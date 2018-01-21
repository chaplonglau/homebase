class nytimesController {

  init() {
    console.log('NYTIMES.init() is being reached')
    this.nytimesAdapter()
  }

  nytimesAdapter(){
     var url = "https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/30.json";
     url += '?' + $.param({
         'api-key': ''
     });
     $.ajax({
         url: url,
         method: 'GET',
     }).done(function(result) {
         var list= result.results
         for (var i=0; i<list.length; i++)
         {
            let url=list[i].url
            let byline= list[i].byline
            let title= list[i].title
            let published_date=list[i].published_date
            // debugger
            // if (list[i].media){
            //     let image=list[i].media[0]["media-metadata"][0].url
            // }
            // else {
            //     let image="http://icons.iconarchive.com/icons/martz90/circle-addon1/512/new-york-times-icon.png"
            // }
            var nytimesArticle= new NYtimesArticle(url,byline,title,published_date)
         }
         nytimesController.prototype.feedBuilder()
     }).fail(function(err) {
         throw err;
     });
  }
  
  feedBuilder(){
    for (var i=0; i<15; i++){
        Store.nytimesArticles[i].build()
    }
  } 
} 
