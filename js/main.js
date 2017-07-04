
$(document).ready(function(){
        
     setTimeout(function(){
         $(".tickLabel").each(function (i) {
             temp = Number($(this).html());
             if(temp == 0){
                 $(this).html('');
             }
             if(temp > 10000){                 
                if(temp < 99999){                           $(this).html($(this).html().substring(0,2)+'k');
                }
                 if(temp > 99999 && temp < 999999){                           $(this).html($(this).html().substring(0,3)+'k');
                }
                 if(temp > 999999 && temp < 9999999){                           $(this).html($(this).html().substring(0,3)+'k');
                }
             }
             if(i < 30){
                 
                $(this).html(Math.floor($(this).html()));
             }
             
      });
         
         
     }, 100);
        
    /*$(document).on('hover','.flotTip', function(){
             alert($(this).html());
             temp = Number($(this).html());
             if(temp == 0){
                 $(this).html('');
             }
             if(temp > 10000){                 
                if(temp < 99999){                           $(this).html($(this).html().substring(0,2)+'k');
                }
                 if(temp > 99999 && temp < 999999){                           $(this).html($(this).html().substring(0,3)+'k');
                }
                 if(temp > 999999 && temp < 9999999){                           $(this).html($(this).html().substring(0,3)+'k');
                }
             }   
    });*/
 
          

    
    
 $('.act-drop').click(function(e){
     var text = $(this).text();
     //alert(text);
     $('#drop-text').text(text);
 });
 
    
   $(".tab-click").click(function(){
       $(".tab-click").addClass("active-tab");  
       $(".tab-view").removeClass("active-tab");  
       $(".tab-ret").removeClass("active-tab");  
   }); 
     $(".tab-view").click(function(){
       $(".tab-view").addClass("active-tab");  
       $(".tab-click").removeClass("active-tab");  
       $(".tab-ret").removeClass("active-tab");  
   });
       $(".tab-ret").click(function(){
       $(".tab-ret").addClass("active-tab");  
       $(".tab-click").removeClass("active-tab");  
       $(".tab-view").removeClass("active-tab");  
   });
       $(".profile-logo").click(function(){
       $(".prof-set").slideToggle("100");   
   }); 
           $(".gen-item").click(function(){
       $(".arrow-down").toggleClass("arrow-left");   
   }); 
           $(".dropdown-date").click(function(){
       $(".ar").toggleClass("ar-left");   
   }); 
         $(".profile-logo").click(function(){
       $(".profile i").toggleClass("transform-arrow");   
   }); 
    
           $(".tit-ar").click(function(){
       $(".old-camp i").toggleClass("arrow-left");   
   }); 
    
            $(".act-ar").click(function(){
       $(".act-camp i").toggleClass("arrow-left");   
   }); 
    
    $(".form-d1").click(function(){
       $(".form-d1").addClass("active");  
       $(".form-d2").removeClass("active");  
       $(".form-d3").removeClass("active");  
   }); 
     
       $(".form-d2").click(function(){
       $(".form-d2").addClass("active");  
       $(".form-d1").removeClass("active");  
       $(".form-d3").removeClass("active");  
   }); 
    
       $(".form-d3").click(function(){
       $(".form-d3").addClass("active");  
       $(".form-d1").removeClass("active");  
       $(".form-d2").removeClass("active");  
   }); 
    $(function() {
      var creditly = Creditly.initialize(
          '.creditly-wrapper .expiration-month-and-year',
          '.creditly-wrapper .credit-card-number',
          '.creditly-wrapper .security-code',
          '.creditly-wrapper .card-type');
    });    
    
$(function () {
    var graphData = [{
        data: [ [1, 100000], [2, 65000], [3, 190000], [4, 160400], [5, 190000], [6, 120000], [7, 80000], [8, 190050], [9, 20000], [10, 34000], [11, 100000],[12, 40000],[13, 130000],[14, 150000],[15, 150300],[16, 150000],[17, 143000],[18, 105000],[19, 170300],[20, 150000],[21, 18300],[22, 100500],[23, 103000],[24, 10500],[25, 12300],[26, 15000],[27, 80000],[28, 10500],[29, 10300],[30, 15000] ],
        color: '#00a6e8',
        points: { radius: 0, fillColor: '#00a6e8' },
        hoverable: true,
    }
];
    
    
       $.plot($('#graph-lines'), graphData, {
           
    series: {
        points: {
            show: true,
            hoverable:true,
            radius: 10,
            
        },
        lines: {
            show: true,
            fill: '#00a6e8',
             fillColor: {
            colors: [{ opacity: 0.1 }, { opacity: 0.1 } ]
        },
            lineWidth: 1,
        
        },
        shadowSize: 0
    },
    grid: {
        hoverable:true,
        color: '#646464',
        borderColor: 'transparent',
        borderWidth: 0,
        hoverable: true,
        backgroundColor:'#fff'
    },

           
        xaxis: { tickDecimals: 0,
                tickColor: 'transparent',
               },
    yaxis: {
        tickSize: 50000
    },
           tooltip: {
        show: true,
        content: "%y"
      }
});
});
    
    $(function () {
    var graphData = [{
        data: [ [1, 90000], [2, 75000], [3, 180000], [4, 170400], [5, 130000], [6, 110000], [7, 50000], [8, 160050], [9, 20000], [10, 34000], [11, 100000],[12, 40000],[13, 130000],[14, 150000],[15, 150300],[16, 150000],[17, 143000],[18, 105000],[19, 170300],[20, 150000],[21, 18300],[22, 100500],[23, 103000],[24, 10500],[25, 12300],[26, 15000],[27, 80000],[28, 10500],[29, 10300],[30, 15000] ],
        color: '#00a6e8',
        points: { radius: 0, fillColor: '#00a6e8' },
        hoverable: true,
    }
];
    
    
       $.plot($('#graph-lines1'), graphData, {
           
    series: {
        points: {
            show: true,
            hoverable:true,
            radius: 10,
            
        },
        lines: {
            show: true,
            fill: '#00a6e8',
             fillColor: {
            colors: [{ opacity: 0.1 }, { opacity: 0.1 } ]
        },
            lineWidth: 1,
        
        },
        shadowSize: 0
    },
    grid: {
        hoverable:true,
        color: '#646464',
        borderColor: 'transparent',
        borderWidth: 0,
        hoverable: true,
        backgroundColor:'#fff'
    },

           
        xaxis: { tickDecimals: 0,
                tickColor: 'transparent',
               },
    yaxis: {
        tickSize: 50000
    },
           tooltip: {
        show: true,
        content: "%y"
      }
});
});
    
    
      $(function () {
    var graphData = [{
        data: [ [1, 90], [2, 10], [3, 20], [4, 45], [5, 113], [6, 11], [7, 100], [8, 50], [9, 60], [10, 25], [11, 75],[12, 100],[13, 110] ],
        color: '#00a6e8',
        points: { radius: 0, fillColor: '#00a6e8' },
        hoverable: true,
    }
];


    
       $.plot($('#graph-line-ret'), graphData, {
           
    series: {
        points: {
            show: true,
            hoverable:true,
            radius: 10,
            
        },
        lines: {
            show: true,
            fill: '#00a6e8',
             fillColor: {
            colors: [{ opacity: 0.1 }, { opacity: 0.1 } ]
        },
            lineWidth: 1,
        
        },
        shadowSize: 0
    },
    grid: {
        hoverable:true,
        color: '#646464',
        borderColor: 'transparent',
        borderWidth: 0,
        hoverable: true,
        backgroundColor:'#fff'
    },

           
        xaxis: { tickDecimals: 0,
                tickColor: 'transparent',
    ticks: [[1,"0:00"],[2,"0:23"],[3,"0:47"],[4,"1:10"],[5,"1:34"],[6,"1:57"],[7,"2:21"],[8,"2:44"],[9,"3:08"],[10,"3:31"],[11,"3:54"],[12,"4:18"],[13,"4:41"]]
               },
    yaxis: {
        tickSize: 30,
     tickFormatter: function(v, axis) {
        return "<span class='tickLabel'>" + v + "%</span>";
     }
    },
           tooltip: {
        show: true,
        content: "%y"
      }
});
});
    
        
$(function () {

var data = [ 
            {data: [[1,90]], color: "#efc4dd"}, 
            {data: [[2,80]], color: "#e59dc6"},
            {data: [[3,40]], color: "#e08abb"},
            {data: [[4,30]], color: "#da76b0"},
            {data: [[5,30]], color: "#d563a5"},
            {data: [[6,25]], color: "#cb3c8e"}];

$.plot("#bars-chart",data, {
    series: {
        bars: {
            show: true,
            barWidth: 0.95,
            align: "center",
            lineWidth: 0,
            fill:0.75,
            hoverable: true,
            shadowSize:0
            
        }
    },
    xaxis: {
        show:true,
        tickLength:0,
        ticks: [[1,"13-17"],[2,"17-24"],[3,"24-34"],[4,"34-44"],[5,"44-54"],[6,"55-65"]]
    },
    yaxis: {
        show:true,
        tickLength:0,
        tickDecimals: 0,
            tickFormatter: function(v, axis) {
        return "<span class='tickLabel'>" + v + "%</span>";
     }
    },
        grid: {
        show:true,
        color: '#646464',
        background:null,
        borderColor: 'transparent',
        borderWidth: 0,
        hoverable: true,
        backgroundColor:'transparent'
    },
    tooltip: {
        show: true,
        content: "%y"
      }
});
});
    
    
    
$(".eng-st").click(function(){
       $(".eng-st").addClass("local-tab-st");  
       $(".reach-st").removeClass("local-tab-st");  
   }); 
    
$(".reach-st").click(function(){
       $(".reach-st").addClass("local-tab-st");  
       $(".eng-st").removeClass("local-tab-st");  
   }); 
    
    $(".loc-tab").click(function(){
       $(".loc-tab").addClass("current");  
       $(".gen-tab").removeClass("current");  
   }); 
    
    $(".gen-tab").click(function(){
       $(".gen-tab").addClass("current");  
       $(".loc-tab").removeClass("current");  
   }); 


$("#e1").daterangepicker({
     datepickerOptions : {
         numberOfMonths : 2,
         
     }
 });
    
   $(".reach-st").click(function(){
       $(".reach-st").addClass("local-tab-st");  
       $(".eng-st").removeClass("local-tab-st");  
   });  
    

    $("#tabbed-nav").zozoTabs({
        theme: "silver",      
        animation: {
            duration: 800,
            effects: "slideH"
        }
    })

    jQuery(document).ready(function ($) {
    $(".tabs-chart").zozoTabs({
        theme: "silver",      
        animation: {
            duration: 100,
            effects: 'none',
        }
    })
});
    
    var chart = new Chartist.Pie('#chart1',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart.on('draw', function(data) {
  if(data.type === 'slice') {
    var pathLength = data.element._node.getTotalLength();

    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        fill: 'freeze'
      }
    };

    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });
    data.element.animate(animationDefinition, false);
  }
});


