const form = document.getElementById('formOtp');
    console.log("before submit");
    form.addEventListener("submit", submitHandler);
    console.log("after submit");
    var otp_from_back = "";


    function submitHandler(e){
        var params={otp: $('#otp').val()};

        console.log("otp_from_back");
        //alert(JSON.stringify(params));
        e.preventDefault();
        async: false,
        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:8000/api/sign_up/otp',
            data: params,
            dataType: 'json',
            success: successFunction,
            csrfmiddlewaretoken : '{{ csrf_token }}',
            success: successFunction,
            error: errorFunction
        });
    }

    function successFunction(data) {
        console.log("success called"),
        alert('OTP verified!'),
        otp_from_back = data,
        console.log("otp from backend", otp_from_back),
        location.href = 'http:///127.0.0.1:8000/api/sign_up/signIn',
        console.log("next page is login");
        //alert(data);
        if (data == 'success') {

            //alert('Success!');
            form.reset()
        }

    }

    function errorFunction(data) {
        alert("Invalid OTP");
        //location.href = 'http:///127.0.0.1:8000/api/sign_up/otp',
        document.getElementById("form").reset();
        form.reset()
        //console.log(jqXHR);
        console.log("error called");


    }
