export function setupCounter(element) {
  let counter = 0;
  const el = element;
  const setCounter = (count) => {
    counter = count;
    el.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

// export default {};
