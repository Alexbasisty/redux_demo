const initialState = {
    a: 0,
    b: 0,
    result: 0,
};
//smth
reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NewAValue":
            return { ...state, a: Number(action.newValue) };
        case "NewBValue":
            return { ...state, b: Number(action.newValue) };
        case "Addition":
            return { ...state, result: state.a + state.b };
        case "Multiplication":
            return { ...state, result: state.a * state.b };
        default:
            console.log(`Unknown action ${action.type}`);
            return state;
    }
};

const store = Redux.createStore(reducer);

const inputA = document.querySelector("#first");
const inputB = document.querySelector("#second");

const buttonAdd = document.querySelector("#add");
const buttonMultiply = document.querySelector("#multiply");

handleAUpdate = (event) => {
    const updateAction = {
        type: "NewAValue",
        newValue: inputA.value,
    };

    store.dispatch(updateAction);
};
handleBUpdate = (event) => {
    const updateAction = {
        type: "NewBValue",
        newValue: inputB.value,
    };

    store.dispatch(updateAction);
};

handleAddition = (event) => {
    const addAction = {
        type: "Addition",
    };

    store.dispatch(addAction);
    console.log(store.getState().result);
};

handleMultiplication = (event) => {
    const multiplyAction = {
        type: "Multiplication",
    };

    store.dispatch(multiplyAction);
    console.log(store.getState().result);
};

inputA.addEventListener("change", handleAUpdate);
inputB.addEventListener("change", handleBUpdate);

buttonAdd.addEventListener("click", handleAddition);
buttonMultiply.addEventListener("click", handleMultiplication);
