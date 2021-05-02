export const initialState = {
    basket: [],
    cartdetail:[],
  };

  export const cartTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);



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
          console.log(action.item.price);
          return {
            ...state,
            basket: state.basket.map(product =>
              product.id === action.id
                ? {...product, quantity: product.quantity + 1,product.price}
                : product,
            ),
        };

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