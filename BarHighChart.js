var chart = {
   type: 'bar'
           };
var title = {
   text: 'Full-Time Women Enrolled vs. Full-Time Men Enrolled'   
           };    
var xAxis = {
   categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
           };
var yAxis = {
   min: 0,
   title: {
       text: 'poplulation'
              },
   stackLabels: {
       enabled: true,
       style: {
           fontWeight: 'bold',
           color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                 }
              }
           };
var legend = {
   align: 'right',
   x: -30,
   verticalAlign: 'top',
   y: 25,
   floating: true,
              
   backgroundColor: (
       Highcharts.theme && Highcharts.theme.background2) || 'white',
   borderColor: '#CCC',
   borderWidth: 1,
   shadow: false
           };   
var tooltip = {
   formatter: function () {
   return '<b>' + this.x + '</b><br/>' +
   this.series.name + ': ' + this.y + '<br/>' +
   'Total: ' + this.point.stackTotal;
              }
           };
var plotOptions = {
   column: {
       stacking: 'normal',
       dataLabels: {
           enabled: true,
           color: (Highcharts.theme && Highcharts.theme.dataLabelsColor)
                       || 'red',
           style: {
               textShadow: '0 0 3px black'
                    }
                 }
              }
           };
var credits = {
   enabled: false
           };
var series = [
   {
      name: 'fulltime men enrolled',
      data: [1607,2031,1838,1893,1695,1858,1583,2328,2616,2538,2711,2669,2725,3220]
   }, 
   {
      name: 'fulltime women enrolled',
      data: [2113,2558,2303,2399,2054,2089,1861,2245,2612,2383,2581,3077,2974,3484]
   }
           ];     
     
var json = {};   
json.chart = chart; 
json.title = title;   
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;
json.tooltip = tooltip;
json.plotOptions = plotOptions;
json.credits = credits;
json.series = series;
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);