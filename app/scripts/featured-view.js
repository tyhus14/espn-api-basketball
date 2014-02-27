var HeadlineView = Backbone.View.extend({

	className: 'headlines',

	featuredTemplate: _.template($('#headline-template').text()),


	initialize: function(){
		console.log('featuer view model is: ', this.model)
		$('.featured-list').append(this.el);
		this.render()
	},

	render: function(){
		var featuredRenderedTemplate = this.featuredTemplate(this.model.attributes);
		this.$el.html(featuredRenderedTemplate);
	}
   
})