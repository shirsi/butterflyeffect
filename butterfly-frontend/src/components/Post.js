import React, { Component } from 'react';
import Update from './Update'
class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      _id: this.props.post._id,
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  toggleForm(){
    this.setState({
      showForm : !this.state.showForm
    })
  }
  render(){
    return(
      <div>
        {
          this.state.showForm
          ? <Update handleUpdatePost={this.props.handleUpdatePost}
          post={this.props.post}
          toggleForm={this.toggleForm}/>
          :<h3>{" "}</h3>

        }
        <button onClick={this.toggleForm}>Update Me!</button>

      </div>
    )
  }
}
export default Post
