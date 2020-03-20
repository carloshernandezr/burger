console.log("javsxcript loaded")

$("#add").on("click", function () {
  
    event.preventDefault()
    var newBurger = {
        burger_name: $("#bu").val(),
        devoured: 0
    }
    console.log("click", newBurger)

    //$.get

    $.post("/api/burgers", newBurger, function (data) {
        console.log(data)
        location.reload()

    })


})


$(".eatburger").on("click", function(){

    var id= $(this).attr("data-id")
    console.log("id", id)
    $.ajax({
        type: "put",     // GET POST PUT DELETE
        url: "/api/burgers/" + id ,
    
        success: function (response) {
            console.log(response)
            location.reload()
        }
    });

})
