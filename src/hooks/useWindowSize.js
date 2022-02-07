import React, { useLayoutEffect, useState } from 'react';

export const WINDOW_SIZE_SSM = 1;
export const WINDOW_SIZE_SM = 2;
export const WINDOW_SIZE_M = 3;
export const WINDOW_SIZE_XL = 4;
export const WINDOW_SIZE_XXL = 5;

function useWindowSize() {
  const [size, setSize] = useState({ 
      device_size: WINDOW_SIZE_SM, 
      width: window.innerWidth, 
      height: window.innerHeight
    });
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ 
          ...size,
          width: window.innerWidth, 
          height: window.innerHeight
        });
        if(window.innerWidth > 1201) {
            setSize({ 
                ...size,
                device_size: WINDOW_SIZE_XXL
            })
        }
        else if(window.innerWidth > 1025) {
            setSize({ 
                ...size,
                device_size: WINDOW_SIZE_XL
            })
        } else if(window.innerWidth > 768) {
            setSize({
                ...size,
                device_size: WINDOW_SIZE_M
            })
        } else if(window.innerWidth > 481) {
            setSize({
                ...size,
                device_size: WINDOW_SIZE_SM
            })
        } else {
            setSize({
                ...size,
                device_size: WINDOW_SIZE_SSM
            })
        }
        
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default useWindowSize;