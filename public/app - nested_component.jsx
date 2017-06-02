//nested component

var GreeterMessage= React.createClass({
	render: function(){
	return (
		<div>
			<h1>child Heading</h1>
			<p>child greeter message</p>
		</div>
	);
	}	
});

// child component
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
	render: function(){
	return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
	}
});
var Greeter= React.createClass({
//default value
getInitialState: function(){
	return{
		name: this.props.name
	};
},
handleNewName: function (name) {
    this.setState({
      name: name

    });
  },
	render:function(){
	var name= this.state.name;
	var message= this.props.message;
	return(
		<div>
			<h1>Hello {name}</h1> 
			<p>this is component</p>
			<p>{message}</p>
		    <GreeterMessage /> 	  {/* nested component */}
			<GreeterForm onNewName={this.handleNewName}/>	{/* child component */}
		</div>
	);
	}
});
var name="vaishnavi"; //define props
ReactDOM.render(
				<Greeter name={name} message="message from props" />,
				//call component	
				document.getElementById('app')
			);