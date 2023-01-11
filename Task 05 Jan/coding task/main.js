function validateForm(){
    let name = document.forms["form"]["name"].value;
    let comment = document.getElementById("comments").value;
    let gender = document.getElementById("gender").checked;

    if(name=="" && comment=="" || comment=="Your comments" && gender==false){
        alert("all fields are compulsory!");
        document.forms["form"]["name"].focus();
        return false;
    }

    if(name==""){
        alert("Name field must be filled out!");
        return false;
    }
    
    if(comment=="" || comment=="Your comments"){
        alert("Comment field must be filled out!");
        return false;
    }

    if(gender == false){
        alert("Gender field must be filled out!");
        return false;
    }
    
}