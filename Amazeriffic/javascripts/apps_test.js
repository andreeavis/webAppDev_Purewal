// var main = function () {
// 	"use strict";

// 	console.log("hello world!");
// };

// $(document).ready(main);

var main = function () {
	"use strict";

	var toDos = [
		"Finish writing this book",
		"Take Gracie to the park",
		"Answer emails",
		"Prep for Monday's class",
		"Make up some new ToDos",
		"Get groceries"
	];

	// var makeTabActive = function (tabNumber) {
	// 	// construct the selector from tabNumber
	// 	var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
	// 	$(".tabs span").removeClass("active");
	// 	$(tabSelector).addClass("active");
	// };


	$(".tabs a span").toArray().forEach(function (element) {
	
		
		// create a click handler for this element
		$(element).on("click", function () {
			// since we're using the jQuery version of element,
			// we'll go ahead and create a temp variable
			// so we don't ned to keep recreating it
			var $element = $(element), $content;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				$content = $("<ul");
				toDos.for (i = toDos.length-1, i >=0, i --) {
					$content.append($("<li>").text(todo));
				}
				console.log("FIRST TAB CLICKED!");
			} else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("THIRD TAB CLICKED!");
				}

			return false;
		});
	});

	$(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);

// 	var tabNumber; 

// 	for (tabNumber = 1; tabNumber = 2; tabNumber <= 3; tabNumber ++) {
// 		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
// 		$(tabSelector).on("click", function () {
// 			$(".tabs span").removeClass("active");
// 			$(tabSelector).addClass("active");
// 			return false;
// 		});
// 	}
// };

	// $(".tabs a:nth-child(1)").on("click", function () {
	// 	makeTabActive(1);
	// 	return false;
	// });

	// $(".tabs a:nth-child(2)").on("click", function () {
	// 	makeTabActive(2);
	// 	return false;
	// });

	// $(".tabs a:nth-child(3)").on("click", function () {
	// 	makeTabActive(3);
	// 	return false;
	// });
// };

	// $(".tabs a:nth-child(1)").on("click", function () {
	// 	//make all the tabs inactive
	// 	$(".tabs span").removeClass("active");

	// 	//make the first tab active
	// 	$(".tabs a:nth-child(1) span").addClass("active");

	// 	//empty the main content so we can recreate it
	// 	$("main .content").empty();

	// 	//return false so we don't follow the link
	// 	return false;
	// });

	// $(".tabs a:nth-child(2)").on("click", function () {
	// 	$(".tabs span").removeClass("active");
	// 	$(".tabs a:nth-child(2) span").addClass("active");
	// 	%("main .content").empty();
	// 	return false;
	// });

	// $(".tabs a:nth-child(3)").on("click", function () {
	// 	$(".tabs span").removeClass("active");
	// 	$(".tabs a:nth-child(2) span").addClass("active");
	// 	$("main .content").empty();
	// 	return false;
	// });
// };