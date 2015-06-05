//######### VEHICLE obj - Parent Obj ###########################/
// Create object that contains data for one vehicle
function Vehicle(){

	var id = null;
	var vehicle = 0;
	
	// Default all display text to "--"
	var speed = "--";		// Speed
	var accel = "--";		// Acceleration
	var heart = "--";		// Heart Rate

	var fGax = "--";		// X-Accel
	var fGay = "--";		// Y-Accel
	var fGaz = "--";		// Z-Accel

	// Default map location to Marriot Downtown Austin
	var lat = 30.264524;	// Latitude
	var lng = -97.743435;	// Longtitude

	// Default insurance to 50%
	var insurance = 500;	// Insurance cost ($'s)

	var driverimg = "imgs/fill.jpg";		// Driver Camera
	var roadimg = "imgs/fill.jpg";			// Road Camera
}

//######### VEHICLE obj - PROTOTYPES ###########################/

// Prototype function to set all the Alpha Numberic Values of Vehicle (i.e. all but imgs)
Vehicle.prototype.updateData = function(_id, _vehicle, _speed, _accel, _heart, _fGax, _fGay, _fGaz, _lat, _lng, _insurance){
	
	this.id = _id;
	this.vehicle = _vehicle;
	
	// Default all display text to "--"
	this.speed = _speed;		// Speed
	this.accel = _accel;		// Acceleration
	this.heart = _heart;		// Heart Rate

	this.fGax = _fGax;		// X-Accel
	this.fGay = _fGay;		// Y-Accel
	this.fGaz = _fGaz;		// Z-Accel

	// Default map location to Marriot Downtown Austin
	this.lat = _lat;	// Latitude
	this.lng = _lng;	// Longtitude

	// Default insurance to 50%
	this.insurance = _insurance;	// Insurance cost ($'s)
}

// Prototype function to update source of driver facing image
Vehicle.prototype.updateDriverImg = function(img_src){
	this.driverimg = img_src;
}

// Prototype function to update source of front facing image
Vehicle.prototype.updateRoadImg = function(img_src){
	this.roadimg = img_src;
}

// Returns ID value
Vehicle.prototype.getData = function(){
	return this.id;
}