import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

// Styled component untuk tombol WhatsApp
const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #353a40;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/62${phoneNumber}`, '_blank');
  };

  return (
    <StyledButton 
      onClick={handleWhatsAppClick}
      aria-label="Contact on WhatsApp"
    >
      <Icon 
        icon="mdi:whatsapp" 
        width={40} 
        height={40} 
      />
    </StyledButton>
  );
};

export default WhatsAppButton;
