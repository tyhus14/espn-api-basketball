var TeamModel = Backbone.Model.extend({});

var TeamCollection = Backbone.Collection.extend({
	model: TeamModel,

	url: 'http://api.espn.com/v1/sports/basketball/nba/teams?enable=roster&apikey=swz92eu339qnv7tsd8ypqpxq',

	parse: function(response) {
		color = response.sports[0].leagues[0].teams[0].color;
    	return response.sports[0].leagues[0].teams;
  	
  	},

  	initialize: function(){
  		this.on('add', function(item){
        	new TeamView({model: item})
    	})
  	}

});

var HeadlineModel = Backbone.Model.extend({});

var HeadlineCollection = Backbone.Collection.extend({
	model: HeadlineModel,

	parse: function(response){
		return response.headlines
	},

	initialize: function(){
  		this.on('add', function(item){
        	new HeadlineView({model: item})
    	})
  	}
})

