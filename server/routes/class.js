const express = require('express');
const {Class, Comment }= require('../models');

const router = express.Router();

// GET 라우터

router.route('/')
.get(async (req, res, next) => {
  try{
    const classes = await Class.findAll();
    res.json(classes);
  } catch(err){
    console.error(err);
    next(err);
  }
})

// POST - 클래스 등록 api
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