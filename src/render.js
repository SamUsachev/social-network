import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import  {addNewPost, updateNewPostText}  from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (state)=>{
root.render(
  <React.StrictMode>
    <App postData = 
    {state.postsPage.postData}
    newPostText = 
    {state.postsPage.newPostText} 
    dialogData = 
    {state.dialogsPage.dialogData} 
    messageData = 
    {state.dialogsPage.messageData}
    addNewPost =
     {addNewPost}
     updateNewPostText =
     {updateNewPostText}/>
  </React.StrictMode>
)
}
