const router = require("express").Router();
let AllServices = require('../models/AllServices');
const upload = require('../multer/upload');

router.get('/', async (req, res) => {
    try {
        const { title } = req.query;
        let query = {};

        if (title) {
            query.title = title;
        }
        const services = await AllServices.find(query);
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services', error });
    }
});


router.post('/add', upload.single('photo'), async (req, res) => {
    try {
        const { title, description, location, price } = req.body;
        const photoPath = req.file ? req.file.path : req.body.photos;

        const newService = new AllServices({
            title,
            description,
            location,
            price,
            photos: photoPath,
        });

        await newService.save();

        res.status(200).json({ message: 'Service added successfully!', service: newService });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding service', error });
    }
});



module.exports = router;