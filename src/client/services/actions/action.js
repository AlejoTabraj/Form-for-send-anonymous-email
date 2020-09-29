import { sendMessage } from '../message.js'

export function sendMessageAction(to, subject, text){  
  return function (dispatch) {    
    return sendMessage(to, subject, text)
    .then( function(data){
      dispatch({ type: "SEND_MESSAGE", payload: data}) 
    })
  }
}