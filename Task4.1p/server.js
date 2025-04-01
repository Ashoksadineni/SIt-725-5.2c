var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const mongoose = require('mongoose');
const cardList = [
{
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2"
},
{
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3"
}
]
    

app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})
var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
    });
const ProjectSchema = new mongoose.Schema({
        title: String,
        image: String,
        link: String,
        description: String,
});
const Project = mongoose.model('Project', ProjectSchema);
        app.get('/api/projects', async (req, res) => {
            const projects = await Project.find({});
            res.json({ statusCode: 200, data: projects, message: "Success" });
});
            
const sampleProject = new Project({
    title: "Kitten 4",
    image: "images/kitten-4.jpg",
    link: "About Kitten 4",
    description: "Demo description about kitten 4 "
});

sampleProject.save().then(() => console.log("Sample project saved!"));