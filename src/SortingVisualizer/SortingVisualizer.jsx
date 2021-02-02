// import { render } from "@testing-library/react";
import React from "react";
import * as sortingAlgorithms from  "./sortingAlgorithms.js"
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 275; i++) {
      array.push(randomIntFromInterval(5, 630));
    }
    this.setState({ array });
  }

  bubbleSort() {}

  quickSort() {}

  mergeSort() {
    const javaScriptSortedArray = this.state.array
      .slice() 
      .sort((a, b) => a - b);
    const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

    console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  }

  heapSort() {}

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <br />
        <button onClick={() => this.resetArray()}>New Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.quickSort()}>Quicksort</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>
            Test Sorting Algorithms
        </button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(arrayOne[i], arrayTwo[i]);
      return false;
    }
  }
  return true;
}
