import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';
const baseUrl = "https://market-api-rest.herokuapp.com"

class EditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataEmployee:{},
      campName: "",
      campEmail:"",
      campPhone:"",
      campAddress:"",
      stringRole:"",
      selectRole:0
    }
  }

  async componentDidMount(){
    // parametro de id del usuario
    let idarticulo = this.props.match.params.idarticulo;
    // http://localhost:3000/employee/get/4
    const url = baseUrl+"/products/"+idarticulo
    await axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({
          dataEmployee:data,
          Name: data.nombre,
          campEmail:data.email,
          campPhone:data.phone,
          campAddress:data.address,
          stringRole:data.role.role,
          selectRole:data.roleId
        })
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })

  }

 render(){
  let idarticulo = this.props.match.params.idarticulo;
   //let userId = this.props.match.params.employeeId;
   return (
     <form>
       <div class="form-row justify-content-center">
         <div class="form-group col-md-6">
           <label for="inputPassword4">Name {idarticulo}</label>
           <input type="text" class="form-control"  placeholder="Name"/>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Email</label>
           <input type="email" class="form-control"  placeholder="Email"/>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputState">Role</label>
           <select id="inputState" class="form-control">
             <option selected>Choose...</option>
             <option>...</option>
           </select>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Phone</label>
           <input type="number" class="form-control"  placeholder="Email"/>
         </div>
       </div>
       <div class="form-group">
         <label for="inputAddress">Address</label>
         <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
       </div>

       <button type="submit" class="btn btn-primary">Sign in</button>
     </form>
   );
 }

 sendUpdate(){

  // get parameter id
  let idarticulo = this.props.match.params.idarticulo;
  // url de backend
  const baseUrl = "https://market-api-rest.herokuapp.com/products/updateProduct/"+idarticulo
  // parameter data post
  const datapost = {
    name: this.state.campName,
    email: this.state.campEmail,
    phone: this.state.campPhone,
    address: this.state.campAddress,
    role: this.state.selectRole,
  }

  axios.post(baseUrl,datapost)
  .then(response => {
    if (response.data.success) {
      alert(response.data.message)
    }
    else {
      alert("Error")
    }
  })
  .catch ( error => {
    alert("Error 325 ")
  })

}
}


export default EditComponent;