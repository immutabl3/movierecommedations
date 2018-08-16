export default function madeYear({ year }) {
	if (year <= 1939) return 1930;
	if (year >= 1940 && year <= 1949) return 1940;
	if (year >= 1950 && year <= 1959) return 1950;
	if (year >= 1960 && year <= 1969) return 1960;
	if (year >= 1970 && year <= 1979) return 1970;
	if (year >= 1980 && year <= 1989) return 1980;
	if (year >= 1990 && year <= 1999) return 1990;
	if (year >= 2000 && year <= 2009) return 2000;
	if (year >= 2010 && year <= 2019) return 2010;
};