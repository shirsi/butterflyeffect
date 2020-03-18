import React from 'react'

class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      post: this.props.post,
      // commentsArr:this.props.post.comments,
      comments:''
    }
  this.handleChange = this.handleChange.bind(this)
  // this.handleNewComment = this.handleNewComment.bind(this)
  }

  handleChange(event){
    this.setState({
      comments:event.currentTarget.value
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={(event) => {
          this.props.handleUpdateComments(event, this.props.post, this.state.comments)
          this.setState({
            comments:'',
          })
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
