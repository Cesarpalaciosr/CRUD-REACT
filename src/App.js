import React from 'react'
import './App.css';
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       names:'Cesar',
       last_name:'Palacios',
        id: '2312312',
        gender:'hombre',
      };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = value.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log()
    event.preventDefault();
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="names"
              type="text" value={this.state.value} onChange={this.handleInputChange}/>
          </label>
          <label>
            Last name:
            <input name = "last_name"
              type="text"value={this.state.value} onChange={this.handleInputChange}/>
          </label>
          <label>
            identification:
            <input name="id"
            type="number" value={this.state.value} onChange={this.handleInputChange} />
            <label>
            Sexo:
            <select name= "gender" value={this.state.value} onChange={this.handleInputChange} >
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          </label>
        </form>
      );
    }
  }

function App() {
  return (
      <div>This is my component: <FlavorForm></FlavorForm></div>
      
  );
}

export default App;
