import React from 'react'
import New from './components/New.js'

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
    }
    this.handleAddPost = this.handleAddPost.bind(this)
    // this.deletePost = this.deletePost.bind(this)
    this.getPosts = this.getPosts.bind(this)
  }



/*
  ********************************************************
        WAITS FOR BROWSER BEFORE GRABS INFO FROM SERVER
    ********************************************************
    */

    componentDidMount(){
      this.getPosts()
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




       /*
       ********************************************************
                 Comments
       ********************************************************
       */




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



     /*
     ********************************************************
                UPDATE RECIPES
     ********************************************************
     */



  render(){
  return (
    <div className="App">
      <h1>Hi</h1>
      <New baseURL={baseURL} handleAddPost={this.handleAddPost}/>

        {
            this.state.posts.map(post =>{
              return(
                <div>
                  <h3>{post.title}</h3>
                  <button onClick={() => {
                    this.deletePost(post._id)
                  }}>delete</button>
                </div>
              )}
            )}

    </div>
  )}
}

export default App;
