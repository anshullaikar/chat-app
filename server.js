var app = require("express")();
var http = require("http").createServer(app);
const mongooseConn  = require('./config/db');
const mongoose = require('mongoose');
const Person  = require('./models/person');
const Channel  = require('./models/channel');
const Message  = require('./models/message');
const Student  = require('./models/student');
const Teacher = require('./models/teacher');
const NewChannel = require('./models/newChannel');
const PORT = 8080;  

// const STATIC_CHANNELS = ["GLOBAL_NOTIFICATIONS", "GLOBAL_CHAT"]
var cors = require("cors")
var io = require("socket.io")(http,{
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});
//1 - 60606cb33e685d865c8e5599
//2 - 60606dc3193b9388605d5bde
//3 - 60606df458a5b659c0785ae2
mongooseConn.db();


/* newIDS */
//1 :6076b62c83755ac740f75c37
//2 :6076b669fbbb13afb8ef287a
//3 :6076b69ddb5a5f6ae8431664
//4 :6076b6b481479bafdc6318ad
//1.2 :6076b71c6d2ffe7cbc0bf60d
//1.3 :6076bec52b8d653618adb65b
//3.4 :6076bd8f1bcd65c8cca59b67

setTimeout(async() => {
 





  // const mainPerson = await Teacher.findOne({username:'3'});
 
  // Student.findOne({username:'1'},async(err,currPerson)=>{
  //   if(err){
  //     console.log("Error occured");
  //   } else{
  //     NewChannel.findOne({name:'1.3'},async(err,currChannel)=>{
  //       if(err){
  //         console.log("Error occured");
  //       }else{

  //         channelInfo = {
  //           person:currPerson._id,
  //           chat:currChannel._id,
  //           onModel:'Student'
  //         }
  //         console.log(currPerson,channelInfo,mainPerson);
  //         mainPerson.channels.push(channelInfo);
  //         const result = await mainPerson.save();
  //         console.log("Saved result is:",result);

  //       }
  //     }) 
  //   }
  // })
  // Teacher.findOne({ username:'3' })
  //       .populate('channels.person')
  //       .exec((err,newStudent)=>{
  //         if(err){
  //           console.log(err);
  //         } else{
  //           console.log("The execution is done: ",newStudent.channels[1].person);
  //         }
  //       })




  // const channel = new NewChannel({
  //     name:'1.3',
  //     messageList:[]
  //   })
  //   try{
  //      const result =  await channel.save();
  //       console.log("yes user is saved",result);
  //     } catch(err){
  //       console.log("Error:",err);
  //     }



    // dbConnection.close();
    // const channel = new Channel({
    //   name:'channel-2.3',
    //   participants:[],
    //   messageList:[]
    // })
    // try{
    //  const result =  await channel.save();
    //   console.log("yes user is saved",result);
    // } catch(err){
    //   console.log("Error:",err);
    // }
    
    // Person.findOneAndDelete({username:'3'},async(err,result)=>{
    //   if(err){
    //     console.log("Error occured");
    //   } else {
    //     console.log("The new user is: ",result);
        
    //   }
    // })


    // const channel1 = await Channel.findOne({name:'channel-2.3'});
    // const channel2 = await Channel.findOne({name:'channel-1.2'});


    //   Person.findOne({username:'2'},async(err,currPerson)=>{
    //     if(err){
    //       console.log("error occured for other");
    //     } else{
    //       // let pushObject1 = {
    //       //   id:person1._id,
    //       // }
    //       // let pushObject2 = {
    //       //   id:person2._id,
    //       // }
    //       console.log(channel1._id,channel2._id);
    //       currPerson.channels.push(channel2._id);
    //       currPerson.channels.push(channel1._id);
    //       try{
    //         const test = await currPerson.save();
    //         console.log("yes user saved",test);;
    //       } catch(err){
    //         console.log("error aaya");
    //       }
          
    //     }
        
    //   })


    // Channel.findOne({name:'channel-1.2'},async(err,channel)=>{
    //   if(err){
    //     console.log("Error");
    //   } else{
    //     channel.participants = [];
    //     const result = await channel.save();
    //     console.log("Processing new channel:",result);
    //   }
    // })
  




  //   Person.
  // findOne({ username: '3' }).
  // populate('channels').
  // exec(function (err, person) {
  //   if (err) console.log("Error occured");
  //   console.log('The object is :', person.channels);
  //   // prints "The author is Ian Fleming"
  //   // person.channels.populate({
  //   //       path:'participants.id',
  //   //       model:'Person'
  //   //     })
  //   //     .exec(function(err,newUser){
  //   //       if(err){
  //   //         console.log("error came after populate");
  //   //       } else{
  //   //         // console.log(newUser.myContacts[0].id,newUser.myContacts[0].name);
  //   //         console.log("user object: ",newUser);
  //   //         // res.json({info:newUser.myContacts});
  //   //       }
  //   //     })
  // });

  // Person.findOne({username:'1'},function(err,result){
  //   if(err){
  //     console.log("Error occures here");
  //   } else {
  //     console.log("heyy:",result.channels)
  //   //   Channel.find({
  //   //     '_id': { $in: result.channels}
  //   //   })
  //   // .populate({
  //   //   path:'participants.id',
  //   //   model:'Person'
  //   // })
  //   // .exec(function(err,newUser){
  //   //   if(err){
  //   //     console.log("error came after populate");
  //   //   } else{
  //   //     // console.log(newUser.myContacts[0].id,newUser.myContacts[0].name);
  //   //     console.log("user object: ",newUser.participants[0]);
  //   //     // res.json({info:newUser.myContacts});
  //   //   }
  //   // })
  //   }

  // })

  // const newMsg = new Message({
  //   username:'1',
  //   text:"Hey"
  // })

  // try{
  //   const result = await newMsg.save();
  //   Channel.findOne({name:'channel-1.3'},async(err,newMsgChannel)=>{
  //       if(err){
  //         console.log("Error occured message cannot be saved");
  //       } else{
  //         newMsgChannel.messageList.push(result._id);
  //         try{
  //           const state = await newMsgChannel.save();
  //           console.log("Message is:",state);
  //         } catch(err1){
  //           console.log("Error occured");
  //         }
  //       }
  //   })
  // } catch(err){
  //   console.log("The message could not be saved");
  // }

  // Channel.
  // findOne({ name:'channel-1.3' }).
  // populate('messageList').
  // exec(function (err, channel) {
  //   if (err) console.log("Error occured");
  //   console.log('The object is :', channel);
  //   // res.json({messageList:channel.messageList});
  // });

  },1000);
  


