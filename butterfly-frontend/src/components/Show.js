import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <div>
        <div className="modal">
         <h3>{this.props.post.title.toUpperCase()}</h3>
         <hr/>
         <img href={this.props.post.image}></img>
         <iframe width="560" height="315" src={this.props.post.video} frameBorder="0"></iframe>
         <h4>{this.props.post.caption}</h4>
         <h6><span>Likes:</span> {this.props.post.likes}</h6>
         {/* <p><span>comments:</span> { this.props.holiday.description } </p> */}
       </div>
     </div>
    )
  }
 }
export default Show
