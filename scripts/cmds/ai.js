module.exports = {
	config: {
		name: "ai",
		aliases: ["ai"],
		version: "1.0",
		author: "ʬɸʬ Sønïč Shïsûį ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of fleetway super Sonic ",
		longDescription: "send you pic of fleetway super Sonic",
		category: "no prefix",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/xjN5mq3/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: "j'écoute tes préoccupations",attachment: await global.utils.getStreamFromURL(img)
})
}
}
