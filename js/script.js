
$("#contactForm").submit(function () {
    event.preventDefault();
    $("#contactForm")[0].reset();
    $("#success").modal("show");
});

