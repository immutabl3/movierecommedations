import './setup';
import $ from 'jquery';
import 'jquery-validation';
import inflation from './inflation';

// TODO: implement
// import myRules from './myRules';
// import myMessages from './myMessages';

const $wrapper = $('#wrapper');
const $form = $('#form1');
const $result = $('#result');
const $spinner = $(`
	<div class="spinner">
		<div class="bounce1"></div>
		<div class="bounce2"></div>
		<div class="bounce3"></div>
	</div>
`);

const startLoading = () => {
	$form.hide();
	$wrapper.append($spinner);
};
const stopLoading = () => {
	$form.show();
	$spinner.remove();
};

$form.submit(function(e) {
	e.preventDefault();

	const userGenre = $('#genre').val().toLowerCase();
	const userYear = $('#year').val();
	const userMinutes = $('#minutes').val();
	const url = `/movies?genre=${userGenre}&year=${userYear}&minutes=${userMinutes}`;

	startLoading();

	fetch(url)
		.then(res => res.json())
		.then(match => {
			stopLoading();
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
				<ul class="comments">
				${match.comments
		.map(comment => {
			return `
				<li>
					${comment}
				</li>
			`;
		})}
				</ul>
			`);
		})
		.catch(() => {
			$result.html(`
				<p>
					No match found	
				</p>
			`);
		});
});
