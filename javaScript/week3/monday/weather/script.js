//get location
navigator.geolocation.getCurrentPosition(function (position) {
    displayWeather(position.coords.latitude, position.coords.longitude);
});

var temp = 0;

//import openweather

function displayWeather(lat, long) {
    $.getJSON("https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=423a556685695f1d7b2e2d0b3c263e7f", function (data) {
        temp = Math.round((data.main.temp * 9 / 5) - 459.67);
        $("#temp").text(temp);
        $("#city").text(data.name);
        $("#minute").text(data.weather[0].description);


        // icons function
        switch (data.weather[0].icon) {
            case "01d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784931/Sun_hfo3le.svg'>");
                break;
            case "02d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784916/Cloud-Sun_wknfgz.svg'>");
                break;
            case "03d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784940/Cloud_wx2qzo.svg'>");
                break;
            case "04d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784940/Cloud_wx2qzo.svg'>");
                break;
            case "09d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784907/Cloud-Rain_vgkkmw.svg'>");
                break;
            case "10d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784910/Cloud-Rain-Sun_joxvxd.svg'>");
                break;
            case "11d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784908/Cloud-Lightning-Sun_hl7imo.svg'>");
                break;
            case "13d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784913/Cloud-Snow-Alt_ielmit.svg'>");
                break;
            case "50d":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784900/Cloud-Fog-Sun-Alt_wsiqd1.svg'>");
                break;
            case "01n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784930/Moon-Waxing-Crescent_mwsqqi.svg'>");
                break;
            case "02n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784907/Cloud-Moon_cd20bc.svg'>");
                break;
            case "03n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784940/Cloud_wx2qzo.svg'>");
                break;
            case "04n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784940/Cloud_wx2qzo.svg'>");
                break;
            case "09n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784908/Cloud-Rain-Moon_xvqqbf.svg'>");
                break;
            case "10n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784908/Cloud-Rain-Moon_xvqqbf.svg'>");
                break;
            case "11n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784906/Cloud-Lightning-Moon_l6vnan.svg'>");
                break;
            case "13n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784914/Cloud-Snow-Moon-Alt_qk1dcv.svg'>");
                break;
            case "50n":
                $("#icon").html("<img src='https://res.cloudinary.com/dxybxcs8f/image/upload/v1496784900/Cloud-Fog-Moon-Alt_hnz3ng.svg'>");
                break;

            default:
                break;
        }

    });
}

var far = true;

$("button").on("click", function () {
    if (far === true) {
        $("#temp").text(Math.round((temp - 32) * 5 / 9));
        $("button").text("Fahrenheit");
        $("#unit").text("C");
        far = false;
    } else {
        $("#temp").text(temp);
        $("button").text("Celsius");
        $("#unit").text("F");
        far = true;
    }
});