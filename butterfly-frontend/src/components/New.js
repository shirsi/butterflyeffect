import React from 'react'
class New extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:'',
      image:'',
      video:'',
      caption:''
    }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.currentTarget.id]:event.currentTarget.value
    })
  }
  async handleSubmit(event){
    event.preventDefault()
    try{
      let response = await fetch(this.props.baseURL + '/butterfly', {
        method:'POST',
        body: JSON.stringify({
          title:this.state.title,
          image:this.state.image,
          video:this.state.video,
          caption:this.state.caption
        }),
        headers: {'Content-Type': 'application/json'}
      })
      let data = await response.json()
      this.props.handleAddPost(data)
      this.setState({
        title:'',
        image:'',
        video:'',
        caption:''
      })
    }catch(e){
      console.error(e);
    }
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">title</label>
        <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} placeholder="name your post"/>
        <label htmlFor="image">image</label>
        <input type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} placeholder="upload your image"/>
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
export default New
