```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{
  $inc: {field: value},
  $setOnInsert: {field: 0} //handle the case if the field does not exist
});
```