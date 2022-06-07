import { useState } from "react"

export const aay = [1, 2, 3]

export const Counter = () => {
  const [counter, setCounter] = useState()
  return (
    <p>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>click me</button>
    </p>
  )
}

export const bubbleSort = (a = []) => {
  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < a.length - i; j++) {
      if (a[j] > a[j + 1]) {
        var tmp = a[j];
        a[j] = a[j+1];
        a[j + 1] = tmp;
      }
    }
  }
  return a;
};
