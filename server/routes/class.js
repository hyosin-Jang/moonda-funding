const express = require('express');
const {Class, Comment }= require('../models');

const router = express.Router();

// *** GET class/cheering
// -- isActive == 1
// -- isAchieve == 0 것만인 것만 가져옴
router.route('/cheering')
.get(async (req, res, next) => {
  try{
    const classes = await Class.findAll({
      where:{
        isAchieve: 0,
        isActive: 1
      }
    });
    res.json(classes);
  } catch(err){
    console.error(err);
    next(err);
  }
})

// *** GET class/opened
// -- isActive == 1 
// -- isAchieve == 1 것만인 것만 가져옴
router.route('/opened')
.get(async (req, res, next) => {
  try{
    const classes = await Class.findAll({
      where:{
        isAchieve: 1,
        isActive: 1
      }
    });
    res.json(classes);
  } catch(err){
    console.error(err);
    next(err);
  }
})

// POST - 클래스 등록 api
router.route('/')
.post(async(req, res, next)=> {
  try{
    const newClass = await Class.create({
      className: req.body.className,
      subtitle: req.body.subtitle,
      goalCount: req.body.goalCount,
      cheerCount: req.body.cheerCount,
      desc: req.body.desc,
      isAchieve: req.body.isAchieve,
      manager: req.body.manager,
      isActive: req.body.isActive
    });
    console.log(newClass);
    res.status(201).json(newClass);
  } catch(err){
    console.error(err);
    next(err);
  }
});


  

module.exports = router;