const router = require('express').Router();
const serverController = require('../controllers/serverController');

router.get('/servers/', serverController.list);
router.get('/servers/:id', serverController.listById);
router.post('/servers/update/:id', serverController.update);
router.post('/servers/add/', serverController.add);
router.delete('/servers/delete/:id', serverController.delete);

module.exports = router;