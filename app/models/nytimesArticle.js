const NYtimesArticle = (function(){
  var counter = 0;

  return class {
    constructor(url, byline, title, published_date) {
      this.url = url
      this.byline = byline
      this.title = title
      this.published_date = published_date

      Store.nytimesArticles.push(this)
      console.log('Created new NYtimesArticle object')
    }


  build(){
    $('#nyt-feed').append(`<li>
          <div class="panel panel-default">
            <div class="panel-heading">
            </div>
            <div class="panel-body">
              <h3> <a href="${this.url}"> ${this.title} </a></h3>
              <p> ${this.byline} </p>
              <p> ${this.published_date} </p>
              <br>
            </div>
          </div>
        </li>`)
    }
  }
}())
