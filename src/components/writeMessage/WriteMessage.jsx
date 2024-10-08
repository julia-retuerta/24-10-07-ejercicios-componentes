// - Crea un componente llamado writeMessage que reciba "name, material, size y note" y devuelva un h2 con el texto. "[name] ha pedido una caja de [material] de tamaño [size]. [note].

const WriteMessage = ({ name, material, size, note }) => {
  return (
    <h2>
      {name} ha pedido una caja de {material} de tamaño {size}. {note}
    </h2>
  );
};

export default WriteMessage;
