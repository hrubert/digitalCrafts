(function () {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Houston,Texas"
    var apiKey = "423a556685695f1d7b2e2d0b3c263e7f";
    // var httpRequest = new XMLHttpRequest();

    // makeRequest();
    
    // function makeRequest() {
    //     httpRequest.onreadystatechange = responseMethod();
    //     httpRequest.open("GET", url + "&appid=" + apiKey, true);
    //     httpRequest.send();
    // }

    // function responseMethod() {
    //     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    //         console.log(httpRequest.responseText);
    //     }
    //     else {
    //         console.log("not  working");
    //     }
    // }

    $.get(url + "&appid=" + apiKey)
    .done(function(response) {
        updateUISuccess(response);
    })
    .fail(function(error) {
        console.log(error);
    })

    function updateUISuccess(conditions) {
        var condition = conditions.weather[0].main;
        var degC = conditions.main
    }
})();