import React from 'react'
import './App.css';
import { CrudTable } from './components/CrudTable';

const pb = {
  id: 1,
    name: "Seiya",
    constellation: "Pegaso",
}
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names:'',
        last_name:'',
        id: '',
        gender:'',
      };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    
    this.setState({
      [name]: value
    });
  }
 
  handleSubmit(event) {
    event.preventDefault();
    let names = this.state.names;
    let last_name = this.state.last_name;
    let id = this.state.id;
    let gender = this.state.gender;
    console.log(names);

    fetch('http://localhost:3001/persona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({names, last_name, id, gender}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
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
              type="text" value={this.state.value} onChange={this.handleInputChange}/>
          </label>
          <label>
            identification:
            <input name="id"
            type="number" value={this.state.value} onChange={this.handleInputChange} />
            <label>
            Sexo:
            <select name= "gender" value={this.state.value} onChange={this.handleInputChange} >
              <option value="-">-</option>
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
      <div>This is my component: <FlavorForm></FlavorForm>
       
      </div>
      
  );
}

export default App;
