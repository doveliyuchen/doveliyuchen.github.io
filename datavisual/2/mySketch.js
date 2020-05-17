let FluReport, mapData, mapDataa, flu2report,method,FluReport1;
let FluReport2;
let array2=[];
let array3=[];
let array4=[];
let array5=[];
let array6=[];
let array7=[];

d3.csv('FluNet Report.csv')
	.then(function(FluDataset) {
		FluReport1 = FluDataset;
 for (let i=0; i< FluReport1.length; i++){

      if (FluReport1[i].Year=='2018'){

      array2.splice(i,0,FluReport1[i])
      }
 if (FluReport1[i].Year=='2019'){
  
      array3.splice(i,0,FluReport1[i])}
 if (FluReport1[i].Year=='2020'){
          //
      array4.splice(i,0,FluReport1[i])


   }        
   }
          
		isDataReady();
	});
d3.csv('flu2.csv')
	.then(function(FluDataset) {
		flu2report = FluDataset;
   for (let i=0; i< flu2report.length; i++){

      if (flu2report[i].Year=='2018'){

      array5.splice(i,0,flu2report[i])
      }
 if (flu2report[i].Year=='2019'){

      array6.splice(i,0,flu2report[i])}
 if (flu2report[i].Year=='2020'){
          //
      array7.splice(i,0,flu2report[i])

   }        
   } 

		isDataReady();
	});

d3.json('custom.geo.json')

	.then(function(mapDataset) {
		mapData = mapDataset.features; 
		isDataReady();
	});

d3.json('usa.geo.json')

	.then(function(mapDataset) {
		mapDataa = mapDataset.features; 
		isDataReady();
	});


function isDataReady() {
	if (mapData && FluReport1 && mapDataa &&flu2report) {
      
		console.log('Datasets are ready');
	drawAll()
   
	}

}

