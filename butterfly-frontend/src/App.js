import React from 'react'
import New from './components/New.js'
import Post from './components/Post.js'
import Signup from './components/Signup'
import Signin from './components/Signin'
/*
********************************************************
          Define
********************************************************
*/
let baseURL = process.env.REACT_APP_BASEURL

if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost:3003'
}

// else {
//
//  baseURL = ''
// }

console.log(baseURL);




/*
********************************************************
          Begin Class
********************************************************
*/



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      posts:[],
      username:''
    }
    this.handleAddPost = this.handleAddPost.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.getPosts = this.getPosts.bind(this)
    this.handleUpdatePost = this.handleUpdatePost.bind(this)
    this.handleSignin = this.handleSignin.bind(this)
    // this.getCurrentUser = this.getCurrentUser.bind(this)
  }



/*
  ********************************************************
        WAITS FOR BROWSER BEFORE GRABS INFO FROM SERVER
    ********************************************************
    */

    componentDidMount(){
      this.getPosts()
      // this.getCurrentUser()
    }



    /*
     ********************************************************
                GRABS POST FROM SERVER
     ********************************************************
     */
        async getPosts(){
          try {
            let response = await fetch(`${baseURL}/butterfly`)

            let data = await response.json()
            console.log(data)

            this.setState({
              posts: data
            })
          } catch(e){
            console.error(e);
          }
        }

        /*
         ********************************************************
                    GRABS CurrentUser FROM SERVER
         ********************************************************
         */
         // async getCurrentUser(){
         //   try {
         //     let response = await fetch(`${baseURL}/sessions`)
         //
         //     let data = await response.json()
         //     console.log(data)
         //
         //     this.setState({
         //       username: data.username
         //     })
         //   } catch(e){
         //     console.error(e);
         //   }
         // }




     /*
       ********************************************************
                   ADDS NEW POST
       ********************************************************
       */

        handleAddPost (post){
          const copyPosts = [post, ...this.state.posts]
          console.log(copyPosts);
          this.setState({
            posts: copyPosts,
            title:  '',
            media: '',
            caption: '',

          })
        }
        handleSignin(user){
          this.setState({
            username: user
          })
        }



       /*
       ********************************************************
                 Comments
       ********************************************************
       */

       /*
     ********************************************************
              update POSTS
     ********************************************************
     */
     async handleUpdatePost(event, post){
       event.preventDefault()
       console.log(post._id);
       try{
         let response = await fetch(`${baseURL}/butterfly/${post._id}`,{
           method:'PUT',
           body: JSON.stringify(post),
           headers:{
             'Content-Type': 'application/json'
           }
         })
         let updatedPost = await response.json()
         const foundPostIndex = this.state.posts.findIndex(foundPost => foundPost._id === post._id)
         const copyPosts = [...this.state.posts]
         copyPosts[foundPostIndex] = updatedPost
         this.setState({
           posts: copyPosts
         })
       }catch(e){
         console.error(e);
       }
     }

       /*
     ********************************************************
               Delete POSTS
     ********************************************************
     */

     async deletePost(id){
       console.log(`deleted post:${baseURL}/butterfly/${id}`)

       try {
         let response = await fetch(`${baseURL}/butterfly/${id}`, {
           method: 'DELETE'
         })

         let data = await response.json()

         const deletedPost = this.state.posts.findIndex(post =>
         post._id === id)

         const copyPosts = [...this.state.posts]

         copyPosts.splice(deletedPost, 1)

         this.setState({
           posts: copyPosts
         })



       } catch(e){
         console.error(e);
       }
     }





  render(){
  return (
    <div className="App">
      <h1>Hi, {this.state.username}</h1>
      <Signup baseURL={baseURL}/>
      <Signin
      handleSignin = {this.handleSignin}
      baseURL={baseURL}
      username={this.state.username}/>
      <New baseURL={baseURL} handleAddPost={this.handleAddPost}/>

        {
            this.state.posts.map(post =>{
              return(
                <div>

                  <button onClick={() => {
                    this.deletePost(post._id)
                  }}>delete</button>
                  <Post post={post} handleUpdatePost={this.handleUpdatePost}/>
                </div>
              )}
            )}

    </div>
  )}
}

export default App;
