const cardText = document.querySelectorAll('.card-text');
console.log(cardText);

let cardArray = Array.from(cardText);

let result = cardArray.filter(function (item, index, array) {
	if (item.offsetHeight >= 50) {
		item.parentElement.classList.toggle('hide');
		console.log(item);
		item.insertAdjacentHTML(
			"afterend",
			`<a href=""# class="card__btn-read-more">
				Show more...
			</a>`
		);

	}
});

const lesson = document.querySelector('.cart__block');

lesson.addEventListener("click", function (event) {
	event.preventDefault();
	if (event.target.closest('.card__btn-read-more')) {
		lesson.classList.remove("hide");
		event.target.parentElement.classList.toggle('hide');
	}
});