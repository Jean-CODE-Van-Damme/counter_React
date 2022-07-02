const Button = ({ counter, setCounter }) => {
  return (
    <>
      {/* <p>{counter}</p>
      <section>
        <div className="decrement">
          {counter !== 0 && (
            <button onClick={() => setCounter(counter - 1)}>-</button>
          )}
        </div>
        <div className="increment">
          {counter < 10 && (
            <button onClick={() => setCounter(counter + 1)}> +</button>
          )}
        </div>
      </section>
      <div className="reset">
        <button onClick={() => setCounter((counter = 0))}> Reset </button>
      </div> */}

      <p>{counter}</p>
      <section>
        <div className="decrement">
          {counter !== 0 ? (
            <button onClick={() => setCounter(counter - 1)}>-</button>
          ) : (
            <button style={{ opacity: 1 }}></button>
          )}
        </div>
        <div className="increment">
          {counter < 10 ? (
            <button onClick={() => setCounter(counter + 1)}>+</button>
          ) : (
            <button style={{ opacity: 1 }}></button>
          )}
        </div>
      </section>
      <div className="reset">
        <button onClick={() => setCounter((counter = 0))}> Reset </button>
      </div>

      {/* <p>{counter}</p>
      <section>
        <div className="decrement">
          {counter !== 0 ? (
            <button onClick={() => setCounter(counter - 1)}>-</button>
          ) : (
            <button style={{ visibility: "hidden" }}></button>
          )}
        </div>
        <div className="increment">
          {counter < 10 ? (
            <button onClick={() => setCounter(counter + 1)}>+</button>
          ) : (
            <button style={{ visibility: "hidden" }}></button>
          )}
        </div>
      </section>
      <div className="reset">
        <button onClick={() => setCounter((counter = 0))}> Reset </button>
      </div> */}
    </>
  );
};

export default Button;
