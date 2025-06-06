async function searchWeather() {
    const city = document.getElementById('city-input').value;
    const result = document.querySelector('.result');

    if (city === '') {
        result.innerHTML = '<p>Por favor, coloque um nome de cidade válido.</p>';
        return;
    }

    const apiKey = "SUA_API_KEY_AQUI"; // Substitua pela sua chave de API no OpenWeather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    try {
        const reposta = await fetch(url);
        if (!reposta.ok) {
            throw new Error('Cidade não encontrada');
        }

        const dados = await resposta.json();

        result.innerHTML = `
            <h2>Clima em ${dados.name}, ${dados.sys.country}</h2>
            <p>Temperatura: ${dados.main.temp}°C</p>
            <p>Condição: ${dados.weather[0].description}</p>
            <p>Umidade: ${dados.main.humidity}%</p>
            <p>Vento: ${dados.wind.speed} m/s</p>
            `;
    } catch (error) {
        result.innerHTML = `<p>${error.message}</p>`;
    }
}