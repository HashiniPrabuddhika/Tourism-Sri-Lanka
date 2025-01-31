const router = require("express").Router();
const { aggregate } = require("../models/Hotel");
const upload = require("../multer/upload");
let Hotel = require("../models/Hotel");

router.post("/add", upload.single("image"), (req, res) => {
    //save the data to DB
    const name= req.body.name;
    const type = req.body.type;
    const location = req.body.location;
    const description = req.body.description;
    const price = req.body.price;
    const no_of_rooms = Number(req.body.no_of_rooms);

    const imagePath = req.file ? req.file.path : req.body.image;

    const newHotel = new Hotel({
        name,
        type,
        location,
        description,
        price,
        no_of_rooms,
        image: imagePath
    })

    //object that we created, pass as data 
    newHotel.save().then(()=>{
        res.json("hotel Added")
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ error: err.message });
    })
})

//display details
router.get('/all',(req,res)=>{

    Hotel.find().exec((err,hotels)=>{
        if(err){
      return res.status(400).json({
       error:err
      });

     }

      return res.status(200).json({

          success:true,
          existingHotels:hotels

      });

    });
});

//Update
router.put("/update/:id", upload.single("image"), async (req, res) => {
    let hotelId = req.params.id;
    const {name,type,  location,  description,price, no_of_rooms} = req.body;

    const imagePath = req.file ? req.file.path : undefined;

    const updateHotel = {
        name,
        type,
        location ,
        description,
        price,
        no_of_rooms
        }

        if (imagePath) updateHotel.image = imagePath;

        await Hotel.findByIdAndUpdate(hotelId, updateHotel)
        .then(()=>{
            res.status(200).send({status:"hotel updated"})

        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error with updating data", error:err.message});
        })
    })

    router.route("/delete/:id").delete(async(req , res)=>{
        let hotelId = req.params.id;

     await Hotel.findByIdAndDelete(hotelId)
        .then(()=>{
            res.status(200).send({status: "hotel deleted"})

        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete hotel", error: err.message });
        })
    })

    // router.route("/get/:id").get(async(req, res)=>{
    //     let hotelId = req.params.id;
    //     const hotel = await Hotel.findById(hotelId)
    //     .then(()=>{
    //         res.status(200).send({status: "hotel fetched", hotel: hotel})
    //     }).catch(()=>{
    //         console.log(err.message)
    //         res.status(500).send({status: "Error with get user", error: err.message});
    //     })
    // })
    router.route("/get/:id").get(async(req,res)=>{

        let hotelId =req.params.id;
        const hotel = await Hotel.findById(hotelId)
        
         .then((hotel)=>{
        
          res.status(200).send({status: "hotel fetched",hotel})
        
         }).catch((err)=> {
        
        console.log(err.message);
        res.status(500).send({status: "Error with get Tour Package",error: err.message});  
               
         })       
        }) 
module.exports = router;