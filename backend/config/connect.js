const mongoose=require('mongoose')

const connect=()=>{
try{
  // mongoose.connect('mongodb://127.0.0.1:27017/Auto')
  mongoose.connect('mongodb+srv://niyaskn01:seencontraniyas@cluster0.h4irhqj.mongodb.net/Auto?retryWrites=true&w=majority')
  console.log('connected with database');
}
catch(err){
  console.log(err); 
}
}





module.exports=connect