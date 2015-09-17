$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
       
    
     $.plot("#chart1", [{data: 75, color: '#42b8dd'}, {data: 25, color: '#fff'}], {series: {pie: {show: true, innerRadius: 0.87}}});
     $.plot("#chart2", [{data: 25, color: '#42b8dd'}, {data: 75, color: '#fff'}], {series: {pie: {show: true, innerRadius: 0.87}}});
     $.plot("#chart3", [{data: 75, color: '#42b8dd'}, {data: 25, color: '#fff'}], {series: {pie: {show: true, innerRadius: 0.87}}});
     $.plot("#chart4", [{data: 50, color: '#42b8dd'}, {data: 50, color: '#fff'}], {series: {pie: {show: true, innerRadius: 0.87}}});

});


