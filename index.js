$(document).ready(function(){

    $(".add").on('mouseover', function(){
        $(this).addClass('transition')

        .on('mouseout', function(){
        $(this).removeClass('transition');
    })
        .on('click', function () {
            $(this).hide();
            var popup_id = $('#' + $(this).attr("rel"));
            $(popup_id).show();

            var div = $(".div1");
            div.animate({height: '100%', opacity: '0.8', queue: false}, "slow");

            var div2 = $(".div2");
            div2.animate({width: '100%', opacity: '0.8', queue: false}, "slow");

            var div3 = $(".div3");
            div3.animate({width: '100%', opacity: '0.8', queue: false}, "slow");

            var div4 = $(".div4");
            div4.animate({height: '100%', opacity: '0.8', queue: false}, "slow");
        });
    });

    $(".close-block").on('click', function () {

        $(".popup").delay(300).fadeOut();
        var div = $(".div1");
        div.animate({height: '20px', opacity: '0.8', queue: false}, "slow");

        var div2 = $(".div2");
        div2.animate({width: '20px', opacity: '0.8', queue: false}, "slow");

        var div3 = $(".div3");
        div3.animate({width: '20px', opacity: '0.8', queue: false}, "slow");

        var div4 = $(".div4");
        div4.animate({height: '20px', opacity: '0.8', queue: false}, "slow");

        $(".add").delay(1000).show(0);

        var newListItem = $('#inp').val();

        if(newListItem.length>0) {

            var textToInsert = "<li class=\"ui-state-default\"><span class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span>" + newListItem + "</li>";

            $("#sortable").append(textToInsert);

            // put items in sortable into an array
            var theArray = [];
            $("li", "#sortable").each(function (count, item) {
                theArray[count] = $(this).text();
            });
            var shoppingText = theArray.toString();
            localStorage.setItem("shoppingText", shoppingText);

            $('#inp').val('');

        }

    });

        $("#sortable").sortable({
            update: function (event, ui) {
                save1();
            }
        });

        $("#sortable").disableSelection();

        var shoppingText = localStorage.shoppingText;

        if(shoppingText != undefined){
            shopping = shoppingText.split(",");



        /* build the list of shopping items */
        // a temporary variable in which to build a the list items

        var textToInsert = "";
        // using $.each() to iterate over the collection
        $.each(shopping, function (count, item) {
            textToInsert += "<li  class=\"ui-state-default\"><span class=\"ui-icon ui-icon-arrowthick-2-n-s\"></span>" + item + "</li>";
        });

        // add the string with all the items to the list
        $("#sortable").append(textToInsert);

        function save1() {
            // put items in sortable into an array
            var theArray = [];
            $("li", "#sortable").each(function (count, item) {
                theArray[count] = $(this).text();
            });
            var shoppingText = theArray.toString();
            localStorage.setItem("shoppingText", shoppingText);
        }
        }
});



