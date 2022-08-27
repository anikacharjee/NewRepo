const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ED1', (err, client) => {
  if(err) {
    return console.log('Unable to ceonnect', err);
  }

  console.log("Connected Successfully");

  const db = client.db('ED1');

  db.collection('Details').insertMany([
    {
      name: 'Rahul',
      post: 'Software Engineer',
      location: 'Pune'
    },
    {
      name: 'Raj',
      post: 'Sales Manager',
      location: 'Navi Mumbai'
    },
    {
      name: 'Ram',
      post: 'Web Developer',
      location: 'New Delhi'
    }
  ], (err, result) => {
    if(err) {
      return console.log('Unable to read', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});