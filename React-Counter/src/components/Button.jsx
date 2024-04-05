const Boton = ({ text, onClick, esClick }) => {
    const classNames = {
        true: 'btnClick',
        false: 'btnReiniciar'
    };

      return (
        <button className={classNames[esClick]} onClick={onClick}>
          {text}
        </button>
      );

    // Otra manera de hacerlo usando un condicional ternario
    // return (
    //     <button className={esClick ? 'btnClick' : 'btnReiniciar'} onClick={onClick}>
    //         {text}
    //     </button>
    // );
};

export default Boton;

