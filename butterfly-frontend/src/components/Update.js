import React, {Component} from 'react'
class Update extends Component{
  constructor(props){
    super(props)
    this.state ={
      _id: this.props.post._id,
      title:'',
      image:'',
      video:'',
      caption:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.currentTarget.id]:event.currentTarget.value
    })
  }
  render(){
    return(
      <div>
        <h1>Update Form</h1>
        <form onSubmit={
          (event) => {

            this.props.handleUpdatePost(event,this.state)
            this.props.toggleForm()
          }
        }>

          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title"  onChange={this.handleChange}  value={this.props.post.title}/>

          <label htmlFor="image">image</label>
          <input type="text" id="image" name="image" onChange={this.handleChange} value={this.props.post.image} />

          <label htmlFor="video">video</label>
          <input type="text" id="video" name="video" onChange={this.handleChange} value={this.props.post.video} placeholder="upload your video"/>

          <label htmlFor="caption">caption</label>
          <input type="text" id="caption" name="caption" onChange={this.handleChange} value={this.props.post.caption} placeholder="put your caption"/>

          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
export default Update
