import React from 'react'
 

const Nav = ({librarystatus, setlibraystatus}) => {
  return (
    <div className="navbar">
      <p>Melody is everything ... 🎶🎶</p>

      <button
        onClick={() => {
          setlibraystatus(!librarystatus);
        }}
      > Library 📚
       
      </button>
    </div>
  );
};

export default Nav
