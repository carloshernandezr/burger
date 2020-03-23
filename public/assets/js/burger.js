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


 
    $('.eatburger').click(function () {
        

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


$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })