
function showMsg(input, message, val) {
    if (!val) {
        const msg = input.parentNode.querySelector("small");
        msg.innerText = message;
        input.className = "error";
    } else {
        input.className = "success";
        console.log(input.value);
    }
}

function validateName(input, msg) {
    if (input.value.trim() === "") {
        showMsg(input, msg, false);
    }
    showMsg(input, msg, true);
}

function validateAge(input, msg) {
    if (input.value.trim() === "") {
        showMsg(input, msg, false);    
    } else if (input.value > 0 && input.value <= 99) {
        showMsg(input, msg, true);    
    } else {
        showMsg(input, "Age should be b/w 1 and 99", false);
    }
}

function validateSex(input, msg) {
    if (input.value.trim() === "") {
        showMsg(input, msg, false);  
    } else if (input.value === "Male" || input.value === "Female") {
        showMsg(input, msg, true);     
    }   else {
        showMsg(input, "Sex can be either Male or Female", false);   
    }
}

const NAME_R = "Name is required";
const AGE_R = "Age is required";
const SEX_R = "Sex is required";

var frm = document.getElementById("person");

frm.addEventListener("submit" , (event) => {
    event.preventDefault();
    const name = validateName(document.getElementById("name"), NAME_R);
    const age = validateAge(document.getElementById("age"), AGE_R);
    const sex=validateSex(document.getElementById("sex"), SEX_R);

    
    
});
