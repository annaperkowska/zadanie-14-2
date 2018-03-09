
var movies = [
	{
		id: 1,
		title: 'Pulp Fiction',
		desc: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		year: '1994',
		poster: './pulpfiction.jpg'
	},
	{
		id: 2,
		title: 'Inglourious Baterds',
		desc: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
		year: '2009',
		poster: './inglorious.jpg'
	},
	{
		id: 3,
		title: 'Kill Bill',
		desc: "The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.",
		year: '2003',
		poster: './killbill.jpg'
	},
	{
		id: 4,
		title: 'Django Unchained',
		desc: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
		year: '2012',
		poster: './django.jpg'
	},
	{
		id: 5,
		title: 'The Hateful Eight',
		desc: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
		year: '2015',
		poster: './hateful.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster})
	);
});

var element =
	React.createElement('div', {},
    	React.createElement('h1', {}, "Tarantino's movies"),
    	React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));