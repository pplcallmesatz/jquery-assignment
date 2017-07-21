

$(document).ready(function(){
    $("#one").on('input',function(){
       var node = $(this);
    node.val(node.val().replace(/[^a-z A-Z]/g,'') ); 
    })
    
     $("#two").on('input',function(){
       var node = $(this);
    node.val(node.val().replace(/[^0-9]/g,'') ); 
    })
     $("#three").on('input',function(){
       var node = $(this);
    node.val(node.val().replace(/\w/,'') ); 
    })
    
});