const CountButton = ({onConfirm, maxQuantity}) => {
    return (
      <>
        Disponible: {maxQuantity}
        <button onClick={onConfirm}>Agregar al carrito</button>
      </>
    )
  }
  
  const CountInput = ({onConfirm, maxQuantity}) => {
    return (
      <>
        Disponible: {maxQuantity}
        <input type='button' onClick={onConfirm} value='Agregar al carrito' />
      </>
    )
  }
  
  const type = ''
  const Intercambiabilidad  = () => {
    const Count = type === 'button' ? CountButton : CountInput;
  
    const handleConfirm = (quantity) => {
      console.log(quantity);
    }
  
    return (
      <>
        <Count onConfirm={() => handleConfirm(10)} maxQuantity={10} />
      </>
    );
  }
  export default Intercambiabilidad ;