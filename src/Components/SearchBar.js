import React from 'react';
import Search from './Search'
const SearchBar = () => {
  const onCallBack = (value) => {
    console.log("onCalBack=>", value);
  }

  const myStyle = {
    display: "flex",
    height:"300px",
    "justify-content":"center",
    "align-items":"center",
};

console.log("from searchbar")
return (

  <div class="flex-container" style={myStyle}>
    <Search callBacks={(value) => onCallBack(value)} />
  </div>
)
}

export default SearchBar;