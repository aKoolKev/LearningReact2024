/* 
  onChange = event handler used primarily with form elements
             ex. <input>, <textarea>, <select>, <radio>
             Triggers a function every time the value of the input changes
*/

import React, {useState} from 'react';

function MyComponent(){

    //stateful variables
    const [name, setName] = useState("Guest ");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    //modify stateful variables
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (
        <div>

            {/* <input> example */}
            <input value={name} onChange={handleNameChange} /> 
            <p>Name: {name} </p>

            {/* <input type="number"> example */}
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            {/* <textarea> example */}
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comment: {comment}</p>

            {/* <select> example */}
            <select value={payment} onChange={handlePaymentChange}>
                <option value="" >Select an option</option> {/* default option */}
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>


            {/* <input type='radio' example */}
            <label>
                <input type='radio' value='Pick Up' onChange={handleShippingChange} 
                                                    checked={shipping === 'Pick Up'} />
                Pick Up
            </label>

            <br/>

            <label>
                <input type='radio' value='Delivery' onChange={handleShippingChange}
                                                     checked={shipping === 'Delivery'} />
                Delivery
            </label>
            <p>Shipping: {shipping} </p>
            
        </div>
    );
}
export default MyComponent