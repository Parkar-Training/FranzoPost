alert("shaktiman on click");
Puserid = localStorage.getItem("USERID");
console.log(Puserid);
//alert(Puserid);



function test(e){
    alert("onclick working")
    var uploadPostParams = {
        "Post_data" : Post_data,
        "PuserId" : localStorage.getItem("USERID")};
                alert("set id to params ",uploadPostParams.PuserId);
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: 'http://192.168.0.104:8000/api/sign_up/combine_profile',
                    data: uploadPostParams,
                    dataType: 'json',
    
                    success : successF,
                        
                    error: errorF,
                    
                        
                });
                alert("set id to params 2",uploadPostParams.PuserId);

                function successF(data) {// success callback function
                    console.log("inside success")
                    alert('after ajax ',data);
                
                    alert("Post uploaded Successful");

                    //location.href = 'http://10.50.30.52:8000/api/sign_up/combine_profile'

                    
                    location.href = 'http://192.168.0.104:8000/api/sign_up/combine_profile'
                    }
                
                    function errorF() {// success callback function
                        console.log("inside ")
                        //alert(JSON.stringify pload failed");
                        alert("error")     ; 
                    }
}






    




















/*function postButton(){
    alert("pbutt")
    console.log("Inside onclick functionnn")
    var Post_data= $('#Post_data').val();
    var PuserId= localStorage.getItem("USERID");
    console.log(Post_data,PuserId);

    if(Post_data == ""){
        alert("please write something.......");
        console.log("Inside if post data");
    }
    else{
        var uploadPostParams = {
        "Post_data" : Post_data,
        "PuserId" : Puserid,
        
//"userId" :userId
    };


    e.preventDefault();
    async: false,
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:8000/api/sign_up/combine_profile',
            data:JSON.stringify(uploadPostParams),
            contentType:"application/json",
            dataType : 'json',
            success :
            function (data) {// success callback function
            console.log(data);

alert("Post uploaded Successful");



//window.location = "franzoohomepage";



},
error:
function () {// success callback function
//alert(JSON.stringify pload failed");

}
        });
    }
}*/