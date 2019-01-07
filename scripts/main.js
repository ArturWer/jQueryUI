$(()=>{
	"use strict"
	let $main = $("main");
	$main.accordion();
	$("#prizes").tabs();
	$("#arrival").datepicker();
	let $amount = $("#amount");
	$("#price-range").slider({
		range: true,
		min: 0,
		max: 400,
		values: [175, 300],
		slide: function(event, ui){
			$amount.val(`\$${ui.values[0]} - \$${ui.values[1]}`);
		}
	});
	$amount.val(`\$${$("#price-range").slider('values', 0)} - \$${$("#price-range").slider('values', 1)}`);
});
