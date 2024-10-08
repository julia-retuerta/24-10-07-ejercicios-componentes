// - Crea un componente totalPrice que reciba un precio, le sume el IVA del 21% y devuelva un h2 con el resultado.

const TotalPrice = ({ price }) => {
  const iva = (price * 21) / 100;
  const priceWithIva = price + iva;
  return <h2>El precio final con IVA es {priceWithIva} €</h2>;
};

export default TotalPrice;
