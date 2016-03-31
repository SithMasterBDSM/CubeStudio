Router.route("/manageMarketingCampaigns", {
	name: "manageMarketingCampaigns",
	data: function()
	{

	},
	waitOn: function() {
		return Meteor.subscribe("marketingCampaign") && Meteor.subscribe("marketingTrackingReport");
	}
});

Template.manageMarketingCampaigns.helpers({
	dbMarketingCampaing: function() {
		return marketingCampaign.find();
	}
});
