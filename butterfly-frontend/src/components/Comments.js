import React from 'react'
import Comment from './Comment'
class Comments extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Comment />
      </div>
    )
  }
}

export default Comments
