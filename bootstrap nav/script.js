

//function general(){
    
    //whole width
//    var navWholeWidth = $(".nav").width();   
//    console.log("total width : ", navWholeWidth );
    
    // Nav pills total
//    var navTotalPills = $(".nav-item");
//    var navCounter = 0;
//    navTotalPills.each(function(){
//        console.log("d")
//     var navPillIndividualWidth = $(this).width();
//        navCounter += navPillIndividualWidth;
//        var l =$(".dropdown-menu .dropdown-item").length;
//        console.log(navCounter);
//        if ((navCounter + 50) > navWholeWidth) {
//            console.log("e")
//$(".nav .nav-item").last().prev().removeClass("nav-item").detach().prependTo(".dropdown-menu").addClass("dropdown-item");
//        }
//        else if(l > 0){
//            $(".dropdown-menu .dropdown-item").each(function(){
//                elseFunctionTotalWidth = 0;
//                navTotalPills.each(function(){
//                    var ww = $(this).width();
//                    elseFunctionTotalWidth += ww;
//                    
//                    
//                    
//                }
                
                
//                var dW = $(this).width();
//                
//                
//                
//                var pilWid = navCounter;
//                pilWid += dW;
//                
//                if ((pilWid + 150) < navWholeWidth){
//                    console.log("navCounter",navCounter ,"PillWidth", pilWid, "total width", navWholeWidth);
//                    $(this).removeClass("dropdown-item").detach().insertBefore(".dropdown").addClass(".nav-item");
//                }
//            });
//            
//        }
//        else {
            
//            console.log("f")
            
//        }
        
         
//        console.log("navCounter ",navCounter);
//        var l =$(".dropdown-menu .dropdown-item").length;
//
//        
//        $(".navInside").text(l);
//        
//    });
    
    
    
    
//    console.log("nav item total ",navCounter);
    
    
    // Navpills with buffer
//    var navCounterBuffer = navCounter + 120;
//        console.log("buffer ",navCounterBuffer);

    // Count dropdown menu
//    var navItemCount = $(".nav .nav-item");
//    var dropDownItemCountdisplay = $(".navInside");
//    var dropDown = $(".dropdown");
//    var dropDownMenu = $(".dropdown-menu");
//    var dropDownItem = $(".dropdown-menu .dropdown-item");
//    var dropDownCount = dropDownItem.length;
//    console.log(dropDownCount);
//    dropDownItemCountdisplay.text(dropDownCount);
    
    
//    var pillsWidth = navCounter;
//    navTotalPills.each(function(){
        
//        console.log("pills width", pillsWidth);
//        if (pillsWidth > navWholeWidth) {
//            var currentWidth = $(this).width();
//            pillsWidth -= currentWidth;
            
//            var lastPrev = $(".nav-item").last().prev(),
//                lastPrevWidth = lastPrev.width();
//            pillsWidth -= lastPrevWidth;
//            console.log(lastPrevWidth);
//                    lastPrev.detach().appendTo(dropDownMenu);

           
//        }
        
//    });
//     return pillsWidth;
      
   
//}

        
        
        
        
        
        
        

$(document).ready(general);

//$(window).on("load", function(){
////     general();
//});
$(window).resize(general)
//     general();



        function general(){
            var nav = $(".nav"),
                navWidth = nav.width(),
                navItem = $(".nav-item"),
                navItemTotalWidth = 0,
                dropDownItemCount = $(".navInside"),
                dropDownMenu = $(".dropdown-menu"),
                dropDownItem = $(".dropdown-item"),
                dropDownItemLength = dropDownItem.length,
                dropDownItemTotalWidth = 0;
                
                
            // Each function
            navItem.each(function(){
                var currentWidth = $(this).width();
                navItemTotalWidth += currentWidth;
                contraction(navWidth, navItemTotalWidth, dropDownItemTotalWidth);
            });
            
            if(dropDownItemLength > 0){
                dropDownItem.each(function(){
                    var currentDropItemWidth = $(this).width();
                    dropDownItemTotalWidth += currentDropItemWidth;
                    expansion(navWidth, navItemTotalWidth, currentDropItemWidth);
                });
                dropDownItemCount.text(dropDownItemLength);
            }
            else {
                dropDownItemTotalWidth = 0;
//                dropDownItemCount.text("0");
            }
            
//            contraction(navWidth, navItemTotalWidth, dropDownItemTotalWidth);
            
            dropDownCount();
        };
        
        
function expansion(wholeWidth, navItemWidth, currentDropWidth){
    var expWidth = navItemWidth + currentDropWidth;
    
//    console.log("Whole Width: ", wholeWidth, "Item Width: ", navItemWidth, "exp width ",expWidth , " Drop currrent Item Width: ", currentDropWidth);
// 
    
    if ((expWidth + 50) < wholeWidth) {
//        console.log("expla")
        var ss = $(".dropdown").before('<li class=\"nav-item\"></li>')
        var dd = $(".dropdown-item").first().removeClass("dropdown-item").addClass("nav-link").detach();
        var ff = $(".nav .nav-item").last().prev();
       dd.appendTo(ff);
         dd = null;
    }
    
}

function contraction(wholeWidth, navItemWidth, dropItemWidth){
//     console.log("Whole Width: ", wholeWidth, "Item Width: ", navItemWidth, "Drop Item Width: ", dropItemWidth);
    
    var nav = $(".nav"),
                navWidth = nav.width(),
                navItem = $(".nav-item"),
                navItemTotalWidth = 0,
                dropDownItemCount = $(".navInside"),
                dropDownMenu = $(".dropdown-menu"),
                dropDownItem = $(".dropdown-item"),
                dropDownItemLength = dropDownItem.length,
                dropDownItemTotalWidth = 0;
    
    var ww = wholeWidth,
        niv = navItemWidth,
        diw = dropItemWidth;
    if((navItemWidth + 50) > ww ){
        
        navItem.last().prev().find(".nav-link").addClass("dropdown-item").removeClass("nav-link").detach().prependTo(dropDownMenu);
        navItem.last().prev().detach();
       dropDownCount();
    }
    
}

function dropDownCount(){
    var dropDownItemCount = $(".navInside"),
        dropDownItem = $(".dropdown-item"),
         dropDownItemLength = dropDownItem.length;
            dropDownItemCount.text(dropDownItemLength);
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        