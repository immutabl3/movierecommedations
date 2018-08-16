export default function inflation({ boxOffice, year }) {
	if (year <= 1940) return (boxOffice / 0.25) * 8;
	if (year >= 1941 && year <= 1950) return (boxOffice / 0.30) * 8;
	if (year >= 1951 && year <= 1960) return (boxOffice / 0.50) * 8;
	if (year >= 1961 && year <= 1970) return (boxOffice / 1.00) * 8;
	if (year >= 1971 && year <= 1980) return (boxOffice / 2.00) * 8;
	if (year >= 1981 && year <= 1990) return (boxOffice / 3.75) * 8;
	if (year >= 1991 && year <= 2000) return (boxOffice / 4.50) * 8;
	if (year >= 2001 && year <= 2010) return (boxOffice / 6.75) * 8;
	return boxOffice;
};