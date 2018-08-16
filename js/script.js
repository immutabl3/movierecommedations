// JavaScript Document
$(document).ready(function(e){
	
	function init() {
	
	// Object containing the validation rules
	var myRules = 
	{
		userGenre:			// The "name" attribute of the form control
		{
			required: true		// Make this field required
		},
  		userDecade:
		{			// Set the minimum value
			required: true,		// Only digits are allowed
			digits: true,
			min: 4
		},
		userMinutes:
		{			// Set the minimum value
			required: true,		// Only digits are allowed
			digits: true,
			min: 3
		}
	};
	
	// Object containing the error messages
	var myMessages =
	{
		userGenre:		// The "name" attribute of the form control
		{
			required: "Don't Leave This Blank!" // The message to display
			
		},
		userDecade:
		{
			required: "Don't Leave This Blank!",		// Only digits are allowed
			digits: "Digits Only",
			min: "Must be exactly 4 digits"
		},
		userMinutes:
		{
			required: "Don't Leave This Blank!",		// Only digits are allowed
			digits: "Digits Only",
			min: "Must be greater than 2 digits"
		}
	};
	
	// Object containing the entire validation configuration
	var config =
		{
			submitHandler: e,
			rules: myRules,
			messages: myMessages
		};

	
	// Pass the config object to the form's validate() method
	$("#form1").validate(config);
}
	
$("#form1").submit(function(e){
		
		e.preventDefault();
		
		// array to store movies
		var movies = [];
		var userGenre = $('#genre').val();
		var userDecade = $('#decade').val();
		var userMinutes = $('#minutes').val();
		var matched = [];
		
		// add movies to array
		movies.push({title: 'Mad Max Fury Road', genre: 'Action', year: 2015, minutes: 120, boxOffice: 153629485});
		movies.push({title: 'The Hateful Eight', genre: 'Western', year: 2015, minutes: 187, boxOffice: 54116191});
		movies.push({title: 'Paul', genre: 'Comedy', year: 2011, minutes: 104, boxOffice: 37371385});
		movies.push({title: 'Seven', genre: 'Crime', year: 1995, minutes: 127, boxOffice: 100125340});
		movies.push({title: 'The Shining', genre: 'Horror', year: 1980, minutes: 146, boxOffice: 44017374});
		movies.push({title: 'Mean Streets', genre: 'Drama', year: 1973, minutes: 112, boxOffice: 3100000});
		movies.push({title: 'Titanic', genre: 'Drama', year: 1997, minutes: 194, boxOffice: 658672302});
		movies.push({title: 'The Waterboy', genre: 'Comedy', year: 1998, minutes: 90, boxOffice: 161487252});
		movies.push({title: 'War of the Worlds', genre: 'Sci-Fi', year: 2005, minutes: 116, boxOffice: 234277056});
		movies.push({title: 'Once Upon a Time in the West', genre: 'Western', year: 1968, minutes: 175, boxOffice: 5321508});
		movies.push({title: 'Lord of the Rings: The Two Towers', genre: 'Fantasy', year: 2002, minutes: 179, boxOffice: 340478898});
		movies.push({title: 'The Thing', genre: 'Horror', year: 1982, minutes: 109, boxOffice: 13782838});
		movies.push({title: 'Indiana Jones and The Temple of Doom', genre: 'Adventure', year: 1984, minutes: 118, boxOffice: 179870271});
		movies.push({title: '16 Blocks', genre: 'Action', year: 2006, minutes: 102, boxOffice: 36883539});
		movies.push({title: 'Predestination', genre: 'Thriller', year: 2014, minutes: 97, boxOffice: 4300000});
		movies.push({title: 'Zodiac', genre: 'Thriller', year: 2007, minutes: 157, boxOffice: 33048353});
		movies.push({title: 'The Great Escape', genre: 'Action', year: 1963, minutes: 172, boxOffice: 11744471});
		
		for (var i = 0; i < movies.length; i++) {
			if (movies[i].genre == userGenre &&  madeYear(movies[i]) || movies[i].minutes == userMinutes) {
				matched.push(movies[i]);
				
			}
		}
		
		// output matched movie
		//for(var j = 0; j < matched.length; j++){
		var j = (Math.floor((Math.random() * matched.length)));
		$('#result').html('<p>' + matched[j].title + '<br>' + matched[j].genre + '<br>' + matched[j].minutes + ' minutes long' + '<br>' + 'Inflated Box Office Income: $' + inflation(matched[j]).toLocaleString() + '</p>');
		//}
		
		console.log(matched[j]);
		
		function inflation(movie){
			var inflation;
			var boxOffice = movie.boxOffice;
			var boxYear = movie.year;
			
			if(boxYear <= 1940){
				inflation = (boxOffice / 0.25) * 8;
			}else if(boxYear >= 1941 && boxYear <= 1950){
				inflation = (boxOffice / 0.30) * 8;
			}else if(boxYear >= 1951 && boxYear <= 1960){
				inflation = (boxOffice / 0.50) * 8;
			}else if(boxYear >= 1961 && boxYear <= 1970){
				inflation = (boxOffice / 1.00) * 8;
			}else if(boxYear >= 1971 && boxYear <= 1980){
				inflation = (boxOffice / 2.00) * 8;
			}else if(boxYear >= 1981 && boxYear <= 1990){
				inflation = (boxOffice / 3.75) * 8;
			}else if(boxYear >= 1991 && boxYear <= 2000){
				inflation = (boxOffice / 4.50) * 8;
			}else if(boxYear >= 2001 && boxYear <= 2010){
				inflation = (boxOffice / 6.75) * 8;
			}else{
				inflation = boxOffice;
			}
			
			return inflation;
		}
		
		
		function madeYear(decade){
			
			var filmYear = decade.year;
			var filmDecade;
			
			if(filmYear <= 1939){
				filmDecade = 1930;
			}else if(filmYear >= 1940 && filmYear <= 1949){
				filmDecade = 1940;
			}else if(filmYear >= 1950 && filmYear <= 1959){
				filmDecade = 1950;
			}else if(filmYear >= 1960 && filmYear <= 1969){
				filmDecade = 1960;
			}else if(filmYear >= 1970 && filmYear <= 1979){
				filmDecade = 1970;
			}else if(filmYear >= 1980 && filmYear <= 1989){
				filmDecade = 1980;
			}else if(filmYear >= 1990 && filmYear <= 1999){
				filmDecade = 1990;
			}else if(filmYear >= 2000 && filmYear <= 2009){
				filmDecade = 2000;
			}else if(filmYear >= 2010 && filmYear <= 2019){
				filmDecade = 2010;
			}
			
			return filmDecade;
		}
		
		
		
	});
				  
				  
				  
				  
});