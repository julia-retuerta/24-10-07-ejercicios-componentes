import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
  return (
    <>
      <SayHello name='María' />
      <CalculateSquareArea side={4} />
      <CalculateTriangleArea base={3} height={5} />
      <CalculateCircleArea radius={7} />
      <CelsiusToFahrenheit celsius={17} />
      <FahrenheitToCelsius fahrenheit={80} />
      <TotalPrice price={20} />
      <WriteMessage name='Juan' material='tornillos' size='mediano' note='Muchas gracias' />
    </>
  );
};

export default App;
