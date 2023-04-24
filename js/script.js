/// nav active et dsacive link nav //
$(tab-content).ready(function(){
    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        var category = $(this).attr('href');
        $('.tab-pane').removeClass('show active');
        $(category).addClass('show active');
        return false;
    });
});
////////////// end //////////////////