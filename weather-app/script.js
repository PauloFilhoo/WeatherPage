async function searchWeather() {
    const city = document.getElementById('city-input').value;
    const result = document.querySelector('.result');

    if (city === '') {
        result.innerHTML = '<p>Por favor, coloque um nome de cidade válido.</p>';
        return;
    }


}