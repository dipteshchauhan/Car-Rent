const express=require('express');
const router=express.Router();
const ownerController=require('../controllers/ownerController');
const userController=require('../controllers/userController')
//const userRegistration=require('../controllers/ownerController')
router.post('/owners/owner',ownerController.createOwner);
router.get('/owners',ownerController.getOwner);
router.get('/owners/:name',ownerController.getOwnerOne);
//router.get('/owners/email/:email',ownerController.LogIn);
router.post('/owners/owner/login/owner',ownerController.LogIn);



router.post('/owners/owner/login/user',userController.userLogIn);
router.post('/owners/user',userController.userRegistration);
module.exports=router;