import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    // if (isEmpty) return <h1>Cart is Empty</h1>
    return (
        <div >
            <div className='container'>
                <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">

                    <h1 className="text-2xl font-bold w-[100%] text-center font-extrabol">Your Cart</h1>
                    <div className="grid md:grid-cols-3 gap-4 mt-8">

                        <div className="md:col-span-2 z-20">
                            <div className={`${isEmpty ? "flex" : "hidden"}  flex items-center p-4 mb-4 text-sm text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]`} role="alert">
                                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Warning alert!</span> Your Cart is Empty.
                                </div>
                            </div>

                            {
                                items.map((item, index) => {
                                    return (

                                        <div key={index} data-aos='fade-up' className="flex gap-4 mb-5 bg-primary/10 dark:bg-primary/20 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] cursor-pointer hover:bg-primary/40 duration-100">

                                            <div className="flex gap-4 ">
                                                <Link to={`/d-cart/product/${item.id}`}>
                                                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                                        <img src={item.img} className="w-full h-full object-contain" />
                                                    </div>
                                                </Link>

                                                <div className="flex flex-col gap-4">
                                                    <div>
                                                        <h3 className="text-base font-bold">{item.name}</h3>
                                                        <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Catagory :{item.category}</p>
                                                    </div>

                                                    <div className="mt-auto flex items-center gap-3">
                                                        <button type="button" disabled={`${item.quantity == 1 ? "disable" : ""}`}
                                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                            className={`${item.quantity == 1 ? "bg-slate-200" : ""} flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                            </svg>
                                                        </button>
                                                        <span className="font-bold text-sm leading-[18px]">{item.quantity}</span>
                                                        <button type="button"
                                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ml-auto flex flex-col z-20">
                                                <div className="flex items-start gap-4 justify-end">
                                                    <button onClick={() => removeItem(item.id)} className='text-red-500 hover:text-red-700 duration-150'>
                                                        <AiFillDelete size={30} />
                                                    </button>
                                                </div>
                                                <h3 className="text-base font-bold mt-auto">{item.price * item.quantity}$</h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        <div data-aos='zoom-in' className="bg-primary/40 rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                            <ul className="space-y-4">
                                <li className="flex flex-wrap gap-4 text-sm">Total Unique Items <span className="ml-auto font-bold">{totalUniqueItems}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">total Items <span className="ml-auto font-bold">{totalItems}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${cartTotal}</span></li>
                                <hr className="border-gray-300" />
                                <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${cartTotal}</span></li>
                            </ul>

                            <div className="mt-8 space-y-2">
                                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
                                <button type="button" onClick={() => emptyCart()} className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent bg-red-600 hover:bg-red-400 text-white border border-gray-300 rounded-md">Clear Cart</button>
                            </div>

                            <div className="mt-4 flex flex-wrap justify-center gap-4">
                                <img src='https://readymadeui.com/images/master.webp' alt="card1" className="w-10 object-contain" />
                                <img src='https://readymadeui.com/images/visa.webp' alt="card2" className="w-10 object-contain" />
                                <img src='https://readymadeui.com/images/american-express.webp' alt="card3" className="w-10 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <h3>Cart ({totalUniqueItems}), Total item ({totalItems}) </h3>
                <table>
                    <tbody>

                        {
                            items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}$</td>
                                        <td>Quantity :({item.quantity})</td>
                                        <td>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button onClick={() => removeItem(item.id)}>Remove Item</button>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>

                <div>
                    <h3>Total price :({cartTotal})$</h3>
                </div>
                <div>
                    <button onClick={()=>emptyCart()}>Clear Cart</button>
                </div> */}
            </div >
        </div >
    )
}

export default Cart
