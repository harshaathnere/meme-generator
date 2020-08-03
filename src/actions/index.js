import{username, password} from '../actions/secret'
export const RECIEVE_MEMES = 'RECIEVE_MEMES';
export const NEW_MEME = 'NEW_MEME ';

function recieveMemes(json){
const {memes} = json.data;

return{
    type: RECIEVE_MEMES,
    memes
}
}
function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

 export function fectchMemes(){
     return function(dispatch){
         return fetchMemesJson()
         .then(json => dispatch(recieveMemes(json)))
     }
 }

  function newMeme(meme){
     return{
         type: NEW_MEME ,
         meme
     }
 }
 function postMemeJson(params){
  params["username"] = username;
  params["password"] = password;

  const bodyParams =Object.keys(params).map(key=>{
      return encodeURIComponent(key) + " =" + encodeURIComponent(params[key])
  }).join('&');
  console.log( 'bodyparams',bodyParams);
  return fetch('https://api.imgflip.com/caption_image',{
      method: "POST",
      headers:{
          'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: bodyParams
  }).then (response => response.json())
  
 }

export function createMeme(new_meme_obj){
     return function(dispatch){
         return postMemeJson(new_meme_obj)
         .then(new_meme => dispatch(newMeme(new_meme)))
     }
 }