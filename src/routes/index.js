const router = require('express').Router();
const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');

router.get('/servers/', serverController.list);
router.get('/servers/:id', serverController.listById);
router.post('/servers/update/:id', serverController.update);
router.post('/servers/add/', serverController.add);
router.delete('/servers/delete/:id', serverController.delete);

router.get('/messages/', messageController.list);


module.exports = router;