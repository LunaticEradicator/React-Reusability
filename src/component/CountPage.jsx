import { useReducer } from "react"
import Button from "./Button"
import Panel from "./Panel"

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const HANDLE_USER = 'handleUser';
const SUBMIT_BTN = 'submit_Btn';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };

        case HANDLE_USER:
            return {
                ...state,
                userValue: action.payload
            };

        case SUBMIT_BTN:
            return {
                ...state,
                count: state.count + state.userValue,
                userValue: 0
            };

        default:
            return state;
    }

    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // }
    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1
    //     }
    // }
    // if (action.type === HANDLE_USER) {
    //     return {
    //         ...state,
    //         userValue: action.payload
    //     }
    // }
    // if (action.type === SUBMIT_BTN) {
    //     return {
    //         ...state,
    //         count: state.count + state.userValue,
    //         userValue: 0
    //     }
    // }
    // return state
}


export default function CountPage({ defaultValue }) {
    const [state, dispatch] = useReducer(reducer, {
        count: defaultValue,
        userValue: 0
    })

    console.log(state)
    // const [count, setCount] = useState(defaultValue)
    // const [userCount, setUserCount] = useState('')

    const handleIncrement = () => {
        // setCount(prevCount => prevCount + 1)

        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const handleDecrement = () => {
        // setCount(prevCount => prevCount - 1)
        dispatch({
            type: DECREMENT_COUNT
        });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0; // parseInt('') => Nan; to avoid this
        dispatch({
            type: HANDLE_USER,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        // setCount(count + parseInt(userCount)) // 2 states
        event.preventDefault()
        dispatch({
            type: SUBMIT_BTN
        })
    }

    return (
        <Panel style={{ padding: "20px" }} >
            Count Value: {state.count}
            <div style={{ display: "flex" }}>
                <Button secondary rounded onClick={handleIncrement} > Increment</Button>
                <Button secondary rounded onClick={handleDecrement} > Decrement</Button>
            </div>
            <form action="">
                <input
                    onChange={handleChange}
                    value={state.userValue || ''} // to hide if value is 0 
                    type="number"
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </Panel >
    )
}