const router = require('express').Router();
const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');

router.get('/servers/', serverController.list);
router.post('/servers/add/', serverController.add);

router.get('/messages/', messageController.list);


module.exports = router;