import './setup';
import $ from 'jquery';
import 'jquery-validation';
import _ from 'lodash';
import movies from './movies.json';
import inflation from './inflation';
import madeYear from './madeYear';
// TODO: implement
// import myRules from './myRules';
// import myMessages from './myMessages';

const $form = $('#form1');
const $result = $('#result');

$form.submit(function(e) {
	e.preventDefault();
	
	const userGenre = $('#genre').val().toLowerCase();
	// TODO: implement
	// const userDecade = $('#decade').val();
	const userMinutes = $('#minutes').val();
	
	const matched = movies.filter(function(movie) {
		return movie.genre === userGenre && madeYear(movie) || movie.minutes === userMinutes;
	});
	
	const match = _.sample(matched);
	console.log(match);
	if (!match) return $result.html('No matches');

	$result.html(`
		<p>
			${match.title}
			<br>
			${match.genre}
			<br>
			${match.minutes} minutes long
			<br>
			Inflated Box Office Income: $${inflation(match).toLocaleString()}
		</p>
	`);
});