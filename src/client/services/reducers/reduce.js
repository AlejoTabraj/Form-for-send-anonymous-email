const initialState = {
  message: null
}

export default function message_reducer(state = initialState, action){

  switch(action.type){

    case 'SEND_MESSAGE':
           return {
             ...state,
             message: true
           }

  }

}