// const whitelist = ['http://localhost:3000', 'http://example2.com'];
// const corsOptions = {
//   credentials: true, // This is important.
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin))
//       return callback(null, true)

//       callback(new Error('Not allowed by CORS'));
//   }
// }

// app.use(cors(corsOptions));

let channels = [{id: 1, name: "channel-1.3", participants: ["1","3"],messageList:[]},{id: 2, name: "channel-1.2", participants: ["1","2"],messageList:[{ id: 2, text: 'hyyy', senderName: '1' }]},{id: 3, name: "channel-2.3", participants: ["2","3"],messageList:[]}]
app.get('/getChannels',function(req,res){
  console.log("here checking for params:",req.query.username,req.query.category);
  // let userChannel = channels.filter((item)=>{
  //   if(item.participants.includes(req.query.username)){
  //     return item;
  //   }
  // })
  if(req.query.category == "Student"){
      Student.
    findOne({ username: req.query.username }).
    populate('channels.person').
    exec(function (err, person) {
      if (err) console.log("Error occured");
      console.log('The object is :', person.channels);
      res.json({info:person.channels});
    });
  } else{
      Teacher.
    findOne({ username: req.query.username }).
    populate('channels.person').
    exec(function (err, person) {
      if (err) console.log("Error occured");
      console.log('The object is :', person.channels);
      res.json({info:person.channels});
    });
  }

  
  // console.log(userChannel);
  // res.json({info:userChannels});
})

app.get("/getMessages",function(req,res){
  console.log("message endpoint called" ,req.query.id);
  // channels.map((item)=>{
  //   if(item.id == req.query.id){
  //     console.log("Yes messages endpoint called");
  //     res.json({messageList:item.messageList});
  //   }
  // })
  NewChannel.
  findOne({ _id: mongoose.Types.ObjectId(req.query.id) },function (err, channel) {
    if (err) console.log("Error occured");
    console.log('The object is :', channel);
    res.json({messageList:channel.messageList});
  });

})


http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
})

io.on("connection", (socket) => {
    console.log("new client connected")
    socket.emit("connection",null)

    socket.on("connectMe",async(data)=>{
      console.log("New Joining data is:",data)
      // if(data.username == "1"){
      //   socket.join("foo1");
      //   socket.join("foo2");
      //   console.log("New user:1")
      // } else if(data.username == "2"){
      //   socket.join("foo3");
      //   socket.join("foo2");
      //   console.log("New user:2")
      // } else if(data.username == "3"){
      //   socket.join("foo1");
      //   socket.join("foo3");
      //   console.log("New user:3")
      // }
      if(data.category == "Student"){
        const student = await Student.findOne({username:data.username});
        student.channels.map((itemID)=>{
          socket.join("foo"+itemID.chat);
          console.log("Checking for joining :",itemID.chat);
        })
      } else{
        const teacher = await Teacher.findOne({username:data.username});
        teacher.channels.map((itemID)=>{
          socket.join("foo"+itemID.chat);
          console.log("Checking for joining :",itemID.chat);
        })
      }
      

    })

    socket.on("message",async(data)=>{
      console.log("Data is:",data);
      // channels.map((item)=>{
      //   if(item.id == data.id){
      //     item.messageList.push(data);
      //   }
      // })

      const newMsg = {
        text:data.text,
        username:data.username
      }

      try{
        // const result = await newMsg.save();
        NewChannel.findOne({_id:mongoose.Types.ObjectId(data.id)},async(err,newMsgChannel)=>{
            if(err){
              console.log("Error occured message cannot be saved");
            } else{
              newMsgChannel.messageList.push(newMsg);
              try{
                await newMsgChannel.save();
                io.to("foo"+data.id).emit("newMsg",data);
              } catch(err1){
                console.log("Error occured");
              }
            }
        })
      } catch(err){
        console.log("The message could not be saved");
      }

      // io.to("foo"+data.id).emit("newMsg",data);
    })

})


//User.findOne({id: req.body.myId}).select({ Friends: {$elemMatch: {id: req.body.id}}})
