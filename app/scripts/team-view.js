var TeamView = Backbone.View.extend({

	className: 'hat-item-js',

	teamTemplate: _.template($('#team-template').text()),


	initialize: function(){
		$('.team-list').append(this.el);
		this.render()
	},

	render: function(){
		var teamRenderedTemplate = this.teamTemplate(this.model.attributes);
		this.$el.html(teamRenderedTemplate);
	}
   
})