// import React,{useState} from 'react'
// import Items from './Items'
// import "./Block.css";
// import Cart from './Cart'
// import Navbar from './Navbar'
// import { useStateValue } from './StateProvider';

// // const PAGE_CART ='cart'

// function MapDemo() {

//     // const [cart, setCart] = useState([]);

//     const [{ basket }, dispatch] = useStateValue();

//     const addToBasket = () => {
//       // Add item to basket...
//       dispatch({
//         type: "ADD_TO_BASKET",
//         // item: {
//         //   id,
//         //   title,
//         //   image,
//         //   price,
//         //   rating,
//         // },
//       });
//     };
  

//     const renderProducts = ()=>(                             //not dynamic so brace.
//       <div>
//             <h1>Products</h1>
//             {Items.map((item,idx)=>(
//                 <div className="product" key={idx}>
//                 <div className="product_info">
//                   <p>{item.title}</p>
//                   <p className="product_price">
//                     <small>$</small>
//                     {item.price}
//                   </p>
//                 </div>
//                 <img src={item.image} alt="" />
//                 <button onClick={() => addToBasket(item)}>Add to basket</button>
//               </div>
//             ))}
//       </div>
//     )

//     // const renderCart = ()=>(
//     //   <div>
//     //         <h1>cart</h1>
//     //         {cart.map((item,idx)=>(
//     //             <div className="product" key={idx}>
//     //             <div className="product_info">
//     //               <p>{item.title}</p>
//     //               <p className="product_price">
//     //                 <small>$</small>
//     //                 {item.price}
//     //               </p>
//     //             </div>
//     //             <img src={item.image} alt="" />
//     //             <button onClick={() => remove(item)}>Remove</button>
//     //           </div>
//     //         ))}
//     //   </div>
//     // )

//     return (
//         <div>
//           <div className="colored-section" id="title">
//             <Navbar cart={basket.length===0?'':basket.length}/>
//           </div>
//             {renderProducts()}
            
//             <br/><hr/>
//             {/* {renderCart()} */}
            
            
//         </div>
//     )
// }

// export default MapDemo;
















// import React,{useState} from 'react'
// import Items from './Items'
// import "./Block.css";
// import Cart from './Cart'

// const PAGE_PRODUCT='prod'
// const PAGE_CART ='cart'

// function MapDemo() {

//     const [cart, setCart] = useState([]);
//     const [page,setPage] = useState(PAGE_PRODUCT)

//     const addToBasket = (item) => {
//       console.log('we are in cart');
//         setCart([...cart, {...item}]);   //dont delete bunch same item
//     };

//     const remove = (removeitem) => {
//       setCart(
//         cart.filter((item)=>item!==removeitem
//         )
//       )
//     }

//     const navigateTo = (nextPage) =>{
//       setPage(nextPage); 
//     }

//     const renderProducts = ()=>(                             //not dynamic so brace.
//       <div>
//             <h1>Products</h1>
//             {Items.map((item,idx)=>(
//                 <div className="product" key={idx}>
//                 <div className="product_info">
//                   <p>{item.title}</p>
//                   <p className="product_price">
//                     <small>$</small>
//                     {item.price}
//                   </p>
//                 </div>
//                 <img src={item.image} alt="" />
//                 <button onClick={() => addToBasket(item)}>Add to basket</button>
//               </div>
//             ))}
//       </div>
//     )

//     const renderCart = ()=>(
//       <div>
//             <h1>cart</h1>
//             {cart.map((item,idx)=>(
//                 <div className="product" key={idx}>
//                 <div className="product_info">
//                   <p>{item.title}</p>
//                   <p className="product_price">
//                     <small>$</small>
//                     {item.price}
//                   </p>
//                 </div>
//                 <img src={item.image} alt="" />
//                 <button onClick={() => remove(item)}>Remove</button>
//               </div>
//             ))}
//       </div>
//     )

//     return (
//         <div>
//             <button onClick={() => navigateTo(PAGE_CART)}>cart{cart.length===0?'':(cart.length)}</button>
//             <button onClick={() => navigateTo(PAGE_PRODUCT)}>viewproduct</button>
//             {page===PAGE_PRODUCT&& renderProducts()}
//             {page===PAGE_CART && renderCart()}
//             {/* {page===PAGE_CART && (
//               <Cart cart={cart} remove={remove}/>
//             )} */}
            
//         </div>
//     )
// }

// export default MapDemo

