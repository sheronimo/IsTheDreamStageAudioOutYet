const dateDifference = () => {
	const dateDebut = dayjs('2021-12-18');
	const dateToday = dayjs();

	return dateToday.diff(dateDebut, 'days');
};

(function updateCount() {
	const el = document.querySelector('#daycount');
	const baseCount = parseInt(el.innerText);

	if (baseCount < dateDifference()) {
		el.innerText = baseCount + 1;
		setTimeout(updateCount, 25);
	} else {
		el.innerText = dateDifference();
	}
})();
