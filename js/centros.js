function drawChart(data) {
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
