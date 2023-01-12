import React from 'react';
import styled from 'styled-components';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    color: white;
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    background-color: rgb(66, 66, 66);

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 40vh;
    width: 200px;
    border-radius: 2.5rem;
    font-weight:bold;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    transition: transform 0.0s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li id='btn-1'>Home</li>
      <li id='btn-2'>Register</li>
      <li id='btn-3'>Contact Us</li>
      <li id='btn-4'>Guidlines</li>
      <li id='btn-5'>Timeline</li>
    </Ul>
  )
}

export default RightNav