import React from 'react'
import Comment from './Comment'
class Show extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     post: this.props.post,
  //
  //   }
  //
  //   // this.toggleShow = this.toggleShow.bind(this)
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
         {
           this.props.post.comments.map((comment) => {
             return(
                <h6>{comment}</h6>
             )
           })
         }
         <Comment post={this.props.post} handleUpdateComments={this.props.handleUpdateComments}/>

       </div>
     </div>
    )
  }
 }
export default Show
