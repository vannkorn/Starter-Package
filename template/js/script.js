/**
 *	PROJECT			:		Project Name
 *	DEVELOPER		:		Glean Team
 *	DEVELOPER URI	:		http://glean.net
 *	DATE			:		10-February-2015
 */
 
$( function() {
	var ProjectName = {
		i : 2,
		init: function() {
			this.test();
		},
		
		test: function() {
			console.log('The value of i is: ' + this.i );
		}
	}
	
	$( document ).ready( function() {
		ProjectName.init();
	});
});