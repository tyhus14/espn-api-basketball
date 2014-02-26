var MainRouter = Backbone.Router.extend({
  routes: {
    "teams" : "showTeams",
  },
 
  initialize: function(){
    this.items = new TeamCollection;
    this.items.on('add', function(item){
      new TeamView({model: item})
    })
  },
 
  showTeams: function(){
    this.items.fetch();
  }
});