chart.on('created', function() {
  if(window.__anim21278907124) {
    clearTimeout(window.__anim21278907124);
    window.__anim21278907124 = null;
  }
  //window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
});
    
    /*-----------------------------------------*/
    
     var chart2 = new Chartist.Pie('#chart2',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart2.on('draw', function(data) {
  if(data.type === 'slice') {
    var pathLength = data.element._node.getTotalLength();
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        fill: 'freeze'
      }
    };

    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });
    data.element.animate(animationDefinition, false);
  }
});
//var flagTime = true;
chart2.on('created', function() {
  if(window.__anim212789071241) {
    clearTimeout(window.__anim212789071241);
    window.__anim212789071241 = null;
  }
    //if(flagTime){
        window.__anim212789071241 = setTimeout(chart2.update.bind(chart2), 100);
        //flagTime = false;
    //}
});
    
      
  var chart3 = new Chartist.Pie('#chart3',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart3.on('draw', function(data1) {
  if(data1.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data1.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data1.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data1.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if(data1.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data1.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data1.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data1.element.animate(animationDefinition, false);
  }
});
//var flagTime = true;
// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart3.on('created', function() {
  if(window.__anim212789071242) {
    clearTimeout(window.__anim212789071242);
    window.__anim212789071242 = null;
  }
    //if(flagTime){
        window.__anim212789071242 = setTimeout(chart3.update.bind(chart3), 100);
        //flagTime = false;
    //}
});
    
    var chart4 = new Chartist.Pie('#chart4',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart4.on('draw', function(data) {
  if(data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});
//var flagTime = true;
// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart4.on('created', function() {
  if(window.__anim212789071243) {
    clearTimeout(window.__anim212789071243);
    window.__anim212789071243 = null;
  }
    //if(flagTime){
        window.__anim212789071243 = setTimeout(chart4.update.bind(chart4), 100);
        //flagTime = false;
    //}
});
    
     var chart5 = new Chartist.Pie('#chart5',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart5.on('draw', function(data) {
  if(data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});
//var flagTime = true;
// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart5.on('created', function() {
  if(window.__anim212789071245) {
    clearTimeout(window.__anim212789071245);
    window.__anim212789071245 = null;
  }
    //if(flagTime){
        window.__anim212789071245 = setTimeout(chart5.update.bind(chart5), 100);
        //flagTime = false;
    //}
});
    
    var chart6 = new Chartist.Pie('#chart6',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart6.on('draw', function(data) {
  if(data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});
//var flagTime = true;
// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart6.on('created', function() {
  if(window.__anim212789071246) {
    clearTimeout(window.__anim212789071246);
    window.__anim212789071246 = null;
  }
    //if(flagTime){
        window.__anim212789071246 = setTimeout(chart6.update.bind(chart6), 100);
        //flagTime = false;
    //}
});
    
    var chart7 = new Chartist.Pie('#chart7',  {
  series: [75, 25],
  labels: ["75%","Male","25%", "Female" ]
}, {
  donut: true,
    donutWidth:3,
    startAngle: 90,
    chartPadding: 40,
         plugins: [
        Chartist.plugins.legend({
            clickable:false
        })
    ],
  showLabel: false
});
    
