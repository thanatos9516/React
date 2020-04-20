import React, {Component} from 'react';
import Service from '../../Services/service';
import Paginator from '../../Components/Paginator';
import { pagination, filteredItem } from '../../Util/dataTable';


import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Link, Route, Switch} from "react-router-dom";

// import  Add  from './add';
/* const Add = React.lazy(() => import('../../views/Products/add'));

const routes = [
  
  { path: '/products/add', name: 'Add', component: Add },
];
 */


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: {},
      todoListRecords: [],
      filterText: ''
    };
    this.onPaginate = this.onPaginate.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.generateTB = this.generateTB.bind(this);
  }

  onPaginate(currentPage) {
    let todoList = { ...this.state.todoList };
    let paginatedTodoList = pagination(
      currentPage,
      5,
      this.state.todoListRecords
    );
    todoList.pages = paginatedTodoList.pages;
    todoList.paginatedData = paginatedTodoList.paginatedData;
    todoList.paginatorData = paginatedTodoList.paginatorData;
    this.setState({ todoList });
  }

  onFilter(filterText) {
    this.setState({ filter: filterText });
    let todoList = { ...this.state.todoList };
    if (filterText.length) {
      let filteredTodoList = filteredItem(
        filterText,
        'nombre',
        5,
        this.state.todoListRecords
      );
      todoList.pages = filteredTodoList.pages;
      todoList.paginatedData = filteredTodoList.paginatedData;
      todoList.paginatorData = filteredTodoList.paginatorData;
    } else {
      console.log(this.state.todoList);
      let todoListRecords = [...this.state.todoListRecords];
      let paginatedTodoList = pagination(1, 5, todoListRecords);
      todoList.pages = paginatedTodoList.pages;
      todoList.paginatedData = paginatedTodoList.paginatedData;
      todoList.paginatorData = paginatedTodoList.paginatorData;
    }
    this.setState({
      todoList  
    });
  }

  generateTB() {
    return this.state.todoList.paginatedData.map((todo, index) => (
      <tr key={todo.idarticulo}>
          <th>{todo.idarticulo}</th>
          <td>{todo.nombre}</td>
          <td><img src={todo.imagen} width="50" crossOrigin="anonymous" /></td>
          {/* <td>{todo.imagen}</td> */}
          <td>{todo.descripcion}</td>
          <td>{todo.stock}</td>
          <td>{todo.categoria}</td>
          <td>{todo.warehouse}</td>
          <td>{todo.profit}</td>
          <td>{todo.precio_costo}</td>
          <td>{todo.precio_venta}</td>
          <td>
          <Link class="btn btn-outline-warning "  to={"/edit/"+todo.idarticulo} >Edit</Link>
          </td>
          <td>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
      </tr>
    ));
  }

  async componentDidMount() {
    let service = new Service();
    let list = await service.list();
    let todoList = pagination(1, 10, list);
    this.setState({
      todoList,
      todoListRecords: list
    });
  }
  render() {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <div className='form-group'>
            <label htmlFor='filterData'>Search</label>
            <input
              type='text'
              className='form-control col-sm-4'
              id='filterData'
              aria-describedby='filterHelp'
              placeholder='Search for data...'
              onChange={event => this.onFilter(event.target.value)}
            />
            <small id='filterHelp' className='form-text text-muted'>
              Find any data you want...
            </small>
          </div>

          <div className="animated fadeIn">
          <Row> 
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Products

          {/*       <BrowserRouter>
                  <Switch>
                    <Route path='/add' />
                  </Switch>
               </BrowserRouter> */}

               

                 <Link to="/add" className="link btn btn-primary col-sm-2 float-right">Add Product</Link> 
              </CardHeader>
              <CardBody>
                <Table hover responsive >
                  <thead className='thead-dark'>
                  <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Image</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Stock</th>
                  <th scope='col'>Category</th>
                  <th scope='col'>Warehouse</th>
                  <th scope='col'>Profit</th>
                  <th scope='col'>Cost Price</th>
                  <th scope='col'>Sale Price</th>
                  <th colSpan='2'>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                {Object.keys(this.state.todoList).length !== 0 &&
                this.state.todoList.constructor === Object
                  ? this.generateTB()
                  : null}
              </tbody>
                </Table>
                {Object.keys(this.state.todoList).length !== 0 &&
          this.state.todoList.constructor === Object ? (
            <Paginator
              onPaginate={this.onPaginate}
              paginatorData={this.state.todoList.paginatorData}
              pages={this.state.todoList.pages}
            />
          ) : null}
              </CardBody>
            </Card>
          </Col>
        </Row>
          </div> 
          {/* Close Animated fadeIn div */} 
        </div>
      </div>
    );
    

  }
}

export default TodoList;