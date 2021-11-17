const form = document.getElementById('formLogin');
console.log("before submit 1");
form.addEventListener("submit", submitHandler);
console.log("after submit 2");
var otp_from_back = "";
//module.exports = {otp_from_back};

//console.log("-->>>>>>>> ",localStorageTest())
function submitHandler(e){
   
    console.log("inside submit handler 3")
    var params={mobilenumber: $('#mobilenumber').val(),
                password: $('#password').val(),
                };
    console.log("after var prams 4",params.mobilenumber);    
    //naam= otp_from_back.name;
    console.log("name of user logged in: ")
    //console.log(otp_from_back.name)
    
    console.log("after local storage 5");
    //console.log(otp_from_back.mobilenumber);
    console.log("otp_from_back 6");
    
    //alert(JSON.stringify(params));
    e.preventDefault();
    async: false,
    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1:8000/api/sign_up/signIn',
        data: params,
        dataType: 'json',
        success: successFunction,
        csrfmiddlewaretoken : '{{ csrf_token }}',
        success: successFunction,
        error: errorFunction
    })
    console.log("after ajax 777777777");
}

function errorFunction(data) {
    console.log("error called");
    alert("invalid credentials!!!");

}
function successFunction(data) {
    console.log("success called 8--> "),

    otp_from_back = data,
    console.log(" 9-> ",otp_from_back.name),
    localStorage.setItem["naame", otp_from_back.name]
    alert('Logged In!!'),
    
    console.log("next page is otp 10"),
    
    location.href = 'http:///127.0.0.1:8000/api/sign_up/combine_profile';
    

}
