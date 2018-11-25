console.log('starter1.js linked');

//code goes here
$(document).ready(function () {
    $('.zone').hover(function () {
            // over
            $(this).css({
                        backgroundColor : 'green'
                    })
        }, function () {
            // out
            $(this).css({
                        backgroundColor : 'white'
                    })

            $(this).click(function () { 
                $(this).unbind('mouseenter').unbind('mouseleave');
                $(this).css({
                    backgroundColor : 'green'
                })
                
            });
        }
    );

    // $('.zone').on('mouseenter', function(){
    //     $(this).addClass('green');
    // });

    // $('.zone').on('click', function(){
    //     $(this).addClass('green');
    // });

    // $('.zone').on('mouseleave', function(){
    //     $(this).css({
    //         backgroundColor : 'white'
    //     })
    // });


})