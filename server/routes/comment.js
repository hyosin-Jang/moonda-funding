const express = require('express');
const { Class, Comment } = require('../models');

const router = express.Router();

// GET 라우터
router.route('/:id')
.post(async (req, res, next)=>{
  try{
    console.log(req.body.comment, req.body.phoneNum, req.body.nickname);
    const newComment = await Comment.create({
      nickname: req.body.nickname,
      comment: req.body.comment,
      phoneNum: req.body.phoneNum,
      class_id: req.params.id
    });
    console.log(newComment);
    res.status(201).json(newComment);
  } catch(err){
    console.error(err);
    next(err);
  }
})

.get( async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: {
        model: Class,
        where: { id: req.params.id },
      },
    });
    console.log(comments);
    res.json(comments);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;