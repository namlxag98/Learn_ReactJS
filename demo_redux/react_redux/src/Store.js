var redux = require('redux');
    var oldState ={
      num: ["man hinh", "chuot","ban phim"],
      editStatus:true
    }
    var reducer1 = (state1=oldState,action1) => {
      switch (action1.type) {
        case "CHANGE_EDIT_STATUS":
          return {...state1,editStatus: !state1.editStatus};
        case "ADD_NEW":
          return {...state1,num:[...state1.num,action1.newItem]};  
        case "DELETE":
            return {...state1,num:state1.num.filter((value,key) => key !== action1.number)};  
        default:
          break;
      }
      //Dung de dat ten cho action
      return state1;
    }
    const numInitialState =["man hinh", "chuot","ban phim"]; 
    const num = (state = numInitialState, action) => {
      switch (action.type) {
        case "ADD_NEW":
          return [...state,action.newItem];  
        case "DELETE":
            return [state.filter((value,key) => key !== action.number)] 
          return state
      }
    }
    var store1 = redux.createStore(reducer1);
    //Khoi tao store
    store1.subscribe( ()=> {
      console.log(JSON.stringify(store1.getState()));
    })
    // console.log(store1.getState());
    store1.dispatch({type:"CHANGE_EDIT_STATUS"});
    //Goi de thuc thi action CHANGE_EDIT_STATUS
    // console.log(store1.getState());


    store1.dispatch({
      type:"ADD_NEW",
      newItem:"Tai Nghe"
    })
    // console.log(store1.getState());


    store1.dispatch({
      type:'DELETE',
      number:0
    })
export default store1;