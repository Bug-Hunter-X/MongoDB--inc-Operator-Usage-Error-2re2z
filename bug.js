```javascript
//Incorrect usage of $inc operator for updating the field in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```