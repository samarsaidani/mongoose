 const Dbconnect = require("./Mongo_Url")
 const People=require("./ProtoType")
 Dbconnect()

//  People.insertMany([
//     {nom:"samar",age:"27",favoriteFoods:['pizza','mlawi']}
// ,{nom:"oumaima",age:"32",favoriteFoods:['kafteji','ma9loub']}])
// People.find()

// People.findOne({favoriteFoods:'mlawi'}).
// then((result)=>{console.log(result)}).
// catch((err)=>console.log(err))

// People.findById({ _id:'6555ebc7184de3f604c7bc14'}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

// People.updateOne({age:27},{favoriteFoods:'pizza'}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

// People.find()
// People.findByIdAndUpdate({nom:"samar"},{$set:20},{new:true}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})


// People.findByIdAndDelete({_id:'66555ebc7184de3f604c7bc14'}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

//  People.deleteMany({age:{$eq:22}}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

// People.find({favoriteFoods:'kfteji'}).sort({nom:1}.limit(2).select({age:-1}).exec()).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})