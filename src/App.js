import React, {Component, useEffect, useState}from 'react'
import './App.css';
import { CrudTable } from './components/CrudTable';
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names:'',
        last_name:'',
        id: '',
        gender:'',
        merchants:[],
      };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){/*
    var merchants = [];
  var setMerchants = [];
  [merchants, setMerchants] = useState(false);*/
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
              this.setState({merchants: data})
              /*setMerchants(data);
              console.log(data);
                */
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

        <CrudTable merchants = {this.state.merchants}></CrudTable>
      </div>);
    }
  }
function App() {/*
  var merchants = [];
  var setMerchants = [];
  [merchants, setMerchants] = useState(false);
  
  /*state = {
    merchants:[]
  }*//*
    let rows = useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3001')
            .then(console.log("conecte"))
            .then(response => {
                return response.json();
            })

            .then(data => {
                setMerchants(data);
                console.log(data);
                
            })
            
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);*/
  return (
      <div>
      This is my component: <FlavorForm/>

        <div>
        </div>
      </div>
      
  );
}

export default App;
