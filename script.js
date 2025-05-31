const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", { id: "heading" }, "I'm h1 Tag"),
            React.createElement("h2", { id: "heading2" }, "I'm h2 Tag")
        ]
    ), React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", { id: "heading" }, "I'm h1 Tag"),
            React.createElement("h2", { id: "heading2" }, "I'm h2 Tag")
        ]
    )]
);

//JSX






// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello From Chandra"
// );
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);