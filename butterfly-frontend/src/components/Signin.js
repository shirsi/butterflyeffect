import React, {Component} from 'react'
class Signin extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
      signin: true,

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleSignin = this.toggleSignin.bind(this)
  }
  toggleSignin(){
    this.setState({
      signin: !this.state.signin
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
      let response = await fetch(this.props.baseURL + '/sessions',{
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

      this.props.handleSignin(data.username)

      console.log(data)
      this.setState({
        username:'',
        password:'',
      })
    }catch(e){
      console.error(e);
    }
  }
  render(){
    return(
      <div>
      {
        this.state.signin
        ?  <button onClick={this.toggleSignin}>Sign in</button>
        :
        <form onSubmit={
          this.handleSubmit
        }>
          <label htmlFor="username">Userame</label>
          <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"/>
          <input type='submit' value='sign in'/>
        </form>
      }

      </div>
    )
  }
}
export default Signin
