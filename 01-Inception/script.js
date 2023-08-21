// Create the Structure

// <div id='parent'>
//   <div id="child">
//     <h1>I am an H! TAG</h1>
//     <h2>I am an H! TAG</h2>
//   </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  ,
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement(
        "h1",
        { class: "heading1" },
        "I am a React Heading One"
      ),
      React.createElement(
        "h2",
        { class: "heading2" },
        "I am a React Heading Two"
      ),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement(
        "h1",
        { class: "heading1" },
        "I am a React Heading One"
      ),
      React.createElement(
        "h2",
        { class: "heading2" },
        "I am a React Heading Two"
      ),
    ]),
  ],
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
