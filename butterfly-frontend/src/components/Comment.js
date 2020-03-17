import React from 'react'

class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      comments:''
    }
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      comments:event.currentTarget.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(e) => {
          this.props.handleUpdateComments(e, this.state)
        }}>
          <label htmlFor="comments">Add Comment</label>
          <input type="textbox" id="comments" name="comments" onChange={this.handleChange} value={this.state.comments} placeholder="write your comment..."/>

          <input type='submit' value='add comment'/>
        </form>
      </div>
    )
  }
}

export default Comment