function drawAll(){
  
  d3.select('#clear').on('click', function(d){
    d3.select('svg').remove()
    
  })
        d3.select('#comp').on('mouseover',function(d){

       if (document.getElementById('China').checked){
     
         
 d3.select('#comp').on('click', function(d){
           
  var form = document.getElementById('check')
    for (let i=0; i<form.length; i++){

      if (form[i].checked){
        method = form[i].id;
      if (method=='2018'){
        FluReport2=array2
      }     
      if (method=='2019'){
        FluReport2=array3
      }     
      if (method=='2020'){
        FluReport2=array4
      }
 }
       
    } 

     drawout1()
 })
         
        
}
            if (document.getElementById('US').checked){
                
              d3.select('#comp').on('click', function(d){
         
  var form2 = document.getElementById('check')
    for (let i=0; i<form2.length; i++){

      if (form2[i].checked){
        method = form2[i].id;
        
      if (method=='2018'){
        FluReport=array5
      }     
      if (method=='2019'){
        FluReport=array6
      }     
      if (method=='2020'){
        FluReport=array7
      }
 }
       
    } 
drawout()
 })
             
  	}
  
      })
function drawMap() {

  
    
  //d3.select('body').append('h1').text('FluDataset');
	
  
 

drawout1()
}
  
function drawout1(){


	let projection = d3.geoMercator();


	projection.scale(700)

		.center([108, 47]);
	let pathGenerator = d3.geoPath(projection);
  
 

	let svg = d3.select('body').append('svg').attr('width', '900').attr('height', '900').style('margin-left', '25vw').style('display', 'block').style('justify-content', 'center').style('background-color','rgba(255,255,255,0.7)').style('margin-top', '5vw');
  var width = 565;
  var height = 220;
  
 var array=[]

    var margin = { top: 169,right: 50, bottom: 50, left: 40 };

  var array1=[]
for (i=0;i<FluReport2.length;i++){

    array.splice(i,array.length,FluReport2[i].Week)
     array1.splice(i,array1.length,FluReport2[i].ALL_INF)
}
var a=d3.min(array.map(Number))
var b=d3.max(array.map(Number))+1

  let dataYearweek=d3.range(a,b).map(d => ({
    week: d,
    value: array1[d-a]

  }));
     console.log(a)
    let map=	svg.selectAll('path')
		.data(mapData)
		.enter()
		.append('path')
		.attr('d', pathGenerator)

  

  let g = d3
    .select('div#slider')
    .append('svg')
    .append('g')
    .attr('width', width)
    .attr('height', height*5);

  var padding = 0.1;

  var xBand = d3
    .scaleBand()
    .domain(dataYearweek.map(d => d.week))
    .range([margin.left, width - margin.right])
    .padding(padding);

  var xLinear = d3
    .scaleLinear()
    .domain([
      d3.min(dataYearweek, d => d.week),
      d3.max(dataYearweek, d => d.week),
    ])
    .range([
      margin.left + xBand.bandwidth() / 2 + xBand.step() * padding - 0.5,
      width -
        margin.right -
        xBand.bandwidth() / 2 -
        xBand.step() * padding -
        0.5,
    ]);

  var y = d3
    .scaleLinear()
    .domain([0, d3.max(dataYearweek, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  var yAxis = g =>
    g
      .attr('transform', `translate(${width - margin.right},0)`)
      .call(
        d3
          .axisRight(y)
          .tickValues([1e4])
          .tickFormat(d3.format(''))
      )
      .call(g => g.select('.domain').remove());

  var slider = g =>
    g.attr('transform', `translate(0,${height - margin.bottom})`).call(
      d3
        .sliderBottom(xLinear)
        .step(1)
        .ticks(5)
        .default(a)
        .on('onchange', value => draw(value))
    );

  var bars = svg
    .append('g')
    .selectAll('rect')
    .data(dataYearweek);

  var barsEnter = bars
    .enter()
    .append('rect')
    .attr('x', d => xBand(d.week))
    .attr('y', d => y(d.value))
    .attr('height', d => y(0) - y(d.value))
    .attr('width', xBand.bandwidth());

  svg.append('g').call(yAxis);
  svg.append('g').call(slider);
let output1=0
  var draw = selected => {
    barsEnter
      .merge(bars)
      .attr('fill', d => (d.week === selected ? '#bad80a' : '#e0e0e0'));
          output1=dataYearweek[selected -a].value/100
  d3.select('p#value-week').text(
     "There are "+
      d3.format('')(dataYearweek[selected-a].value) +" people infected flu in China at the selected time!"
    );
    map.attr('fill', d3.interpolateReds(output1/200))

	
  };

  draw(a);




	
}
function drawMap1() {

  
    
  //d3.select('body').append('h1').text('FluDataset');
	

drawout()
}
function drawout(){


	let projection = d3.geoMercator();


	projection.scale(400)

		.center([-474, 69]);
	let pathGenerator = d3.geoPath(projection);
  
 

	let svg = d3.select('body').append('svg').attr('width', '900').attr('height', '900').style('margin-left', '25vw').style('display', 'block').style('justify-content', 'center').style('background-color','rgba(255,255,255,0.7)').style('margin-top', '5vw');

  var width = 565;
  var height = 220;
  
 var array=[]

    var margin = { top: 167,right: 50, bottom: 50, left: 40 };

  var array1=[]
for (i=0;i<FluReport.length;i++){

    array.splice(i,array.length,FluReport[i].Week)
     array1.splice(i,array1.length,FluReport[i].ALL_INF)
}
var a=d3.min(array.map(Number))
var b=d3.max(array.map(Number))+1

  let dataYearweek=d3.range(a,b).map(d => ({
    week: d,
    value: array1[d-a]

  }));
     console.log(a)
    let map=	svg.selectAll('path')
		.data(mapDataa)
		.enter()
		.append('path')
		.attr('d', pathGenerator)

  

  let g = d3
    .select('div#slider')
    .append('svg')
    .append('g')
    .attr('width', width)
    .attr('height', height);

  var padding = 0.1;

  var xBand = d3
    .scaleBand()
    .domain(dataYearweek.map(d => d.week))
    .range([margin.left, width - margin.right])
    .padding(padding);

  var xLinear = d3
    .scaleLinear()
    .domain([
      d3.min(dataYearweek, d => d.week),
      d3.max(dataYearweek, d => d.week),
    ])
    .range([
      margin.left + xBand.bandwidth() / 2 + xBand.step() * padding - 0.5,
      width -
        margin.right -
        xBand.bandwidth() / 2 -
        xBand.step() * padding -
        0.5,
    ]);

  var y = d3
    .scaleLinear()
    .domain([0, d3.max(dataYearweek, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  var yAxis = g =>
    g
      .attr('transform', `translate(${width - margin.right},0)`)
      .call(
        d3
          .axisRight(y)
          .tickValues([1e4])
          .tickFormat(d3.format(''))
      )
      .call(g => g.select('.domain').remove());

  var slider = g =>
    g.attr('transform', `translate(0,${height - margin.bottom})`).call(
      d3
        .sliderBottom(xLinear)
        .step(1)
        .ticks(5)
        .default(a)
        .on('onchange', value => draw(value))
    );

  var bars = svg
    .append('g')
    .selectAll('rect')
    .data(dataYearweek);

  var barsEnter = bars
    .enter()
    .append('rect')
    .attr('x', d => xBand(d.week))
    .attr('y', d => y(d.value))
    .attr('height', d => y(0) - y(d.value))
    .attr('width', xBand.bandwidth());

  svg.append('g').call(yAxis);
  svg.append('g').call(slider);
let output1=0
  var draw = selected => {
    barsEnter
      .merge(bars)
      .attr('fill', d => (d.week === selected ? '#bad80a' : '#e0e0e0'));
          output1=dataYearweek[selected -a].value/100
  d3.select('p#value-week').text("There are "+
      d3.format('')(dataYearweek[selected-a].value) +" people infected flu in US at the selected time!"
    );
    map.attr('fill', d3.interpolateReds(output1/200))

	
  };

  draw(a);




}
}