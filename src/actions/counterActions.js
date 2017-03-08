export function increment() {
  return {
    type: "INCREMENT"
  };
}

export function increment5(value) {
  return {
    type: "INCREMENT_CUSTOM",
    payload: parseInt(value)
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

export function reset() {
  return {
    type: "RESET"
  };
}
