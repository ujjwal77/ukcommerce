export const initialState = {
    basket: [],
    cartdetail:[],
  };

  export const cartTotal = (basket) =>
  basket.reduce((amount, item) => (item.price)*(item.quantity) + amount, 0);



  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
          // cartdetail : [ action.item],
        };
        case "ADD_TO_DETAIL":
        return {
          ...state,
          cartdetail : [ action.item],
        };
        case "increase_quantity":
          let newBaske = [...state.basket];
          
          // console.log(newBaske);
          newBaske.map((ele)=>{
            // console.log(ele.id,action);
            
            
            if(ele.id==action.item.id){
              // console.log(ele);
              ele.quantity=ele.quantity+1
              
              // let total= ele.price*ele.quantity
              // console.log(total)
              // ele.price=total
            }
          })
          // console.log("see above",newBaske)
          return { ...state, basket: newBaske };
            // basket: state.basket.map(product =>
            //   product.id === action.id
            //     ? {...product, quantity: product.quantity + 1,product.price}
            //     : product,
            // ),

        case "decrease_quantity":
            let newBaskett = [...state.basket];
            newBaskett.map((ele)=>{
              if(ele.id==action.item.id){
                if(ele.quantity>1 )
                  ele.quantity=ele.quantity-1
                else ele.quantity=0
                // ele.quantity=ele.quantity-1
              }
            })
          return { ...state, basket: newBaskett };

        case "REMOVE_FROM_BASKET":
          let newBasket = [...state.basket];
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
    
          if (index >= 0) {
            newBasket.splice(index, 1);
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in the basket`
            );
          }
          return { ...state, basket: newBasket };
      default:
        return state;
    }
  };
  
  export default reducer;