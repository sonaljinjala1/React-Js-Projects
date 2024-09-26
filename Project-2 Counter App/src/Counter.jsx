const Counter = ({ no, plus, minus, reset }) => {

    return (
        <div className="counter">
            <h1>Counter App</h1>

            <div className="btn-group  d-flex">
                <button className=" btn1     btn btn-success" onClick={() => plus()} style={{ paddingBottom: "40px" }}>+</button>
                <h2> {no}</h2>
                <button className="  btn1     btn btn-success" onClick={() => minus()}>-</button>
            </div>

            <button className="btn btn-success" onClick={() => reset()} style={{ fontSize: "25px ", fontWeight: "600", }}>Reset</button>
        </div>
    )
}

export default Counter;    