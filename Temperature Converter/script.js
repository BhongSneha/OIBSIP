function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        alert('Please enter a valid number for Celsius temperature.');
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    const resultElement = document.getElementById('result');
    resultElement.innerText = `${celsius}°C is equal to ${fahrenheit}°F`;
}
