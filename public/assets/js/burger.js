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


// $(".eatburger").on("click", function(){

//     var id= $(this).attr("data-id")
//     console.log("id", id)
//     $.ajax({
//         type: "put",     // GET POST PUT DELETE
//         url: "/api/burgers/" + id ,

//         success: function (response) {
//             console.log(response)
//             location.reload()
//            // $("#dialog").dialog();
//         }
//     });


// })

 
 
    $('.eatburger').click(function () {
        
      //  $('#dialog').dialog('open');
     // alert("Yummy")
   
     $('.eatburger').modal('show')
        var id = $(this).attr("data-id")
        console.log("id", id)
        $.ajax({
            type: "put",     // GET POST PUT DELETE
            url: "/api/burgers/" + id,

            success: function (response) {
                console.log(response)
                location.reload()
                // $("#dialog").dialog();
            }
    });
});

// $("#dialogg" ).dialog();
// $('#isabel').click(function(){

//     $("#dialogg" ).dialog();

// })


$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })