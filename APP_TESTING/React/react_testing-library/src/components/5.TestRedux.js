import { connect } from "react-redux";





const TestRedux = ({count, dispacth}) => {
    const increment = () => dispacth({type: 'INC'});
    const decrement = () => dispacth({type: 'DEC'});
    return (
        <div>
            <h1 data-testid="counter">{count}</h1>
            <button data-testid="button-up" onClick={increment}>increment </button>
            <button data-testid="button-down" onClick={decrement}>decrement</button>
        </div>
    )
}

export default connect(state => ({count: state.count}), null) (TestRedux);