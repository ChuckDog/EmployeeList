// mock a employee list component

var EmployeeListComponent = function() {}

// create the employee list table
// this list data is mock data
EmployeeListComponent.prototype.render = function(listData) {

	var that = this;
	// mock data
	that.employeeName = 'THis is name.',
	that.employeeBio = 'This is employee Bio.';

	that.$listContainer = $('<ul class="employeeList"></ul>');

	// build the list table	
	for(var i = 0, len = 10; i<len; i++) {
		var $nameLi = $("<li class='name'><img src='img/arrow.png'>" + that.employeeName + (i + 1) + "</li>"),
			$bioLi = $("<li class='bio'>" + that.employeeBio + (i + 1) + "</li>");
		that.$listContainer.append($nameLi).append($bioLi);
	}

	$('#container').append(that.$listContainer[0]);

	// bind events
	$('li.name').on('click', function(e) {
	
		e.stopPropagation();
		// Get next element
		$(this).next().slideToggle(500).siblings('li.bio').slideUp();
		
		// Get image for active employee
		var img = $(this).children('img');
		
		// Remove the rotate class for all images expect the active
		$('img').not(img).removeClass('rotate');
		
		// Toggle rotate class
		img.toggleClass('rotate');
	});

	$('li.bio').on('click', function(e) {

		e.stopPropagation();
		// Alert the Bio content in the alert box
		alert($(this).text());
	});
}

$(document).ready(function() {

	// there should have an ajax call and do the next in the callback
	// listData mock json data
	var listData,
		employeeListComponent = new EmployeeListComponent();

	employeeListComponent.render(listData);
});