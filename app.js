function dateDifference() {
	const dateDebut = dayjs('2021-12-18');
	const dateRelease = dayjs('2022-06-13');

	return dateRelease.diff(dateDebut, 'days');
}

function updateCount() {
	const dayCountElement = document.querySelector('#daycount');
	const dayCount = dateDifference();
	console.log(dayCount);

	dayCountElement.innerText = dayCount;
}

updateCount();
