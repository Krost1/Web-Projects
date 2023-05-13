$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = -1;

    var init = function(){

        $mainMenuItems.children(".image").click(function(){

            var newIndex = $(this).parent().index(),
                $item = $mainMenuItems.eq(newIndex),
                $colorImage = $item.find(".color");
            
                $colorImage.animate({left:"0px"},250);
                $item.animate({with:"420px"},250);
                openedIndex = newIndex;
        });
    };

    init();

});