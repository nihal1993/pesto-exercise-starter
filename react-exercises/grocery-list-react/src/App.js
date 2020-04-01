import React from 'react';
import './App.css';
const itemsArray = ['milk', 'icecream', 'pork'];
class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      itemsArray,
      value:'',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = (e) => {
    if(this.state.itemsArray!== null && this.state.itemsArray.indexOf(e.target.elements.grocery.value.toLowerCase())!== -1){
      this.setState({error:'already exist'}); 
    }else{
      this.setState({error:null}); 
      this.setState({value:e.target.elements.grocery.value.toLowerCase()}); 
      this.setState(state => {
        const itemsArray = state.itemsArray.concat(state.value).sort();
        return {
          itemsArray,
          value: '',
        };
      });
    }
  
    document.getElementById("formId").reset();
    e.preventDefault();
    
  };

  onClearItem = () => {
    this.setState({ itemsArray: [] });
  };
  onResetArray = () => {
    this.setState({ itemsArray });
  };
  
  

  render() {
    return (
      <div>
      <div className="Heading">
        Grocery List Manager
      </div>
      <div className="Right-corner">
      {this.state.error && <p className="error">{this.state.error}</p>}
        <form id="formId" onSubmit={this.handleSubmit}>
            <input type="text" name="grocery" placeholder="Add Items" />
            <input type="submit" value="Add" />
            <button type="button" onClick={this.onClearItem}>
              Clear list
            </button>
            <button className="resetbtn" type="button" onClick={this.onResetArray}>
              Reset Array
            </button>
        </form>
      </div>
      <div className="Grocey-box">
        <ul>
          {this.state.itemsArray.map(item => (
              <li className="Grocey-list" key={item}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
    );
  }
}
function App() {
  return (
    <div className= "Outer-Box">
        <ItemList/>
    </div>
   
  );
}

export default App;

