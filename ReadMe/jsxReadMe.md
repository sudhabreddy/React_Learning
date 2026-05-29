const heading = React.createElement("h1", {id: "heading"}, "Namaste React"); // react code

const heading = <h1 id="heading"> Namaste react </h1>

since creating a react element like above is complicated, we use JSX which is html like syntax.
JSX combines html and javascript together in more readable way.
JSX is not part of react, but used to build the react code.

JSX is not understood by JS engine. it understands only ES6 standards only.

Parcel uses Babel package to transpile JSX code to React code and then JS engine receives code which it can understand

