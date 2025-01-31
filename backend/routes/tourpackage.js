const express = require("express");
const router = express.Router();
const Tourpackage = require('../models/Tourpackage.js');
const upload = require('../multer/upload');

router.get('/packages', async (req, res) => {
    try {
        const packages = await Tourpackage.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching packages", error });
    }
});

router.get("/packages/:id", async (req, res) => {
    try {
      const packageId = req.params.id;
      const tourPackage = await Tourpackage.findById(packageId);
      if (!tourPackage) {
        return res.status(404).send({ message: "Package not found" });
      }
      res.json(tourPackage);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    }
  });


router.post('/packages', upload.single('photo'), async (req, res) => {
    try {
        const { name, destination, days, passengers, price, imageUrl,description,activities,accommodation,mealPlan,travelTime,transferMode } = req.body;

        const photoPath = req.file ? req.file.path : imageUrl;

        if (!photoPath) {
            return res.status(400).json({ message: "Image URL or file upload is required." });
        }
        const newPackage = new Tourpackage({
            name,
            destination,
            days,
            passengers,
            price,
            imageUrl: photoPath, 
            description,activities,accommodation,mealPlan,travelTime,transferMode
        });

        await newPackage.save();

        res.status(201).json({
            message: 'Package added successfully!',
            package: newPackage
        });
    } catch (error) {
        console.error("Error adding package:", error);
        res.status(500).json({
            message: 'Error adding package',
            error: error.message
        });
    }
});

module.exports = router;
