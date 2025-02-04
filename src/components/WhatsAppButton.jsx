import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

// Styled component untuk link WhatsApp
const StyledLink = styled.a`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #353a40;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  display: inline-block;

  &:hover {
    color: white;
  }
`;

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/62${phoneNumber}`;

  return (
    <StyledLink 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <Icon 
        icon="mdi:whatsapp" 
        width={40} 
        height={40} 
      />
    </StyledLink>
  );
};

export default WhatsAppButton;