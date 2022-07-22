import React from 'react';
import {FiShield, FiShoppingBag, FiLifeBuoy} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';


const cards = [
  {
    id: 1,
    icon: <FiShield />,
    title: 'Risk Free Trades',
    details: `Exlore the platform and test strategies freely`
  },
  {
    id: 2,
    icon: <FiShoppingBag/>,
    title: 'Marketplace',  
    details: `Customize the platform with unique add-ons to elevate your trading`
  },
  {
    id: 3,
    icon: <FiLifeBuoy/>,
    title: 'Demo Account',  
    details: `Replenishable $10,000 for practice and learninig`
  },
  {
    id: 4,
    icon: <AiOutlineUser />,
    title: 'Personal Manager',  
    details: `Get Exclusive one-on-one support from a trading expert`
  }
]

export default cards;