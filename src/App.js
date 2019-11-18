import './App.css';
import React, { Component } from 'react'
import Input from './component/input/input'
import Image from "./papers.co-ap47-starwars-illustration-green-art-film-36-3840x2400-4k-wallpaper.jpg"

export class App extends Component {
  constructor(){
    super()
    this.state= {
      email:'',
      password:''
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onClick(e){
    let wrong = document.getElementById("notif");
    e.preventDefault()
    if (this.state.email.length <=0){
      wrong.innerHTML='please insert a valid email'
    }
    else if(this.state.password <=0){
      wrong.innerHTML='please insert a valid password'
    }
    else{
      alert('WELLCOME')
    }
  }
 
  render() {
    return (
      <div className='container' style={{backgroundImage: `url(${Image})`}}>

        <div className='content-left'>
            <h1>Wellcome Back!</h1>
            <p>To keep conected with us please</p>
            <p>login with your personal info</p>
        </div>

        <div className='form-login'>
          <h1>Login</h1>
            <form onSubmit={this.onClick}>
                <label>Email ID</label>
                <Input
                  placeholder="strygwyr@example.com"
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                /> <br/>

                  <label>Password</label>
                <Input
                  placeholder='password'
                  name="password"
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
                <p id='notif'></p>
                <button type='submit'>MASUK</button>
                <a href='#' id='f-password'>Forgot password?</a> <br/>
                <a href='#' id='sign-up'>Don't have an account? </a>
            </form>
        </div>
      </div>  
    )
  }
}

export default App



