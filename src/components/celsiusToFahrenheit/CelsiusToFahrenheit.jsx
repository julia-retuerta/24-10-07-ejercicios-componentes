// - Crea un componente llamado celsiusToFahrenheit que reciba un número de grados celsius, los convierta a fahrenheit y devuelva un h2 con el resultado. La formula es ºF = ºC x 1.8 + 32.

const CelsiusToFahrenheit = ({ celsius }) => {
  const fahrenheit = celsius * 1.8 + 32;
  return (
    <h2>
      {celsius} grados Celsius son {fahrenheit} grados Fahrenheit
    </h2>
  );
};

export default CelsiusToFahrenheit;
