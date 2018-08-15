$(function () {
    $(".devourburger").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("burger_name");

        var devouredBurger = {
            
        }

        $.ajax("/api/burgers/:" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $("#addburger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#newBurger").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });


});