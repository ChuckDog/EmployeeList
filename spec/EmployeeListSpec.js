// this is the unit tests

describe('Employee List Spec', function() {

	var employeeListComponent,
		$divContainer;

	beforeEach(function() {

		employeeListComponent = new EmployeeListComponent();
		$divContainer = $('<div id="container"></div>');
		$('body').append($divContainer);
	});

	afterEach(function() {

		employeeListComponent = null;
		$divContainer.remove();
		$divContainer = null;
	});
	
	it('should have render function', function() {

		expect(employeeListComponent.render).toBeDefined();
	});

	it('should have some variables to be defined, after render', function() {

		employeeListComponent.render();
		expect(employeeListComponent.employeeName).toEqual('THis is name.');
		expect(employeeListComponent.employeeBio).toEqual('This is employee Bio.');
		expect(employeeListComponent.$listContainer.hasClass('employeeList')).toEqual(true);
	});

	it('should render ul element, after render', function() {

		employeeListComponent.render();
		expect($('#container ul.employeeList').length).toEqual(1);
	});

	it('should have slide down, when click the name', function() {

		employeeListComponent.render();
		$('ul.employeeList :first-child').trigger('click');
		expect($('ul.employeeList :first-child').next().css('display')).toEqual('list-item');
	});

	it('should slide up, when click the same name twice', function() {

		employeeListComponent.render();
		var $firstNameLi = $('ul.employeeList :first-child');
		$firstNameLi.trigger('click');
		expect($firstNameLi.next().css('display')).toEqual('list-item');
		$firstNameLi.trigger('click');

		// there is a 500ms delay, we use setTimeout simulate.
		setTimeout(function() {

			expect($firstNameLi.next().css('display')).toEqual('none');
		}, 500);
	});

	it('should toggle other Bios, when click one name', function() {

		employeeListComponent.render();
		var $firstNameLi = $('ul.employeeList :first-child'),
			$secondNameLi = $('ul.employeeList :nth-child(3)');
		$firstNameLi.trigger('click');
		expect($firstNameLi.next().css('display')).toEqual('list-item');

		$secondNameLi.trigger('click');
		// there is a 500ms delay, we use setTimeout simulate.
		setTimeout(function() {

			expect($firstNameLi.next().css('display')).toEqual('none');
			expect($secondNameLi.next().css('display')).toEqual('list-item');
		}, 500);
	});
});