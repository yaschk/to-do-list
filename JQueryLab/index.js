$(document).ready(function(){

    var lSLength = localStorage.length;
    var localValue;
    var newId = 0;


    function getValueAfterReload() {
        if(lSLength > 0) {
            for (i = 0; i < lSLength; i++) {
                var key = localStorage.key(i);
                $('.task-list').append("<li class='item' data-item=" + localStorage.key(i).slice(7)  + ">" + localStorage[key] + "</li>");
            }
        }
    }

    // вызов функции вывода элементов из localStorage в DOM
    getValueAfterReload();


    $(".add").on('mouseover', function(){
        $(this).addClass('transition');
    });

    $(".add").on('mouseout', function(){
        $(this).removeClass('transition');
    });

    $(".add").on('click', function () {
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



        $('#todo-input').keydown(function(e){
            var task = this.value;
            if(e.keyCode === 13) {

                $('.todo-list');
                this.value = '';
            }
        });



        var newListItem = $('#inp').val();

        $('.item').each(function(index, el){
            var maxId = $(this).attr('data-item');
            if(maxId > newId) {
                newId = maxId;
            }
        });
        newId++;

        if(newListItem.length>0) {
            localStorage.setItem('taskId_' + newId, newListItem);
            localValue = localStorage.getItem('taskId_' + newId);


            $('#task-list').append("<li class='item' data-item='" + newId + "'><span class='item-value'>" + localValue + "</span></li>");
            $('#inp').val('');


            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }

    });

    $(".close-block").on('mouseout', function() {
        $(this).css({
            'box-shadow': 'none'
        });
    });

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }



// Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";

        }
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');

        }
    }, false);


    // $('li').on('click', function () {
    //     $(popup).show();
    //     $('.add').hide();
    //
    //     var div = $(".div1");
    //     div.animate({height: '100%', opacity: '0.8', queue: false}, "slow");
    //
    //     var div2 = $(".div2");
    //     div2.animate({width: '100%', opacity: '0.8', queue: false}, "slow");
    //
    //     var div3 = $(".div3");
    //     div3.animate({width: '100%', opacity: '0.8', queue: false}, "slow");
    //
    //     var div4 = $(".div4");
    //     div4.animate({height: '100%', opacity: '0.8', queue: false}, "slow");
    //
    //     var ItemContent = $(this).text();
    //     $('#inp').val(ItemContent);
    //
    //
    //
    // })


});



