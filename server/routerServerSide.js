var fs = Npm.require("fs");

var fail = function(response) {
    response.statusCode = 404;
    response.end();
};

var dataFile = function() {
    var datapath;
    //datapath = "/home/jedilink/usr/Cubestudio/cubestudioSynced/public/marketingCampaigns";
    datapath = "/var/www/cubestudio/public/marketingCampaigns";
    var cid = this.params.campaignId;
    var uid = this.params.userId;
    console.log("  - Campaña:" + cid);
    console.log("  - Usuario:" + uid);
    var file = null;
    var ip = this.request.connection.remoteAddress;

    var marketingCampaign = global["marketingCampaign"];
    if ( valid(marketingCampaign) && valid(cid) ) {
        var c = marketingCampaign.findOne({friendlyUrl: cid});
        if ( valid(c) ) {
            file = datapath + "/" + c.image;
        }
    }

    var u = null;
    var marketingTrackingReport = global["marketingTrackingReport"];
    if ( !valid(marketingTrackingReport) || !valid(uid) ) {
        return fail(this.response);
    }

    var oid;
    try {
        oid = new Mongo.ObjectID(uid);
    }
    catch (_error) {
        console.log("ERROR: uid invalido");
        return fail(this.response);
    }
    u = marketingTrackingReport.findOne({"_id": oid});
    if ( !valid(u) ) {
        console.log("  - User not found: [" + oid + "]");
        return fail(this.response);
    }

    var count = 0;
    var viewsDetails = [];
    if ( valid(u.views) ) {
        count = u.views;
    }
    if ( valid(u.viewsDetails) ) {
        viewsDetails = u.viewsDetails;
    }
    count++;
    viewsDetails.push({date: new Date(), ip: ip});
    marketingTrackingReport.update({_id: oid}, {$set: {views: count}});
    marketingTrackingReport.update({_id: oid}, {$set: {viewsDetails: viewsDetails}});

    var stat = null;
    try {
        stat = fs.statSync(file);
    } 
    catch (_error) {
        console.log("ERROR: " + _error);
        return fail(this.response);
    }

    this.response.writeHead(200, {
        "Content-Type": "image/jpeg",
        //"Content-Disposition": "attachment; filename=" + "custom.filename",
        "Content-Length": stat.size
    });

    // Pipe the file contents to the response
    fs.createReadStream(file).pipe(this.response);
};

Router.route("/c/:campaignId/:userId", dataFile, {where: 'server'});
