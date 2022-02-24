function dateDifference() {
	const dateDebut = dayjs('2021-12-18');
	const dateToday = dayjs();

	return dateToday.diff(dateDebut, 'days');
}

(function updateCount() {
	const el = document.querySelector('#daycount');
	const baseCount = parseInt(el.innerText);
	const datediff = dateDifference();

	if (baseCount < datediff) {
		el.innerText = baseCount + 1;
		setTimeout(updateCount, 25);
	} else {
		el.innerText = datediff;
	}
})();
