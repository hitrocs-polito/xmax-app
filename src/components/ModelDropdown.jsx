import React, { useState } from 'react';
import styled from 'styled-components';
import Center from './Center';

const ModelDropdown = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleModelClick = (value) => {
    setSelectedButton(value);
    setIsOpen(false);
  };

  const modelOptions = [
    'Apple',
    'Xiaomi',
    'Samsung',
    'OnePlus',
    'LG',
    'Motorola',
    'Sony',
    'Huawei'
  ];

  return (
    <Center>
      <DropdownContainer>
          <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={'20px'} class="w-1 h-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>

            {selectedButton   || 'Выбрать модель телефона'}
            {isOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width={'12px'} stroke="currentColor" class="w-1 h-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width={'12px'} stroke="currentColor" class="w-1 h-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
  }
          </DropdownButton>
        {isOpen && (
          <DropdownList>
            {modelOptions.map((option) => (
              <DropdownListItem key={option} onClick={() => handleModelClick(option)}>
                {option}

              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </Center>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 19rem;
  margin: 20px 0;

  @media (max-width: 600px) {
    display: none;
    }
`;

const DropdownButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 500;
  width: 19rem;
  background: #f5f5f5;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc; /* Add a border */

  &:hover {
    background-color: #f5f5f5;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 2rem;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #EAEAEA;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 5px 5px;
  padding: 0;
  list-style: none;
  z-index: 5;
  margin: 0;

  @media (max-width: 768px) {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DropdownListItem = styled.li`
  padding: 5px 15px;
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: 500;



  &:hover {
    background-color: #f5f5f5;
    color: orange;
  }
`;

export default ModelDropdown;
