class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculated: false,
      equation: "",
      currentDisplay: "0" };

    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
    this.append = this.append.bind(this);
  }

  calculate() {
    // Check that user is not clicking 'equals' while equation is 0 or empty

    if (this.state.equation != "" && this.state.equation != "0") {

      let equation = this.state.equation;

      // Check if leading zero needs to be removed
      if (this.state.equation[0] == "0" && this.state.equation[1] != ".") {
        equation = equation.slice(1, equation.length);
      }

      let result = 0;
      result = Function("return " + equation)();

      // Round down to 6 decimal places if float is too long
      if (
      result.toString().includes(".") &&
      result.toString().split(".")[1].length > 6)
      {
        result = parseFloat(result.toFixed(6));
      }

      this.setState({
        calculated: true,
        currentDisplay: result });

    }
  }

  clear() {
    this.setState({
      equation: "",
      currentDisplay: "0" });

  }

  // Function to add numbers to current equation
  append(value) {
    let appended;

    // Does not allow zeroes at start of equation
    if (
    value == "0" && (
    this.state.equation == "" || this.state.equation == "0"))
    {
      return;
    }



    // if (this.state.equation === "0" && value !== ".") {
    //   this.setState({
    //     equation: value,
    //     currentDisplay: value
    //   });
    // }

    // Does not allow consecutive decimals
    if (value == "." && this.state.currentDisplay.includes(".")) {
      return;
    }

    const operators = ["*", "/", "+", "-"];
    //  Check if there is a result in memory. Use that in current equation if so.
    if (this.state.calculated) {
      let pastResult = this.state.currentDisplay;
      appended = pastResult + value;
      this.setState({
        calculated: false,
        equation: appended,
        currentDisplay: value });

      // Overwrite operator if consecutive operator is pressed
    } else if (operators.includes(value)) {
      // If last character in equation is also an operator, and the current value is not minus
      if (
      operators.includes(
      [...this.state.currentDisplay][
      [...this.state.currentDisplay].length - 1]) &&


      value != "-")
      {
        appended = this.state.equation;

        if (operators.includes(appended[appended.length - 2])) {
          appended = appended.slice(0, appended.length - 2) + value;
        } else {
          [...appended][appended.length - 1] = value;
          appended = appended.slice(0, appended.length - 1) + value;
        }
      } else {
        appended = this.state.equation + value;
      }
      this.setState({
        equation: appended,
        currentDisplay: value });

    } else if (
    operators.includes(
    [...this.state.currentDisplay][
    [...this.state.currentDisplay].length - 1]))


    {
      appended = this.state.equation + value;
      let current = value;
      this.setState({
        equation: appended,
        currentDisplay: current });

    } else {
      appended = this.state.equation + value;
      let current = value;

      if (this.state.currentDisplay != "0") {
        current = this.state.currentDisplay + value;
      }

      this.setState({
        equation: appended,
        currentDisplay: current });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "display-container" }, /*#__PURE__*/
      React.createElement("p", { id: "all" }, this.state.equation), /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.currentDisplay)), /*#__PURE__*/

      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("button", { className: "button", id: "clear", onClick: this.clear }, "CE"), /*#__PURE__*/


      React.createElement("button", {
        className: "button operation",
        id: "multiply",
        onClick: () => {
          this.append("*");
        } }, "x"), /*#__PURE__*/



      React.createElement("button", {
        className: "button operation",
        id: "divide",
        onClick: () => {
          this.append("/");
        } }, "\xF7"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "seven",
        onClick: () => {
          this.append("7");
        } }, "7"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "eight",
        onClick: () => {
          this.append("8");
        } }, "8"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "nine",
        onClick: () => {
          this.append("9");
        } }, "9"), /*#__PURE__*/



      React.createElement("button", {
        className: "button operation",
        id: "add",
        onClick: () => {
          this.append("+");
        } }, "+"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "four",
        onClick: () => {
          this.append("4");
        } }, "4"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "five",
        onClick: () => {
          this.append("5");
        } }, "5"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "six",
        onClick: () => {
          this.append("6");
        } }, "6"), /*#__PURE__*/



      React.createElement("button", {
        className: "button operation",
        id: "subtract",
        onClick: () => {
          this.append("-");
        } }, "-"), /*#__PURE__*/



      React.createElement("button", { className: "button", id: "equals", onClick: this.calculate }, "="), /*#__PURE__*/


      React.createElement("button", {
        className: "button",
        id: "one",
        onClick: () => {
          this.append("1");
        } }, "1"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "two",
        onClick: () => {
          this.append("2");
        } }, "2"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "three",
        onClick: () => {
          this.append("3");
        } }, "3"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "zero",
        onClick: () => {
          this.append("0");
        } }, "0"), /*#__PURE__*/



      React.createElement("button", {
        className: "button",
        id: "decimal",
        onClick: () => {
          this.append(".");
        } }, "."))));






  }}


ReactDOM.render( /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Calculator, null)),

document.getElementById("root"));