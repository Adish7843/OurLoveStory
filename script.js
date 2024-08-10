document.getElementById('yesButton').addEventListener('click', function() {
    showPopUp('Kisses', 'kisses.png');
    showPopUp('Roses', 'roses.png');
    setTimeout(function() {
        window.location.href = 'letter.html';
    }, 2000);
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = 'think-again.html';
});

function showPopUp(text, imgSrc) {
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerHTML = `<img src="${imgSrc}" alt="${text}">`;
    document.body.appendChild(popUp);
}
