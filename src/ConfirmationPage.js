const ConfirmationPage = ({ details }) => {
    



    return (
        <div class='order-confirmation'>
            <h2>Order Confirmation</h2>
            <h3>{details.name}</h3>
            <h5>Delivering to: {details.address}</h5>
            <h5>Email: {details.email}</h5>
            <h5>Phone: {details.phoneNumber}</h5>
            <h4>Pizza Details:</h4>
            <h5>crust:  {details.crust}</h5>
            <h5>size: {details.size}</h5>
            <h5>toppings: {details.toppings}</h5>
            <h5>special instructions: {details.special}</h5>
        </div>
    )
}

export default ConfirmationPage