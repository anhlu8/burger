$(function () {
    $(".devourburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("id", id);
        var devouredID = {
            id: id.val().trim()
        };
        console.log("devouredID", devouredID);

        $.ajax("/api/burgers/:" + id, {
            type: "PUT",
            data: devouredID
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $("#addburger").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
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