//add  <script src="app.js"></script> to index
//example:  $('li').text() to retrive, to change $('li').text('added texxt here to all lis)
//REMEMBER:  it's jQuery not jquery
//$('a').attr('href', 'http//www/google/com)  wil change the a ref to google
//can change object values by adding to a const :
    //const newAttr = {src: 'blah.com', alt: 'new text'}
//https://api.jquery.com/html/
//then $('img').attr(newAttrs) to pass this in to all img
//val() primarily used on inputs
//to make all inputs empty:  $('input').val('')
//something.css (will hit css)
console.log('testing');

//#2
$('div').find('img').addClass('image-center');
//
////#3
$('article').find('p').eq(5).remove()
//
//#4
//an attempt was made..
//function random(x) {
//    const randomSize = Math.random();
//    return randomSize+ x * 10;
//}
//let newSize = random(5);
//$('#title').css("font-size", newSize);


//#5
const newListItem = $('<li>seems clunky</li>');
$("aside.col-sm-4 ol").append(newListItem);

////#6

$("aside").empty()
const newParagraph = $("<p>WOOOPS so sorry about that</p>");//this is messsed up....
$(".col-sm-4").append(newParagraph);

//#7
//this listener works..
$(".form-control").on("keyup", function() {
    // Code to execute when the button is clicked
    let first = $(".form-control").eq(0).val();
    let  second = $(".form-control").eq(1).val();
    let   third = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + first + "," + second + "," + third  + ")");
    console.log('add to a variable each time up to 3?');
});
//const firstVal = $('.row mb-5').find('input').eq(1);
//function addColor(x,y,z) {

//#8

$("img").on('click', function (e) {
    $(e.target).remove();
  });

