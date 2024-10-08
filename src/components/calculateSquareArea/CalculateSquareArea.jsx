// - Crea un componente llamado calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado y devuelva un h2 con el resultado.

const CalculateSquareArea = ({ side }) => {
  const area = side * side;
  return <h2>El área del cuadrado es {area}</h2>;
};

export default CalculateSquareArea;
