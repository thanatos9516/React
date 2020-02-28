import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import axios from 'axios';

class listComponent extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
          listProducts:[]
        }
      }

     /* componentDidMount(){

        axios.get("https://market-api-rest.herokuapp.com/products")
        .then(res => {
          const data = res.data.data;
          this.setState({ listProducts:data });
        })
        .catch(error => {
          alert(error)
        });
  
      } */

      async componentDidMount() {
        const res = await fetch('https://market-api-rest.herokuapp.com/products')
        const listProducts = await res.json()
        this.setState({listProducts})
      }

      /* async componentDidMount(){
        const url = "https://market-api-rest.herokuapp.com/products"
        await axios.get(url)
        .then(res => {
            if (res.data.success) {
                const data = res.data.data;
                this.setState({ listProducts:data });
            }else{
                alert('Error web service')
            }
        })
        .catch(error => {
          alert("Error server"+error)
        });
  
      }  */

  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Stock</th>
            <th scope="col">Category</th>
            <th scope="col">Warehouse</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData(){

    return this.state.listProducts.map((data)=>{
      return(
        <tr>
          <th>{data.idarticulo}</th>
          <td>{data.nombre}</td>
          <td>{data.stock}</td>
          <td>{data.categoria}</td>
          <td>{data.warehouse}</td>
          <td>
            <button class="btn btn-outline-info "> Edit </button>
          </td>
          <td>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      )
    });
  }

}

export default listComponent;