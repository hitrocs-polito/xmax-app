import React, { useEffect, useState } from 'react';
import './CategorySlider.css';

function makeSliderDraggable() {
  const tabsBox = document.querySelector('.tabs-box');
  const arrowIcons = document.querySelectorAll('.icon');
  const allTabs = document.querySelectorAll('.tab');

  let isDragging = false;
  let touchStartX = 0;

  const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].style.display = scrollVal > 15 ? 'flex' : 'none';
    arrowIcons[1].style.display = maxScrollableWidth > scrollVal ? 'flex' : 'none';
  };
  arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      tabsBox.scrollLeft += icon.id === 'left' ? -250 : 250;
      setTimeout(() => handleIcons(), 50);
    });
  });

  allTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabsBox.querySelector('.active').classList.remove('active');
      tab.classList.add('active');
    });
  });

  const handleTouchStart = (e) => {
    isDragging = true;
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touchX = e.touches[0].clientX;
    const sensitivityFactor = 50; // Adjust the sensitivity by multiplying with a higher factor
    const deltaX = (touchX - touchStartX) * sensitivityFactor;
    tabsBox.scrollLeft -= deltaX;

    touchStartX = touchX;
    
    requestAnimationFrame(() => {
      handleIcons();
    });
  };

  const handleTouchEnd = () => {
    isDragging = false;
    tabsBox.classList.remove('dragging');
  };

  tabsBox.addEventListener('mousedown', () => (isDragging = true));
  tabsBox.addEventListener('mousemove', (e) => {
    if (isDragging) {
      e.preventDefault(); // Prevents text selection during dragging
      tabsBox.classList.add('dragging');
      tabsBox.scrollLeft -= e.movementX;
      handleIcons();
    }
  });
  tabsBox.addEventListener('mouseup', () => {
    isDragging = false;
    tabsBox.classList.remove('dragging');
  });

  tabsBox.addEventListener('touchstart', handleTouchStart);
  tabsBox.addEventListener('touchmove', handleTouchMove);
  tabsBox.addEventListener('touchend', handleTouchEnd);
}

const modelOptions = [
  'Apple',
  'Xiaomi',
  'Samsung',
  'OnePlus',
  'LG',
  'Motorola',
  'Sony',
  'Huawei',
  'Realme',
  'Honor',
  'Artel',
];

function CategorySlider() {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    makeSliderDraggable();
  }, []);

  const handleModelClick = (option) => {
    // Define your logic for handling model click
    console.log(`Clicked on ${option}`);
  };

  return (
    <div className='wrapper'>
      <svg xmlns="http://www.w3.org/2000/svg" id='left' width={'20px'} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>

      <ul className='tabs-box'>
        <li className='tab active' onClick={() => handleModelClick('All')}>
          All
        </li>
        {modelOptions.map((option) => (
          <li className='tab' key={option} onClick={() => handleModelClick(option)}>
            {option}
          </li>
        ))}
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" id='right' width={'20px'} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
}

export default CategorySlider;
