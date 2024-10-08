// - Crea un componente llamado calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura y devuelva un h2 con el resultado.

const CalculateTriangleArea = ({ base, height }) => {
  const area = (base * height) / 2;
  return <h2>El área del triángulo es {area}</h2>;
};

export default CalculateTriangleArea;
