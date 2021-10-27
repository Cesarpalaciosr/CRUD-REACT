import React from 'react'
import './App.css';
import { CrudTable } from './components/CrudTable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        names:'',
        last_name:'',
        id: '',
        gender:'',
        person:[],
      };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

      fetch('http://localhost:3001')
            .then(console.log("conecte"))
            .then(response => {
              return response.json();
            })
            .catch(error => {
              console.log(error)
            })
            
            .then(data => {
              console.log(data)
              this.setState({person: data})
            })
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
        //alert(data);
      });
  }

    render() {
      return (
        <div>
        <header>
          <img className="header_img" src="https://pngimg.com/uploads/pokemon/pokemon_PNG148.png" alt="imagen de pikachu"/>
        </header>
        <section className="content">

          <div className= "container">
          <div className = "brand-tittle">form</div>
            <form onSubmit={this.handleSubmit}>
              <div className = "inputs">
                <label>
                  Name:
                  <input name="names" type="text" value={this.state.value} onChange={this.handleInputChange}/>
                </label>
                <label>
                  Last name:
                  <input name = "last_name" type="text" value={this.state.value} onChange={this.handleInputChange}/>
                </label>
                <label>
                  identification:
                  <input name="id" type="number" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <label>
                  Sex:
                  <select className="custom-select" name= "gender" value={this.state.value} onChange={this.handleInputChange} >
                    <option value="-">-</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                  </select>
                </label>
                <input className="input-Submit" type="submit" value="Submit" />
              </div>
            </form>
        </div>
        </section>
        <CrudTable person = {this.state.person}></CrudTable>
      <footer>
          Soy el footer
      </footer>
      </div>
      );
    }
  }
function App() {
  return (
        <FlavorForm/>
  );
}

export default App;
