


var TeamView = Backbone.View.extend({

	className: 'team-item-js',

	teamTemplate: _.template($('#team-template').text()),


	initialize: function(){
		$('.team-list').append(this.el);
		this.render()
	},

	render: function(){
		// document.getElementById(body).style.backgroundColor = '<%= color %>';
		var teamRenderedTemplate = this.teamTemplate(this.model.attributes);
		this.$el.html(teamRenderedTemplate);


		// $('body').css('background-color: #<%= color %>;');
	}
   
})
