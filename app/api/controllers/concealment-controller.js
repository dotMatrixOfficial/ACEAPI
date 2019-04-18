
const Concealment = require('../models/concealment-model');					
const Vehicle=require('../models/vehicle-model');	
var upload    = require('./upload');

exports.findAll = (req, res) => {
	Concealment.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
exports.getById = (req, res) => {
	Concealment.findById(req.params.concealmentId, function(err, movieInfo){
        if (err) {
            next(err);
        } else {
            res.json({status:"success", message: "Movie found!!!", data:{movies: movieInfo}});
        }
    });
};
exports.getByMake = (req, res) => {
	Concealment.find(
        { 
            make: req.params.make.toLowerCase()
        }
    )
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.getByModel = (req, res) => {
	Concealment.find(
        { 
            model: req.params.model.toLowerCase()
        }
    )
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.getByYear = (req, res) => {
	Concealment.find(
        { 
            year: req.params.year
        }
    )
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.getByMakeModel = (req, res) => {
    Concealment.find(
        { 
            make: req.params.make.toLowerCase(),
            model:req.params.model.toLowerCase()
        }
    )
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
};
exports.addtoFront= (req,res) =>{
  upload(req, res,(error) => {
      console.log("req.files",req.files)
      console.log("req.dis",req.body.discovered)

    if(error){
       res.send(error);
    }else{
      if(req.files == undefined){
  

        res.send(error);

      }else{
        // var disArray = [];
        var discoveredArray=[];

        // console.log("fdfdfas",(JSON.parse(req.body.discovered[0])));

        if(typeof req.body.discovered == typeof "ddcsdcs"){
          // disArray[0]=JSON.parse(req.body.discovered);
        //   console.log(disArray[0]);
          discoveredArray[0]= (JSON.parse(req.body.discovered ));
        }else{
            for(let i= 0;i<req.body.discovered.length;i++){
              // disArray[0]=JSON.parse(req.body.discovered[i]);

              discoveredArray[i]= (JSON.parse((req.body.discovered[i] )));
              ;
            }
        }
        // console.log("discoverdArray.........",discoveredArray)
        var fullPath=[] ;
        for (let i=0;i<req.files.length;i++)
        {
            fullPath[i] = "files/"+req.files[i].filename;

        }
        console.log("fullPATH",fullPath)
                let data=
                {
                                                
                                        title:req.body.title,
                                        description: req.body.description,
                                        location:req.body.location,
                                        date:req.body.date,
                                        userId:req.body.userId,
                                        referenceNo:req.body.referenceNo,
                                        countFound:req.body.countFound,
                                        discovered:discoveredArray,
                                        src:fullPath
                                    
                }
       
       
           Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
            if (err) return console.log(err);
            var frontData = JSON.parse(JSON.stringify(concealment.front.concealment.push(data)))
            // console.log (concealment.rear.concealment[0].src);
            concealment.save( function(err){
                if (err) {
                    res.status(401).json({
                      message: err,
                    });
                    console.log(err);
                  }
                  else if(err){
                    res.status(500).json({
                        message: err,
                      });
                      console.log(err);

                  }
                else{
      
                    res.status(200).json({
                        status:"success", message: "Concealment added to Front successfully!!!", data:concealment.front
                    });
              }
            });
          });
    }
  }
});  
   
            //  Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
            //   if (err) return handleError(err);
            //   console.log (concealment.rear);
            //   concealment.save( function(err){
            //       if (err) {
            //           res.status(401).json({
            //             message: err,
            //           });
            //           console.log(err);
            //         }
            //         else if(err){
            //           res.status(500).json({
            //               message: err,
            //             });
            //             console.log(err);
    
            //         }
            //       else{
        
            //           res.status(200).json({
            //               status:"success", message: "Consulment add successfully!!!", data:concealment.rear
            //           });
            //     }
            //   });
            // });
};
exports.addtoCenter= (req,res) =>{
    upload(req, res,(error) => {
        console.log("req.files",req.files)
        console.log("req.dis",req.body.discovered)
  
      if(error){
         res.send(error);
      }else{
        if(req.files == undefined){
    
  
          res.send(error);
  
        }else{
          // var disArray = [];
          var discoveredArray=[];
  
          // console.log("fdfdfas",(JSON.parse(req.body.discovered[0])));
  
          if(typeof req.body.discovered == typeof "ddcsdcs"){
            // disArray[0]=JSON.parse(req.body.discovered);
          //   console.log(disArray[0]);
            discoveredArray[0]= (JSON.parse(req.body.discovered ));
          }else{
              for(let i= 0;i<req.body.discovered.length;i++){
                // disArray[0]=JSON.parse(req.body.discovered[i]);
  
                discoveredArray[i]= (JSON.parse((req.body.discovered[i] )));
                ;
              }
          }
          // console.log("discoverdArray.........",discoveredArray)
          var fullPath=[] ;
          for (let i=0;i<req.files.length;i++)
          {
              fullPath[i] = "files/"+req.files[i].filename;
  
          }
          console.log("fullPATH",fullPath)
                  let data=
                  {
                                                  
                                          title:req.body.title,
                                          description: req.body.description,
                                          location:req.body.location,
                                          date:req.body.date,
                                          userId:req.body.userId,
                                          referenceNo:req.body.referenceNo,
                                          countFound:req.body.countFound,
                                          discovered:discoveredArray,
                                          src:fullPath
                                      
                  }
         
         
             Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
              if (err) return console.log(err);
              var frontData = JSON.parse(JSON.stringify(concealment.center.concealment.push(data)))
              // console.log (concealment.rear.concealment[0].src);
              concealment.save( function(err){
                  if (err) {
                      res.status(401).json({
                        message: err,
                      });
                      console.log(err);
                    }
                    else if(err){
                      res.status(500).json({
                          message: err,
                        });
                        console.log(err);
  
                    }
                  else{
        
                      res.status(200).json({
                          status:"success", message: "Concealment added to Front successfully!!!", data:concealment.center
                      });
                }
              });
            });
      }
    }
  });  
     
              //  Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
              //   if (err) return handleError(err);
              //   console.log (concealment.rear);
              //   concealment.save( function(err){
              //       if (err) {
              //           res.status(401).json({
              //             message: err,
              //           });
              //           console.log(err);
              //         }
              //         else if(err){
              //           res.status(500).json({
              //               message: err,
              //             });
              //             console.log(err);
      
              //         }
              //       else{
          
              //           res.status(200).json({
              //               status:"success", message: "Consulment add successfully!!!", data:concealment.rear
              //           });
              //     }
              //   });
              // });
  };
