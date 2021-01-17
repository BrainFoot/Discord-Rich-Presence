const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "details for the rich presence",
        state: "the state for the rich presence",
        largeImageKey: "name for the large image",
        largeImageText: "info for the large image",//only if you want it
        smallImageKey: "name for the small image", //only if you want it
        smallImageText: "text for the small imag" //only if you want it
    });

    console.log("Rich presence is now online!");
});

rpc.login({
    clientId:"the client id from discord developers" //https://discord.com/developers/applications
})