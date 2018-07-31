var names = [];
var pageNum = 1;
$(function () {
    var $list = $("ul");

    getNames();

    function getNames() {
        $.get("https://www.anapioficeandfire.com/api/characters?page=" + pageNum + "&pageSize=50")
            .done(function (response) {
                updateSuccess(response);
            })
            .fail(function (error) {
                console.log(error);
            })
        pageNum++;
    }



    function updateSuccess(response) {
        for (let i in response) {
            if (response[i].name != '') {
                let $newName = $("<li>");
                $($newName).text(response[i].name);
                if (response[i].allegiances != "") {
                    var $a = $("<a>", {
                        "href": response[i].allegiances,
                        "html": " <i class='fas fa-shield-alt'></i> "
                    });
                    $newName.append($a);
                }
                $list.append($newName);
            }
        }
    }


    $("#moreNames").click(function () {
        getNames();
    });

    $("ul").on('click', 'i', function (e) {
        let target = $(e.target).parent();
        if (target.href != 0) {
            $.get(target[0].href)
                .done(function (result) {
                    $(target).text(" | " + result.name);
                })
                .fail(function (error) {
                    $(target).text(" | not listed");
                    console.log(error);
                })
        }
        e.preventDefault();
    });

    $("ul").on('click', 'a', function (e) {
        e.preventDefault();
    });

    $("ul").on('dblclick', 'a', function (e) {
        let target = e.target;
        $.get(target.href)
            .done(function (resp) {
                let $p = $(`<p>Region: ${resp.region}</p>`);
                let $p2 = $(`<p>Coat of Arms: ${resp.coatOfArms}</p>`);
                let $p3 = $(`<p>Words: ${resp.words}</p>`);
                let $p4 = $(`<p>Seats: ${resp.seats}</p>`);
                
                if (resp.seats != "") {
                    $($p4).insertAfter(target);                
                }
                if (resp.words != "") {
                    $($p3).insertAfter(target);
                }
                if (resp.coatOfArms != "") {                
                    $($p2).insertAfter(target)
                }
                if (resp.region != "") {                
                    $($p).insertAfter(target);
                }  
            })
            .fail(function (error) {
                console.log(error);
            })
        e.preventDefault();
    });

    $("#clearInfo").click(function () { 
        let ps = $('p');
        for (let i = 0; i < ps.length; i++) {
            $(ps[i]).remove();
        }
    });


});