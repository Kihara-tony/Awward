window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        // Handle page restore.
        window.location.reload();
    }
});
$('.ratings').rating(function(vote , event){
   $.ajax({
       method:'POST',
       url:'instrating.php',
       data:{vote:vote}
   }).done(function(info){
       $('.info').html("<b>"+info+"/10</b>")
   })
})