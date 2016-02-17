console.log("Configurando API Facebook");

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1750210281874040",
    secret: "9d4d96fef6f99259fb703f35ef89b49f"
});
