/*
	WEB 303 Assignment 1 - jQuery
	{Naman Sharma_0822254}
*/

$(document).ready(function()
{
$("input").change(function()  
{
 let salary= $("#yearly-salary").val();
 let percentage= $("#percent").val();


 let theResult=((salary*percentage)/100).toFixed(2);  
 $("#amount").text("$" +theResult);

});
});