chart7.on('draw', function(data) {
  if(data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: '1s',
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});
//var flagTime = true;
// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart7.on('created', function() {
  if(window.__anim212789071247) {
    clearTimeout(window.__anim212789071247);
    window.__anim212789071247 = null;
  }
    //if(flagTime){
        window.__anim212789071247 = setTimeout(chart7.update.bind(chart7), 100);
        //flagTime = false;
    //}
});
//      
    h = $('.comments').offset();
    htop = h.top+120 - 40;
    tab1H = htop;
    $('.left111').css('height', htop+'px');  
    $(document).on('click', '#tab2', function(){
        //h = $('#empty-block').offset();
        tab1H = $('.left111').height();
        chl = $('.local-user-col');
        current = chl.eq(chl.length-1);
        top1 = current.offset().top;
        hg = $('.local-user-col').height();
        
        end = top1 + hg - 60;
        //alert(current.offset().top);
       // alert(htop);
        $('.left111').css('height', end+'px');
    });
    $(document).on('click', '#tab1', function(){
        
        $('.left111').css('height', tab1H+'px');
    });
    
    setTimeout(function(){
        var menuBlock1 = $('#ui-id-12').height();
        var menuBlock2 = $('#ui-id-14').height();
        $(document).on('click', '.tit-ar', function(){
            status = $(this).attr('attr-menu');
            if(status === "open"){
                currentHeigh = $('#ui-id-10').height();
                h = currentHeigh - menuBlock1;
                $('#ui-id-10').animate({height: h+'px'}, 370);
                $(this).attr('attr-menu', 'close');                
            }
            if(status === "close"){
                currentHeigh = $('#ui-id-10').height();
                h = currentHeigh + menuBlock1;
                $('#ui-id-10').animate({height: h+'px'}, 370);
                $(this).attr('attr-menu', 'open');                
            }
        });
        $(document).on('click', '.act-ar', function(){
            status = $(this).attr('attr-menu');
            if(status === "open"){
                currentHeigh = $('#ui-id-10').height();
                h = currentHeigh - menuBlock2;
                $('#ui-id-10').animate({height: h+'px'}, 370);
                $(this).attr('attr-menu', 'close');                
            }
            if(status === "close"){
                currentHeigh = $('#ui-id-10').height();
                h = currentHeigh + menuBlock2;
                $('#ui-id-10').animate({height: h+'px'}, 370);
                $(this).attr('attr-menu', 'open');                
            }
        });
    },1000);
           
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$(".dropbtn").click(function(){
	    if ($(".dropdown-content").attr("display") == "block") {
	        $(".ar").css({
transform: 'rotate(-90deg)'});
	    }
	    else {
            $(".ar").css({
  transform: 'rotate(90deg)'});
	    }  
	});

 $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
 $( function() {
    $( "#accordion2" ).accordion({
      collapsible: true
    });
  } );
 $( function() {
    $( "#accordion3" ).accordion({
      collapsible: true
    });
  } );


$("#ex1").modal({
  fadeDuration: 100
});

$("div#drop-act").dropzone({ url: "../file/post" });


