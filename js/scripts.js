$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    const name2Input = $("input#name2").val();
    const streetInput= $("input#street").val();
    const cityInput = $("input#city").val();
    const stateInput = $("input#state").val();
    const zipInput = $("input#zip").val();
    const productInput = $("input#product").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".product").text(productInput);

    $("#receipt").show();
  });
});
