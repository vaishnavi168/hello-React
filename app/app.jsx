var React = require('react');
var ReactDOM = require('react-dom');
var objOne={
	name:'vaishnavi',
	surname:'Aher'
};
var objTwo={
	location:'nashik',
	...objOne
};
console.log(objTwo);

ReactDOM.render(
 <h1>Hello..!</h1>,
  document.getElementById('app')
);
