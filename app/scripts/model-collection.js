var TeamModel = Backbone.Model.extend({});

var TeamCollection = Backbone.Collection.extend({
	model: TeamModel,

	url: 'http://api.espn.com/v1/sports/basketball/nba/teams?enable=roster&apikey=swz92eu339qnv7tsd8ypqpxq',

	parse: function(response) {
    	return response.sports[0].leagues[0].teams;
  	}

})