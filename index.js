var currentQuote ="";
var currentAuthor="";
function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        currentQuote='"'+response.quoteText+'"';
        currentAuthor = "..."+response.quoteAuthor+"...";
        $("#random_quote").html("<p id='random_quote'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
      }
  });
}

$(function() {
  randomQuote();
});

$("#b1").click(function(){
  randomQuote();
});
$("#b2").click(function(){
  window.open('http://twitter.com/share/?text='  +currentQuote + currentAuthor);
});