exports.findByVehicleId= (req,res) =>{
    Concealment.find(
        { 
            vehicleId: req.params.vehicleId
        }
    )
	.then(products => {
			res.send(products);
	}).catch(err => {
			res.status(500).send({
					message: err.message
			});
	});
},
exports.addtoUndercarriage= (req,res) =>{
    upload(req, res,(error) => {
        console.log("req.files",req.files)
        console.log("req.dis",req.body.discovered)
  
      if(error){
         res.send(error);
      }else{
        if(req.files == undefined){
    
  
          res.send(error);
  
        }else{
          // var disArray = [];
          var discoveredArray=[];
  
          // console.log("fdfdfas",(JSON.parse(req.body.discovered[0])));
  
          if(typeof req.body.discovered == typeof "ddcsdcs"){
            // disArray[0]=JSON.parse(req.body.discovered);
          //   console.log(disArray[0]);
            discoveredArray[0]= (JSON.parse(req.body.discovered ));
          }else{
              for(let i= 0;i<req.body.discovered.length;i++){
                // disArray[0]=JSON.parse(req.body.discovered[i]);
  
                discoveredArray[i]= (JSON.parse((req.body.discovered[i] )));
                ;
              }
          }
          // console.log("discoverdArray.........",discoveredArray)
          var fullPath=[] ;
          for (let i=0;i<req.files.length;i++)
          {
              fullPath[i] = "files/"+req.files[i].filename;
  
          }
          console.log("fullPATH",fullPath)
                  let data=
                  {
                                                  
                                          title:req.body.title,
                                          description: req.body.description,
                                          location:req.body.location,
                                          date:req.body.date,
                                          userId:req.body.userId,
                                          referenceNo:req.body.referenceNo,
                                          countFound:req.body.countFound,
                                          discovered:discoveredArray,
                                          src:fullPath
                                      
                  }
         
         
             Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
              if (err) return console.log(err);
              var frontData = JSON.parse(JSON.stringify(concealment.undercarriage.concealment.push(data)))
              // console.log (concealment.rear.concealment[0].src);
              concealment.save( function(err){
                  if (err) {
                      res.status(401).json({
                        message: err,
                      });
                      console.log(err);
                    }
                    else if(err){
                      res.status(500).json({
                          message: err,
                        });
                        console.log(err);
  
                    }
                  else{
        
                      res.status(200).json({
                          status:"success", message: "Concealment added to Front successfully!!!", data:concealment.undercarriage
                      });
                }
              });
            });
      }
    }
  });  
     
              //  Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
              //   if (err) return handleError(err);
              //   console.log (concealment.rear);
              //   concealment.save( function(err){
              //       if (err) {
              //           res.status(401).json({
              //             message: err,
              //           });
              //           console.log(err);
              //         }
              //         else if(err){
              //           res.status(500).json({
              //               message: err,
              //             });
              //             console.log(err);
      
              //         }
              //       else{
          
              //           res.status(200).json({
              //               status:"success", message: "Consulment add successfully!!!", data:concealment.rear
              //           });
              //     }
              //   });
              // });
  };
  exports.addtoRear= (req,res) =>{
    upload(req, res,(error) => {
        console.log("req.files",req.files)
        console.log("req.dis",req.body.discovered)
  
      if(error){
         res.send(error);
      }else{
        if(req.files == undefined){
    
  
          res.send(error);
  
        }else{
          // var disArray = [];
          var discoveredArray=[];
  
          // console.log("fdfdfas",(JSON.parse(req.body.discovered[0])));
  
          if(typeof req.body.discovered == typeof "ddcsdcs"){
            // disArray[0]=JSON.parse(req.body.discovered);
          //   console.log(disArray[0]);
            discoveredArray[0]= (JSON.parse(req.body.discovered ));
          }else{
              for(let i= 0;i<req.body.discovered.length;i++){
                // disArray[0]=JSON.parse(req.body.discovered[i]);
  
                discoveredArray[i]= (JSON.parse((req.body.discovered[i] )));
                ;
              }
          }
          // console.log("discoverdArray.........",discoveredArray)
          var fullPath=[] ;
          for (let i=0;i<req.files.length;i++)
          {
              fullPath[i] = "files/"+req.files[i].filename;
  
          }
          console.log("fullPATH",fullPath)
                  let data=
                  {
                                                  
                                          title:req.body.title,
                                          description: req.body.description,
                                          location:req.body.location,
                                          date:req.body.date,
                                          userId:req.body.userId,
                                          referenceNo:req.body.referenceNo,
                                          countFound:req.body.countFound,
                                          discovered:discoveredArray,
                                          src:fullPath
                                      
                  }
         
         
             Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
              if (err) return console.log(err);
              var frontData = JSON.parse(JSON.stringify(concealment.rear.concealment.push(data)))
              // console.log (concealment.rear.concealment[0].src);
              concealment.save( function(err){
                  if (err) {
                      res.status(401).json({
                        message: err,
                      });
                      console.log(err);
                    }
                    else if(err){
                      res.status(500).json({
                          message: err,
                        });
                        console.log(err);
  
                    }
                  else{
        
                      res.status(200).json({
                          status:"success", message: "Concealment added to Front successfully!!!", data:concealment.rear
                      });
                }
              });
            });
      }
    }
  });  
     
              //  Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
              //   if (err) return handleError(err);
              //   console.log (concealment.rear);
              //   concealment.save( function(err){
              //       if (err) {
              //           res.status(401).json({
              //             message: err,
              //           });
              //           console.log(err);
              //         }
              //         else if(err){
              //           res.status(500).json({
              //               message: err,
              //             });
              //             console.log(err);
      
              //         }
              //       else{
          
              //           res.status(200).json({
              //               status:"success", message: "Consulment add successfully!!!", data:concealment.rear
              //           });
              //     }
              //   });
              // });
  };
