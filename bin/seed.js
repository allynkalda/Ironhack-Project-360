const mongoose = require('mongoose');
const User = require('../models/usersSchema');

mongoose.connect(`mongodb://localhost/360-project`);

const userList = [
  {
    name: "Anna Reyes",
    department: "Management", 
    position: "executive"
  },
  {
    name: "Joao Ronaldo",
    department: "HR",
    position: "entry-level"
  },
  {
    name: "Klaus Fischer",
    department: "IT",
    position: "middle management"
  },
  {
    name: "Laura Jamieson",
    department: "IT",
    position: "entry-level"
  },
  {
    name: "Marion Gillespie",
    department: "Management",
    position: "middle management"
  },
  {
    name: "Joan Millan",
    department: "IT",
    position: "entry-level",
   // id: ObjectId
  },

]

User.create(userList, (err)=>{
  if (err){throw(err)}
  console.log(`Created ${userList.length} users`)
  mongoose.connection.close();
})