const num = document.getElementById('number');
const btn = document.getElementById('generate');

const randomNum = () => {
	return Math.floor(Math.random() * 1000);
};

btn.addEventListener('click', () => {
	num.innerHTML = randomNum();
});
