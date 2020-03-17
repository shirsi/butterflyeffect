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

  componentDidMount(){
    if (this.props.post) {
      this.setState({
        title: this.props.post.title,
        image: this.props.post.image,
        video: this.props.post.video,
        caption:this.props.post.caption,
        _id: this.props.post._id
      })
    }
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
          <input type="text" id="title" name="title"  onChange={this.handleChange}  value={this.state.title}/>

          <label htmlFor="image">image</label>
          <input type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} />

          <label htmlFor="video">video</label>
          <input type="text" id="video" name="video" onChange={this.handleChange} value={this.state.video} placeholder="upload your video"/>

          <label htmlFor="caption">caption</label>
          <input type="text" id="caption" name="caption" onChange={this.handleChange} value={this.state.caption} placeholder="put your caption"/>

          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
export default Update
