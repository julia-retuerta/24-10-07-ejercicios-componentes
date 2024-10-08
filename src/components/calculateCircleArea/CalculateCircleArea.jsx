// - Crea un componente llamado calculateCircleArea que calcule el área de un círculo pasándole el radio y devuelva un h2 con el resultado.

const CalculateCircleArea = ({ radius }) => {
  const area = Math.PI * Math.pow(radius, 2);
  return <h2>El área del círculo es {area}</h2>;
};

export default CalculateCircleArea;
