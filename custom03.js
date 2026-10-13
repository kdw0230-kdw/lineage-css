$(document).ready(function () {
    const fleftDiv = document.querySelector('.fleft');
        if (fleftDiv) {
            if (!fleftDiv.innerHTML.includes('GK Entertainment')) {
                const pElement = document.createElement('p');
                pElement.textContent = 'Copyright GK Design';
                fleftDiv.appendChild(pElement);
            }
        } else {
            window.location.href = 'https://www.naver.com';
        }
});
