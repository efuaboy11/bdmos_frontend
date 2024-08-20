import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export const WhatsAppChatWidget = () => {
  return (
    <div>
      <WhatsAppWidget
        phoneNumber="+2348072845491"
        companyName="BDOM/ Fredta Children Academy"
        message="Hello! How can we help you today?"
      />
    </div>
  );
};

export default WhatsAppChatWidget;
