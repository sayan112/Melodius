import React from 'react'
 

const Nav = ({librarystatus, setlibraystatus}) => {
  return (
    <div className="navbar">
      <p>Melody is everything ... πΆπΆ</p>

      <button
        onClick={() => {
          setlibraystatus(!librarystatus);
        }}
      > Library π
       
      </button>
    </div>
  );
};

export default Nav
