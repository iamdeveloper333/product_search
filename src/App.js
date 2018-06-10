import React, { Component } from 'react';
import axios from 'axios';
import {Navbar,NavItem,Dropdown,Button} from 'react-materialize';

import HomePage from './Pages/HomePage';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products:[],
      filtered:[],
      facets:[],
      keyword:'',
      genderFilter:'men',
      index:0,
      limit:100,
      trueDealFilter:false,
      apiKey:'e3ebd9fdf9704775c7fd6bb4f20e1798' 
    }
    this.searchProduct=this.searchProduct.bind(this);
    this.men=this.men.bind(this);
    this.women=this.women.bind(this);
      this.boys=this.boys.bind(this);
    this.girls=this.girls.bind(this);
  }

  componentDidMount(){
      axios.get('http://api.shortlyst.com/v1/products?index=0&limit=12&q=boots&trueDealFilter=false&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798 ')
            .then(response=>{
              this.setState({products:response.data.productList,filtered:response.data.productList});
              console.log(response.data);
            });
  }

   searchProduct(event){
        const keyword = event.target.value;
        console.log("dss",keyword)
        if(keyword !== ''){
            const list = this.state.products.filter((item)=>{
               return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            })
            this.setState({ 
                filtered:list,
                keyword
            })
        }else{
            this.setState({
                filtered:this.state.products,
                keyword
            })
        }
        console.log("dssdfxg",this.state.filtered)
    }

men(){
  axios.get('http://api.shortlyst.com/v1/products?index=0&limit=12&q=boots&genderFilter=men&trueDealFilter=false&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798 ')
            .then(response=>{
              this.setState({products:response.data.productList,filtered:response.data.productList});
              console.log(response.data);
            });
}
women(){
  axios.get('http://api.shortlyst.com/v1/products?index=0&limit=22&q=boots&genderFilter=women&trueDealFilter=false&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798 ')
            .then(response=>{
              this.setState({products:response.data.productList,filtered:response.data.productList,facets:response.data.facets});
              console.log(response.data);
            });
}
boys(){
  axios.get('http://api.shortlyst.com/v1/products?index=0&limit=12&q=boots&genderFilter=boys&trueDealFilter=false&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798 ')
            .then(response=>{
              this.setState({products:response.data.productList,filtered:response.data.productList});
              console.log(response.data);
            });
}
girls(){
  axios.get('http://api.shortlyst.com/v1/products?index=0&limit=22&q=boots&genderFilter=girls&trueDealFilter=false&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798 ')
            .then(response=>{
              this.setState({products:response.data.productList,filtered:response.data.productList,facets:response.data.facets});
              console.log(response.data);
            });
}
  render() {
    return (
      <div>
      
          <div className="header container py-3 h3 text-center">
                Shopalyst
          </div>
          <input type="text" class="form-control" 
                        value={this.state.keyword} 
                        onChange={this.searchProduct}
                        placeholder="Search for a Products"
                        />
<Navbar right>
  <NavItem onClick={this.men}>Men</NavItem>
  <NavItem onClick={this.women}>Women</NavItem>
  <NavItem onClick={this.boys}>Boys</NavItem>
  <NavItem onClick={this.girls}>Girls</NavItem>
</Navbar>
               
          <HomePage products={this.state.filtered}/>
      </div>
    );
  }
}

export default App;
