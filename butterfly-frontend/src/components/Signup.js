import React, {Component} from 'react'
class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
      signup: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleSignup = this.toggleSignup.bind(this)
  }

  toggleSignup(){
    this.setState({
      signup: !this.state.signup
    })
  }
  handleChange(event){
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    })
  }
  async handleSubmit(event){
    event.preventDefault()
    try{
      let response = await fetch(this.props.baseURL + '/users',{
        method:'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      // console.log(data)
      this.setState({
        username:'',
        password:'',
        signup:true
      })
    }catch(e){
      console.error(e);
    }
  }
  render(){
    return(
      <div>
      {
          this.state.signup
          ?
          <button onClick={this.toggleSignup}>Sign up</button>
          :
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Userame</label>
            <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"/>
            <input type='submit' value='sign up'/>
          </form>
        }

      </div>
    )
  }
}
export default Signup
