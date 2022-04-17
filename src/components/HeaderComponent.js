import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import '../customs/Navbar.css';
import '../customs/Register.css';
class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isNavOpenSignup: false,
      isModalOpen: false,
      isModalOpen2: false,
      isModalOpenSignup: false,
      roleId: 0,
      stat: null
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleNavSignup = this.toggleNavSignup.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.toggleModalSignup = this.toggleModalSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.HandleRole = this.HandleRole.bind(this);
    this.navbarSelector = this.navbarSelector.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  toggleModal2() {
    this.setState({
      isModalOpen2: !this.state.isModalOpen2
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleModalSignup() {
    this.setState({
      isModalOpenSignup: !this.state.isModalOpenSignup
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleNavSignup() {
    this.setState({
      isNavOpenSignup: !this.state.isNavOpenSignup
    });
  }
  HandleRole(e) {
    this.setState({ role: e.target.value })
  }

  navbarSelector() {
    if (this.state.stat === null || this.state.stat === undefined) {
      return (<Navbar className="navbar navbar-expand-lg navbar-dark bdr2 text">
        <NavbarToggler onClick={this.toggleNavSignup} />
        <Collapse isOpen={this.state.isNavOpenSignup} navbar>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className="navbar-nav text" navbar>
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span className='fa fa-home fa-lg'></span> Home
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/about">
                  <span ></span> About Us
                </NavLink>
              </NavItem>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span className='fa fa-user fa-lg'></span> Profile
                </NavLink>
              </NavItem> */}
            </Nav>
          </div>
        </Collapse>
      </Navbar>);
    }

    else if (this.state.stat === "1") {
      return (<Navbar className="navbar navbar-expand-lg navbar-dark bdr2 text">
        <NavbarToggler onClick={this.toggleNavSignup} />
        <Collapse isOpen={this.state.isNavOpenSignup} navbar>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className="navbar-nav text" navbar>
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span className='fa fa-home fa-lg'></span> Home
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span ></span> AboutUs
                </NavLink>
              </NavItem>
             
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span className='fa fa-list fa-lg'></span> Add Products
                </NavLink>
              </NavItem> */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/products">
                  <span className='fa fa-list fa-lg'></span> Products
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/cart">
                  <span className='fa fa-cart-plus fa-lg'></span> Cart
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span className='fa fa-credit-card-alt fa-lg'></span> Payment
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/profile">
                  <span className='fa fa-user fa-lg'></span> Profile
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>);

    }
    else if (this.state.stat === "2") {
      return (<Navbar className="navbar navbar-expand-lg navbar-dark bdr2 text">
        <NavbarToggler onClick={this.toggleNavSignup} />
        <Collapse isOpen={this.state.isNavOpenSignup} navbar>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className="navbar-nav text" navbar>
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span className='fa fa-home fa-lg'></span> Home
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/addProduct">
                  <span className='fa fa-list fa-lg'></span> Add Products
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/mProducts">
                  <span className='fa fa-list fa-lg'></span> Products
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/home">
                  <span ></span> AboutUs
                </NavLink>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem className="nav-item active">
                <NavLink className="nav-link text" to="/mprofile">
                  <span className='fa fa-user fa-lg'></span> Profile
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>);

    }

  }

  handleLogin(event) {

    event.preventDefault();
    this.toggleModal();

    var cred = {
      email: this.email.value,
      password: this.password.value
    }
    console.log(cred);
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      
    }
    axios.post("http://localhost:9001/user/authenticate", cred, headers)
      .then(response => {

        sessionStorage.clear();
        sessionStorage.setItem("accessToken", response.data.token);
        sessionStorage.setItem("role", response.data.users.role.roleId)
        sessionStorage.setItem("userId", response.data.users.userId)

        alert("Login Successful")
        console.log("Hello....")
        console.log("token: "+ response.data.token)
        window.location.reload(true);
      })
      .catch(error => {
        alert("login unsuccessful :", error)
      });
  }

  handleLogOut() {
    sessionStorage.clear();
    window.location.reload(true);
    this.context.router.push('/home');
  }

  handleSignUp(event) {

    event.preventDefault();
    var Register = {
      userId: Math.random() * (1 - 100),
      userName: this.userName.value,
      mobileNumber: this.mobileNumber.value,
      address: this.address.value,
      email: this.email.value,
      password: this.password.value,
      Roles: {
        roleId: this.roleId.value,
        role: ""
      }
    }
    
    console.log(Register);

    // let headers = {
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*'
    // }
    // axios.post("http://localhost:9001/user/registration", Register, headers)
    //   .then(response => {
    //     alert("Login Successful")
    //   })
    //   .catch(error => {
    //     alert("login unsuccessful :", error)
    //   });
  }
  componentDidMount() {
    if (sessionStorage.getItem("role") !== null || sessionStorage.getItem("role") !== undefined) {
      this.setState({ stat: sessionStorage.getItem("role") })
    }
    else {
      this.setState({ stat: null })
    }
  }

  render() {
    return (<>
      {this.state.stat === undefined || this.state.stat === null ?
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light bdr text">
          <NavbarToggler onClick={this.toggleNav} />
          {/* <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="50" width="50" alt="Bug-Tracking System" />&nbsp;
          </NavbarBrand> */}
          <h3>Multiclient</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <Nav className="navbar-nav text">
                <form className="d-flex nav-right">
                  <input className="form-control me-2 customize" type="search" placeholder="Search" aria-label="Search" />
                  <button type="button" className="btn btn-dark">Search</button>
                </form>
              </Nav>
            </div>
            <div className="mr-auto">
              <ul className="navbar-nav">
                <li className="nav-item mr-auto">
                  <Nav className='ml-auto' navbar>
                    <Navbar>
                      <Button className="btn btn-secondary" online onClick={this.toggleModal}>
                        <span className='fa fa-sign-in fa-lg'></span> Login
                      </Button>
                    </Navbar>
                  </Nav>
                </li>
              </ul>
            </div>
          </Collapse>
        </Navbar>
        :
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light bdr text">
          <NavbarToggler onClick={this.toggleNav} />
          {/* <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="50" width="50" alt="Bug-Tracking System" />&nbsp;
          </NavbarBrand> */}
          <h3>Multiclient</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <Nav className="navbar-nav text">
                <form className="d-flex nav-right">
                  <input className="form-control me-2 customize" type="search" placeholder="Search" aria-label="Search" />
                  <button type="button" className="btn btn-dark">Search</button>
                </form>
              </Nav>
            </div>
            <div className="mr-auto">
              <ul className="navbar-nav">
                <li className="nav-item mr-auto">
                  <Nav className='ml-auto' navbar>
                    <Navbar>
                      <Button className="btn btn-danger" online onClick={this.handleLogOut}>
                        <span className='fa fa-sign-in fa-lg'></span> LogOut
                      </Button>
                    </Navbar>
                  </Nav>
                </li>
              </ul>
            </div>
          </Collapse>
        </Navbar>
      }
      {this.navbarSelector()}
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="text" id="email" name="email" placeholder="Email"
                innerRef={(input) => this.email = input} required/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">password</Label>
              <Input type="password" id="password" name="password" placeholder="password"
                innerRef={(input) => this.password = input} required/>
            </FormGroup>

            <Button type="submit" value="submit" color="primary">Login</Button>
            <p>need an account?
              <Button className="btn btn-link btn-sm" style={{ "border": "0px" }} online onClick={() => {
                this.toggleModal();
                this.toggleModal2();
              }}> Sign up</Button></p>
          </Form>
        </ModalBody>
      </Modal>

      <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
        <ModalHeader toggle={this.toggleModal2}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSignUp}>
            <FormGroup>
              <Label htmlFor="userName">UserName</Label>
              <Input type="text" id="userName" name="userName" placeholder="userName"
                innerRef={(input) => this.userName = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="mobileNumber">MobileNumber</Label>
              <Input type="text" id="mobileNumber" name="mobileNumber" placeholder="mobileNumber"
                innerRef={(input) => this.mobileNumber = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" name="address" placeholder="address"
                innerRef={(input) => this.address = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Email"
                innerRef={(input) => this.email = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="roleId">Role</Label>
              <select id="roleId" name='roleId' innerRef={(input) => this.roleId = input}>

                <option value="select" defaultValue >select</option>

                <option value={2}>CUSTOMER</option>

                <option value={3}>MERCHANT</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" placeholder="password"
                innerRef={(input) => this.password = input} />
            </FormGroup>
            <p><Button onClick={() => console.log('Click')}  type="submit" value="submit" className="btn btn-primary btn-sm">SignUp</Button>
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              already has an account?
              <Button className="btn btn-link btn-sm" style={{ "border": "0px" }} online onClick={() => {
                this.toggleModal2();
                this.toggleModal();
              }}>Login</Button></p>
          </Form>

        </ModalBody>
      </Modal>
    </>);
  }
}

export default Header;