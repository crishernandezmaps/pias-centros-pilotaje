function drawChart(data) {

console.log(data);

var presentacion = []
for (var i = 0; i < data.length; i++) {
  presentacion.push(data[i]['presentacion'])
}


// Adding content to front and back
$("#1 .front").append( "<p class='front-text'>" + data[0]['centro'] + "</p>" );
$("#1 .back").append( "<p class='back-text'><b>Región:</b> " + data[0]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[0]['presentacion']  + "</p><br><a target='_blank' href='" + data[0]['link'] + "'>" + data[0]['link'] + "</a>" );

$("#2 .front").append( "<p class='front-text'>" + data[1]['centro']  + "</p>" );
$("#2 .back").append( "<p class='back-text'><b>Región:</b> " + data[1]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[1]['presentacion']  + "</p><br><a target='_blank' href='" + data[1]['link'] + "'>" + data[1]['link'] + "</a>" );

$("#3 .front").append( "<p class='front-text'>" + data[2]['centro']  + "</p>" );
$("#3 .back").append( "<p class='back-text'><b>Región:</b> " + data[2]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[2]['presentacion']  + "</p><br><a target='_blank' href='" + data[2]['link'] + "'>" + data[2]['link'] + "</a>" );

$("#4 .front").append( "<p class='front-text'>" + data[3]['centro']  + "</p>" );
$("#4 .back").append( "<p class='back-text'><b>Región:</b> " + data[3]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[3]['presentacion']  + "</p><br><a target='_blank' href='" + data[3]['link'] + "'>" + data[3]['link'] + "</a>" );

$("#5 .front").append( "<p class='front-text'>" + data[4]['centro']  + "</p>" );
$("#5 .back").append( "<p class='back-text'><b>Región:</b> " + data[4]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[4]['presentacion']  + "</p><br><a target='_blank' href='" + data[4]['link'] + "'>" + data[4]['link'] + "</a>" );

$("#6 .front").append( "<p class='front-text'>" + data[5]['centro']  + "</p>" );
$("#6 .back").append( "<p class='back-text'><b>Región:</b> " + data[5]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[5]['presentacion']  + "</p><br><a target='_blank' href='" + data[5]['link'] + "'>" + data[5]['link'] + "</a>" );

$("#7 .front").append( "<p class='front-text'>" + data[6]['centro']  + "</p>" );
$("#7 .back").append( "<p class='back-text'><b>Región:</b> " + data[6]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[6]['presentacion']  + "</p><br><a target='_blank' href='" + data[6]['link'] + "'>" + data[6]['link'] + "</a>" );

$("#8 .front").append( "<p class='front-text'>" + data[7]['centro']  + "</p>" );
$("#8 .back").append( "<p class='back-text'><b>Región:</b> " + data[7]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[7]['presentacion']  + "</p><br><a target='_blank' href='" + data[7]['link'] + "'>" + data[7]['link'] + "</a>" );

$("#9 .front").append( "<p class='front-text'>" + data[8]['centro']  + "</p>" );
$("#9 .back").append( "<p class='back-text'><b>Región:</b> " + data[8]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[8]['presentacion']  + "</p><br><a target='_blank' href='" + data[8]['link'] + "'>" + data[8]['link'] + "</a>" );

$("#10 .front").append( "<p class='front-text'>" + data[9]['centro']  + "</p>" );
$("#10 .back").append( "<p class='back-text'><b>Región:</b> " + data[9]['region']  + "</p><br><p class='back-text'><b>Presentación:</b> " + data[9]['presentacion']  + "</p><br><a target='_blank' href='" + data[9]['link'] + "'>" + data[9]['link'] + "</a>" );



  // Using JQuery //
  $("#1").flip();
  $("#2").flip();
  $("#3").flip();
  $("#4").flip();
  $("#5").flip();
  $("#6").flip();
  $("#7").flip();
  $("#8").flip();
  $("#9").flip();
  $("#10").flip();

  $("#pre").click(function() {
    $( ".pre" ).flip('toggle');
  });

  $("#des").click(function() {
    $( ".des" ).flip('toggle');
  });

  $("#sep").click(function() {
    $( ".sep" ).flip('toggle');
  });

  $("#tra").click(function() {
    $( ".tra" ).flip('toggle');
  });

  $("#env").click(function() {
    $( ".env" ).flip('toggle');
  });

  $("#con").click(function() {
    $( ".con" ).flip('toggle');
  });

  $("#val").click(function() {
    $( ".val" ).flip('toggle');
  });

  $("#ant").click(function() {
    $( ".ant" ).flip('toggle');
  });

  $("#ana").click(function() {
    $( ".ana" ).flip('toggle');
  });

  // Regiones //
  $("#anto").click(function() {
    $( ".anto" ).flip('toggle');
  });

  $("#coqu").click(function() {
    $( ".coqu" ).flip('toggle');
  });

  $("#valp").click(function() {
    $( ".valp" ).flip('toggle');
  });

  $("#maul").click(function() {
    $( ".maul" ).flip('toggle');
  });

  $("#biob").click(function() {
    $( ".biob" ).flip('toggle');
  });

  $("#arau").click(function() {
    $( ".arau" ).flip('toggle');
  });

  $("#losl").click(function() {
    $( ".losl" ).flip('toggle');
  });

  $("#metr").click(function() {
    $( ".metr" ).flip('toggle');
  });
  //

  $(".btn-group .btn").click(function(){
    $(".btn-group .btn").removeClass('active');
    $(this).toggleClass('active');
  });

};

////////////////////////////////// Tabletop //////////////////////////////////
url = 'https://docs.google.com/spreadsheets/d/1SXNsRptqggnKnCOuylcIBDUZYtBjUpsL2SUUh7KqN4Q/edit?usp=sharing'
var centros = '1SXNsRptqggnKnCOuylcIBDUZYtBjUpsL2SUUh7KqN4Q'
var options = {
  key: centros,
  simpleSheet: true,
  callback: draw
}

function renderSpreadsheetData() {
  Tabletop.init(options)
}

function draw(data, tabletop) {
  drawChart(data)
}
renderSpreadsheetData();
