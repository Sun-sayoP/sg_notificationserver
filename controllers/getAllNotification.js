const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { async } = require('q');
const Subscription = mongoose.model('subscribers');
const Notification= mongoose.model('notification');

exports.getAllNotification = async (req,res) => {
  console.log('get all notifications')
  const notification = await Notification.find({})
  res.json({
    notification
  })
}


/* 
router.get('/', async (req, res) => {
  console.log('get all notifications')
  const notification = await Notification.find({})
  res.json({
    notification
  })
    Notification
      .find({})
      .toArray((err, notification) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
          return;
        }
        console.log('why')
        res.json(notification);
      });
});
router.get('/:id', async (req, res) => {
  //const id = Subscription.findById
  const { id } = req.params;
  console.log(id)

  const notification = await Notification.find({_id:id})
  res.json({
    notification
  })
});

  // Route to delete a specific notification
router.delete(":id", (req, res) => {
    //const id = Subscription.findById
    const { id } = req.params;
    console.log(id)
    Notification.deleteOne({ _id: new mongodb.ObjectID(id) }, err => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }

      res.sendStatus(200);
    });
});
 */
//module.exports =router;