import express from 'express';
import movies from './movies.json';
import _ from 'lodash';

const router = express.Router();

router.get('/', (req, res) => {
	res.render('home', {
		title: 'Movie Recommendations',
	});
});

router.get('/movies', (req, res) => {
	const genre = req.query.genre;
	const minutes = +req.query.minutes;
	const year = +req.query.year;
	
	const matched = movies.filter(function(movie) {
		return movie.genre === genre && 
			movie.year === year &&
			movie.minutes === minutes;
	});
	
	const match = _.sample(matched);
	if (match) return res.json(match);

	return res.status(404).json({ error: 'No matches' });
});

export default router;