exports.findbyMakeModelYear=(req,res) =>{
	Concealment.find({ make: req.params.make.toLowerCase(), 
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
exports.uploadFileTOFront=(req,res)=>{
    upload(req, res,(error) => {
        if(error){
           res.send(error);
        }else{
          if(req.files.length == 0){
            
            res.send(error.message);
  
          }else{
            var fullPath=[] ;
            for (let i=0;i<req.files.length;i++)
            {
                fullPath[i] = "files/"+req.files[i].filename;

            }
           
               Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
                if (err) return handleError(err);
                for (let i=0;i<fullPath.length;i++)
                {
                    var rearData = JSON.parse(JSON.stringify(concealment.front.concealment[0].src.push(fullPath[i])))
    
                }
                // console.log (concealment.rear.concealment[0].src);
                concealment.save( function(err){
                    if (err) {
                        res.status(401).json({
                          message: err,
                        });
                        console.log(err);
                      }
                      else if(err){
                        res.status(500).json({
                            message: err,
                          });
                          console.log(err);

                      }
                    else{
          
                        res.status(200).json({
                            status:"success", message: "Image uploaded successfully!!!", data:concealment.front
                        });
                  }
                });
              });
        }
      }
    });  

};
exports.uploadFileTOCenter=(req,res)=>{
    upload(req, res,(error) => {
        if(error){
           res.send(error);
        }else{
          if(req.files.length == 0){
            
            res.send(error.message);
  
          }else{
            var fullPath=[] ;
            for (let i=0;i<req.files.length;i++)
            {
                fullPath[i] = "files/"+req.files[i].filename;

            }
           
               Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
                if (err) return handleError(err);
                for (let i=0;i<fullPath.length;i++)
                {
                    var rearData = JSON.parse(JSON.stringify(concealment.center.concealment[0].src.push(fullPath[i])))
    
                }
                // console.log (concealment.rear.concealment[0].src);
                concealment.save( function(err){
                    if (err) {
                        res.status(401).json({
                          message: err,
                        });
                        console.log(err);
                      }
                      else if(err){
                        res.status(500).json({
                            message: err,
                          });
                          console.log(err);

                      }
                    else{
          
                        res.status(200).json({
                            status:"success", message: "Image uploaded successfully!!!", data:concealment.center
                        });
                  }
                });
              });
        }
      }
    });  

};exports.uploadFileTOUndercarriage=(req,res)=>{
    console.log("out......................................................",req)
    upload(req, res,(error) => {
        console.log("in..............................................",req)

        if(error){
           res.send(error);
        }else{
          if(req.files.length == 0){
            
            res.send(error.message);
  
          }else{
            var fullPath=[] ;
            for (let i=0;i<req.files.length;i++)
            {
                fullPath[i] = "files/"+req.files[i].filename;

            }
           
               Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
                if (err) return handleError(err);
                for (let i=0;i<fullPath.length;i++)
                {
                    var rearData = JSON.parse(JSON.stringify(concealment.undercarriage.concealment[0].src.push(fullPath[i])))
    
                }
                // console.log (concealment.rear.concealment[0].src);
                concealment.save( function(err){
                    if (err) {
                        res.status(401).json({
                          message: err,
                        });
                        console.log(err);
                      }
                      else if(err){
                        res.status(500).json({
                            message: err,
                          });
                          console.log(err);

                      }
                    else{
          
                        res.status(200).json({
                            status:"success", message: "Image uploaded successfully!!!", data:concealment.undercarriage
                        });
                  }
                });
              });
        }
      }
    });  

};
exports.uploadFileTORear=(req,res)=>{
    upload(req, res,(error) => {
        if(error){
           res.send(error);
        }else{
          if(req.files.length == 0){
            
            res.send(error.message);
  
          }else{
            var fullPath=[] ;
            for (let i=0;i<req.files.length;i++)
            {
                fullPath[i] = "files/"+req.files[i].filename;

            }
           
               Concealment.findOne({ '_id': req.params.concealmentId }, function (err, concealment) {
                if (err) return handleError(err);
                for (let i=0;i<fullPath.length;i++)
                {
                    var rearData = JSON.parse(JSON.stringify(concealment.rear.concealment[0].src.push(fullPath[i])))
    
                }  
                // console.log (concealment.rear.concealment[0].src);
                concealment.save( function(err){
                    if (err) {
                        res.status(401).json({
                          message: err,
                        });
                        console.log(err);
                      }
                      else if(err){
                        res.status(500).json({
                            message: err,
                          });
                          console.log(err);

                      }
                    else{
          
                        res.status(200).json({
                            status:"success", message: "Image uploaded successfully!!!", data:concealment.rear
                        });
                  }
                });
              });
        }
      }
    });  

};