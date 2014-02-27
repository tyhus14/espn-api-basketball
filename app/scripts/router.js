var MainRouter = Backbone.Router.extend({
  routes: {
    // "teams" : "showTeams",
    'team/:id' : 'featuredTeam'
  },
 
  initialize: function(){
    this.items = new TeamCollection();
    this.headlines = new HeadlineCollection()
    this.items.fetch();
  },
 
  showTeams: function(){
  },

  featuredTeam: function(id){
    console.log('hi')
    // if (id) {
      // this.items.url = "http://api.espn.com/v1/sports/basketball/nba/teams/"+ id +"/news?&apikey=swz92eu339qnv7tsd8ypqpxq"
      this.headlines.url = "http://api.espn.com/v1/sports/basketball/nba/teams/"+ id +"/news?&apikey=swz92eu339qnv7tsd8ypqpxq"
    // }

    this.headlines.fetch()

    $('.featured-list').html('')

    console.log('id is: ', id)
    // new FeaturedView({model: )
  }


});