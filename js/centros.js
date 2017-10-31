function drawChart(data) {
  var width = 950,
      height = 700;

  var regiones = ['Antofagasta','Coquimbo','Valparaiso','Metropolitana','Maule','Bio-Bio','Araucanía','Los Lagos']

  var content = function(d) {
    return "<span class='ngrupo'>" + d.centro + "</span>" + "<br/>"
          + "<span class='ngrupo'>" + d.region + "</span>" + "<br/>";
  }

  var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-8, 0])
      .html(content);

  var svg = d3.select('#centros')
    .append('svg')
    .attr('class', 'bubls')
    .attr("width", '100%')
    .attr("height", '100%')
    .attr('viewBox','0 0 '+Math.min(width)+' '+Math.min(height))
    .attr("preserveAspectRatio", "xMinYMin meet")
    .append('g')
    .attr('transform', 'translate(0,0)');

  svg.call(tool_tip);

  // Settings
  var radiusCollide = 50,
    strengthValue = 0.1,
    alpha = 0.3,
    left = 250,
    right = 700;

  var pallete = ["#ffc60c", "#cc5810", "#558930", "#1f86cc", "#7f3e98", "#717770", "#ffc60c", "#71d6e7"];
  var color = d3.scaleOrdinal(pallete);

  var forceX = d3.forceX(function() { return width / 2 }).strength(strengthValue).x(width * .5)
  var forceY = d3.forceY(function() { return height / 2 }).strength(strengthValue).y(height * .5)
  var colliding = d3.forceCollide(function() { return radiusCollide * 1.3})
  var centering = d3.forceCenter(width / 2, height / 2);

  var simulation = d3.forceSimulation()
    .velocityDecay(0.5)
    .force('x', forceX)
    .force('y', forceY)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force('collide', colliding);

  // Starting simulation
  simulation.nodes(data).on('tick',function() {
      circles
        .attr('cx', function(d) { return d.x})
        .attr('cy', function(d) { return d.y })
    });


  var hide = function(d) {
      d3.select("#hidden").html('<h3>'+d.centro+'</h3>' + '<br/>'
                                + '<h4>' + d.region + '</h4>'  + '<br/>'
                                + '<b>Contacto: </b> ' + d.nombre_contacto + '<br/>'
                                + '<b>Telefono:</b> ' + d.telefono + '<br/>'
                                + '<b>Email:</b> ' + "<a class='link-inside' href='mailto:" + d.correo + "'> " + d.correo + '</a><br/>'
                                + '<b>Web:</b>' + "<a class='link-inside' target='_blank' href='" + d.web + "'> " + d.web + '</a><br/>'
                                + '<b>Presentacion:</b> ' + d.presentacion
                              )}

  // Circles or Nodes - Potato, Potato...
  var circles = svg.selectAll('.gi')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'gi')
    .attr('r', radiusCollide)
    .attr("fill", function(d) { return color(d.region) })
    .attr('stroke', function(d) { return d3.rgb(color(d.region)).darker(0.8) })
    .attr("id", function(d) { return d.centro })
    .on('click', hide)
    .on('mouseover', tool_tip.show)
    .on('mouseout', tool_tip.hide);

  var o = 0.1;  


  d3.select('#preservacion').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.preservacion).length > 0) { return 1 } else { return o} });
  })

  d3.select('#deshidratacion').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.deshidratacion).length > 0) { return 1 } else { return o} });
  })

  d3.select('#separacion').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.separacion).length > 0) { return 1 } else { return o} });
  })

  d3.select('#transformacion').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.transformacion).length > 0) { return 1 } else { return o} });
  })

  d3.select('#envasado').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.envasado).length > 0) { return 1 } else { return o} });
  })

  d3.select('#control').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.control).length > 0) { return 1 } else { return o} });
  })

  d3.select('#validacion').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.validacion).length > 0) { return 1 } else { return o} });
  })

  d3.select('#antioxidante').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.antioxidante).length > 0) { return 1 } else { return o} });
  })

  d3.select('#analisis_sensorial').on('click', function() { // Inocuidad ////////////
    circles
      .style("opacity", function(d) { if ((d.analisis_sensorial).length > 0) { return 1 } else { return o} });
  })

  d3.select('#all').on('click', function() {
    simulation
      .velocityDecay(0.5)
      .force('x', forceX)
      .force('y', forceY)
      .force("center", d3.forceCenter(width / 2, height / cen))
      .force('collide', colliding)
      .restart();

    circles
      .attr("fill", function(d) { return color(d.region) })
      .attr('stroke', function(d) { return d3.rgb(color(d.region)).darker() })
      .attr('r', radiusCollide)
      .on('click',hide);
  })


};
////////////////////////////////// D3 - END //////////////////////////////////
////////////////////////////////// Tabletop //////////////////////////////////
url = 'https://docs.google.com/spreadsheets/d/1SXNsRptqggnKnCOuylcIBDUZYtBjUpsL2SUUh7KqN4Q/edit?usp=sharing'
var centros = '1SXNsRptqggnKnCOuylcIBDUZYtBjUpsL2SUUh7KqN4Q'
var options = { key: centros, simpleSheet: true, callback: draw }
function renderSpreadsheetData() { Tabletop.init(options) }
function draw(data, tabletop) { drawChart(data) }
renderSpreadsheetData();
////////////////////////////////// Tabletop - END//////////////////////////////////
