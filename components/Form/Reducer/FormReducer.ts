export type Form ={
    verified:boolean
    error:boolean
    success:boolean
}
export type FormAction =
| {type:"SEND_PERMISION",payload:{verified:boolean,error: boolean}}
| {type:"SEND_SUCCESS",payload:{success:boolean}}
| {type:"SEND_ERROR",payload:{error:boolean}}
export const FormInitialState:Form = {
      verified:false,
    error:false,
    success:false
}
export const formReducer = (state: Form, action: FormAction): Form => {
  switch (action.type) {
    case "SEND_PERMISION":
      return { ...state, verified: action.payload.verified,error: false };
    case "SEND_SUCCESS":
      return { ...state, success: action.payload.success, error: false, verified: false };
    case "SEND_ERROR":
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};