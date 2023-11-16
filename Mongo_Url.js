const mongoose = require("mongoose")
const URL="mongodb+srv://samarsaidani10:PysoGlmDrWqKIu1Z@cluster0.38fhxzf.mongodb.net/";


const Dbconnect= async()=>{
  try {
      await mongoose.connect(URL); 

      console.log('connect with sucess')
  } catch (error) {
      console.log(error)
      
  }
}

module.exports = Dbconnect