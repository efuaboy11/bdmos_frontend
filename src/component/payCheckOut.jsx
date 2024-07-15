import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const OrderComponent = () => {
  const [order, setOrder] = useState(null);

  const createOrder = async () => {
    const response = await fetchWithAuth('/api/create-order/', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Order created successfully:', data);
      setOrder(data);
      return data;
    } else {
      const error = await response.json();
      console.error('Error creating order:', error);
      return null;
    }
  };

  const config = {
    public_key: 'YOUR_FLUTTERWAVE_PUBLIC_KEY',
    tx_ref: Date.now(),
    amount: 100, // Replace with the actual amount
    currency: 'NGN',
    payment_options: 'card, mobilemoney, ussd',
    customer: {
      email: 'user@example.com', // Replace with user's email
      phonenumber: '080**4528', // Replace with user's phone number
      name: 'John Doe', // Replace with user's name
    },
    customizations: {
      title: 'My Store',
      description: 'Payment for items in cart',
      logo: 'https://example.com/logo.png',
    },
  };

  const handleFlutterwavePayment = useFlutterwave(config);

  const handleCheckout = async () => {
    const orderData = await createOrder();
    if (orderData) {
      handleFlutterwavePayment({
        callback: (response) => {
          console.log(response);
          if (response.status === 'successful') {
            updateOrderStatus(orderData.id);
          }
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {},
      });
    }
  };

  const updateOrderStatus = async (orderId) => {
    const response = await fetchWithAuth('/api/payment-callback/', {
      method: 'POST',
      body: JSON.stringify({ order_id: orderId, status: 'successful' }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Payment callback handled successfully:', data);
    } else {
      const error = await response.json();
      console.error('Error handling payment callback:', error);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
      {order && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;