
// const cardList = [
//     {
//         title: "fertiliser",
//         image: "images/fertiliser .jpeg",
//         link: "About fertiliser",
//         desciption: " The sprayer is loaded with liquid fertiliser to efficiently distribute the fertiliser to the crops"
//     },
//     {
//         title: "Harvester",
//         image: "images/Harvester.jpeg",
//         link: "About  Harvester",
//         desciption: "in the context of farming refers to a machine, often a combine harvester, that cuts, threshes, and cleans crops, streamlining the harvesting process and saving labor and time"
//     }
// ]

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text card-desc-color">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getProjects();
    $('.modal').modal();
}); 

const getProjects = () => {
    $.get('/api/projects',(response) => {
    if(response.statusCode==200){
    addCards(response.data);
    }
    })
    }
    