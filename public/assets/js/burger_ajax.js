$(function () {
    // PUT REQUEST:
    $(".devourBtn").on("click", function (event) {
        var burgerID = $(this).data("id");
        $.ajax("/api/burgers/" + burgerID, {
            type: "PUT",
            data: burgerID
        }).then(
            function () {
                location.reload();
            }
        );
    });

    // POST REQUEST:
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