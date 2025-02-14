function updateTimePassed() {
    const startDate = new Date('0000-00-00'); 
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const seconds = Math.floor(timeDiff/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    const years = Math.floor(days/365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays/30);
    const finalDays = remainingDays % 30

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = finalDays;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

setInterval(updateTimePassed, 1000);

updateTimePassed();

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseImage = document.getElementById('responseImage');
const responseText = document.getElementById('responseText');

yesButton.addEventListener('click', () => {
    responseImage.src = 'pathToYourImage';
    responseImage.style.display = 'block';
    responseText.style.display = 'block'
});

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left =  `${x}px`;
    noButton.style.top =  `${y}px`;
});