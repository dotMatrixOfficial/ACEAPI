
const Vehicle = require('../models/vehicle-model');					
const Concealment = require('../models/concealment-model');
const authenticateVehicle=require("v_ace_matrix"); 
const API_KEY = "PhZdV9P3dL66ppZDApk9RIB0QViK7ABG";
var vehiclenotExist=false;

exports.init = async(req, res) => {
	
	console.log("req.................",req.body.year)
	// var data =JSON.stringify (req.body.con);
	// var jsonData= JSON.parse(data);
	// console.log("data.................",jsonData)
var make = req.body.make.toLowerCase();
var model = req.body.model.toLowerCase();
var year =req.body.year;
	let VehicleData= await authenticateVehicle.authVehicle(year,make,model,API_KEY)
	.catch(err=>{
		VehicleData ={
			"listing":[{
				build:{
					make:make,
					model:model,
					year:year,
					body_type:"unKnown"
				}
			}]
		}
	});
	let vehicleExistQuerry = await Vehicle.findOne({make:make,model:model,year:year
	});
	console.log(vehicleExistQuerry);
    if(vehicleExistQuerry == null){
			vehiclenotExist =true;
		}
		else{
			vehiclenotExist =	false;
		}
if(vehiclenotExist){

	var vehicle = new Vehicle({ 
		make: VehicleData.listings[0].build.make.toLowerCase(), 
		model: VehicleData.listings[0].build.model.toLowerCase(), 
		bodytype:VehicleData.listings[0].build.body_type.toLowerCase(),
		year: VehicleData.listings[0].build.year ,
		});
		console.log(vehicle);

  vehicle.save(function (err) {
    if(err) return console.error(err.stack)
  
	console.log("vehicle is added")
	    var concealment = new Concealment({
		make: VehicleData.listings[0].build.make.toLowerCase(), 
		model: VehicleData.listings[0].build.model.toLowerCase(),
		year: VehicleData.listings[0].build.year ,
		vehicleId: vehicle._id,
		bodytype:VehicleData.listings[0].build.body_type.toLowerCase(),
    front: 
    {
		concealment:[{
			src:[],
			discovered:[]
		}]
    },
    center: 
    {
			concealment:[{
				src:[],
				discovered:[]
			}]

    },
    rear: 
    {
			concealment:[{
				src:[],
				discovered:[]
			}]
    },
    undercarriage: 
    {
			concealment:[{
				src:[],
				discovered:[]
			}]
    }
});

    concealment.save(function (err) {
	  if(err) return console.error(err.stack)
	  
	  console.log("concealment is added")
    });
	
  });  
  res.send({status:"success", message: "Vehical Added successfully!!!", data:vehicle});

}else{
	console.log("We Alrady Have Vehicle");
res.send("We Alrady Have Vehicle");
}
};
exports.findbyMake=(req,res) =>{
	Vehicle.find({ make: req.params.make.toLowerCase()
	})
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.findbyModel=(req,res) =>{
	Vehicle.find({ model: req.params.model.toLowerCase()
	})
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.findbyYear=(req,res) =>{

	Vehicle.find({ year:req.params.year
	})
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.findbyMakeModel=(req,res) =>{
	Vehicle.find({ model: req.params.model.toLowerCase(),make:req.params.make.toLowerCase()
	})
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.findbyMakeModelYear=(req,res) =>{
	Vehicle.find({ make: req.params.make.toLowerCase(), 
		model: req.params.model.toLowerCase(),
		year:req.params.year
	})
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};

exports.findAll = (req, res) => {
	Vehicle.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};