const express= require("express");
const app= express();
var arr;
const mongoose= require("mongoose");

// const Sequelize= require("sequelize");
// const Datatypes=Sequelize.DataTypes;
// const sequelize= new Sequelize({
//     dialect:"sqlite",
//     storage : __dirname+ "FirstDataBase"
// });


//app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/csa",express.static(__dirname+ "/public"));

// var searchData=sequelize.define("searchData",{
//     task:Datatypes.STRING,
// });

app.get("/sahil12",(req,res)=>{
    res.send(arr);
})


app.post("/sahil", (req,res)=>{
    console.log(req.body.a);
arr=arr+req.body.a;
mongoose.connect("mongodb://localhost:27017/PopulationData",(err)=>{
    if (err) throw err;

    else{
        console.log("connected");

        var newSchema= new mongoose.Schema({
           search:String
        });
        var newmodel=mongoose.model("searchData",newSchema);

        var document= new newmodel({name:"sahil",age:"23"});
        document.save((err,document)=>{
            if(err)
                throw err;
             else {
                console.log(document.name);
            }

        })



    }


})
    // sequelize.sync().then(()=>{
    //     searchData.create({
    //         task:arr
    //     })
    // }).catch((err)=>{
    //     console.log(err);
    // })


// res.redirect("/sahil12");
    var result=[];
    // searchData.findOne({
    //           where:{
    //               id:27
    //           }
    //       }).then(data => {
    //           //console.log(data)
    //           result.push(data.dataValues.data)
    //     console.log( data.dataValues.data + "~~~~~~~~~~~~~~~~~~~~~~")
    //
    //     // console.log(result + "~~~~~~~~~~~~")
    // })
         //   JSON.stringify(result);
res.send(result);
})





//
// sequelize.authenticate().then(()=>{
//     console.log("database created");
// }).catch((err)=>{
//     console.log(err);
// })


app.listen(9990,()=>{
    console.log("server is running");
});