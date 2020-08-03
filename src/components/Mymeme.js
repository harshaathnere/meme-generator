import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Mymeme extends Component {
  render() {
    return (
      <div>
      {
          this.props.myMemes.map((meme,index) =>{
              return(
                  <img
                  key={index}
                  src={meme&& meme.data&&meme.data.url}
                  alt="my-meme"
                  className="my-meme-img"
                  
                  />
              )
          })
      }
        
      </div>
    )
  }
}
 function mapStateToProps(state){
     return{
         myMemes:  state.myMemes
     } 
 }
export default connect(mapStateToProps,null) (Mymeme)