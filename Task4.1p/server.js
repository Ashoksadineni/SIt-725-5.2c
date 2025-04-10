const mongoose = require('mongoose');
var express = require("express")
var app = express()
const routeuser = require("./routes/routeuser")
app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'views'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine","ejs")
// mongoose.connect('mongodb://localhost:27017/sit725projects',{
//     useNewurlparser:true,
//     seUnifiedTopology:true,
// });
// const mongoose = require('mongoose');  
// const cardList = [
// {
//     title: "fertilizer",
//     image: "images/fertilizer.jpeg",
//     link: "About fertilizer",
//     desciption: "fertilizer are substances, either natural or synthetic, applied to soil or plant tissues to supply essential nutrients"
// },
// {
//     title: "Harvester",
//     image: "images/Harvester.jpeg",
//     link: "Harvester",
//     desciption: "a machine used to harvest crops, especially grains, and can also refer to a person who harvests crops"
// }
// ]
    

// app.get('/api/projects',(req,res) => {
//     res.json({statusCode: 200, data: cardList, message:"Success"})
// })
app.get("/",(req,res)=>{
    app.use(express.static(__dirname+'public'))
    res.render("index")
})

mongoose.connect('mongodb://0.0.0.0/your-db-name', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
   
 });
    mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
    });
// const ProjectSchema = new mongoose.Schema({
//         title: String,
//         image: String,
//         link: String,
//         description: String,
// });
app.use("/", routeuser);

// const Project = mongoose.model('Project', ProjectSchema);
        app.get('/api/projects', (req, res) => {
            // const projects = await Project.find({});
            res.json({ statusCode: 200, data: projects, message: "Success" });
});
            
// const sampleProject = new Project({
//     title: "Kitten 4",
//     image: "images/kitten-4.jpg",
//     link: "About Kitten 4",
//     description: "Demo description about kitten 4 "
// });


var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})