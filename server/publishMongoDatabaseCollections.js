console.log("Publishing MongoDB to Minimongo");

Meteor.publish(
	"marketingCampaign", function () {
		return marketingCampaign.find();
	}
);
Meteor.publish(
	"marketingTrackingReport", function () {
		return marketingTrackingReport.find();
	}
);
