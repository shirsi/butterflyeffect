import React from 'react'
import Comments from './Comments'
class Show extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      post: this.props.post
    }
  }
    /*
  ********************************************************
           update Comments
  ********************************************************
  */
  // async handleUpdateComments(event, post){
  //   event.preventDefault()
  //   console.log(post._id);
  //   try{
  //     let response = await fetch(`${baseURL}/butterfly/${post._id}`,{
  //       method:'PUT',
  //       body: JSON.stringify(post),
  //       headers:{
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     let updatedPost = await response.json()
  //     const foundPostIndex = this.state.posts.findIndex(foundPost => foundPost._id === post._id)
  //     const copyPosts = [...this.state.posts]
  //     copyPosts[foundPostIndex] = updatedPost
  //     this.setState({
  //       posts: copyPosts
  //     })
  //   }catch(error){
  //     console.error(error);
  //   }
  // }
  render () {

    return (
      <div>
        <div className="modal">
         <h3>{this.props.post.title.toUpperCase()}</h3>
         <hr/>
         {
           this.props.post.image? <img src={this.props.post.image}></img> : ''
         }

         {
           this.props.post.video? <iframe width="560" height="315" src={`${this.props.post.video}?autoplay=1`} frameBorder="0"></iframe>: ''
         }
         <h4>{this.props.post.caption}</h4>
         <h6><span>Likes:</span> {this.props.post.likes}</h6>
         <h6>Comments</h6>
         <Comments />
         {/* <p><span>comments:</span> { this.props.holiday.description } </p> */}
       </div>
     </div>
    )
  }
 }
export default Show
