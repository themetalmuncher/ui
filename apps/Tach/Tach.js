function Tach(){
	this.info = {
		title: "Tacho",
		preferredSize: [300,"auto"],
		streams: ["engineInfo", "electrics"]
	};
}

Tach.prototype.initialize = function(){
};

Tach.prototype.update = function(streams){
	$(this.rootElement).html("rpm: "+streams["engineInfo"][4].toFixed() + "<br /> Speed: "+(streams["electrics"]["wheelspeed"]*3.6).toFixed());//streams["vehicleinfo"]);
};

Tach.prototype.resize = function(){
	console.log("Tach resize");
}
