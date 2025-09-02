const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: 'child' }, [React.createElement('h1', {}, "i am child tag"),
    React.createElement('h2',{}, "i am sibling")
]))

console.log(parent);


// const heading = React.createElement("h1", { id: "abc" }, "hello world form react ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
        
