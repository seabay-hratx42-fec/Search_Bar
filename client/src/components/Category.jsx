import React from 'react';
import  DropdownButton  from 'react-bootstrap/DropdownButton';
import  Dropdown  from 'react-bootstrap/Dropdown';

const Category = (props) => {

    return (<>
      <select id="pet-select">
        <option value="All Categories">All Categories</option>
        <option value="Antiques">Antiques</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Books">Books</option>
        <option value="Business & Industrial"> Business & Industrial</option> 
        <option value="Cameras & Photo"> Cameras & Photo </option> 
        <option value="Cell Phones & Accessories"> Cell Phones & Accessories </option> 
        <option value="Clothing, Shoes & Accessories">Clothing, Shoes & Accessories</option>
        <option value="Coins & Paper Money">Coins & Paper Money</option> 
        <option value="Collectibles">Collectibles</option> 
        <option value="Computers/Tablets & Networking">Computers/Tablets & Networking</option> 
        <option value="Consumer Electronics">Consumer Electronics</option>
        <option value="Crafts">Crafts</option> 
        <option value="Dolls & Bears">Dolls & Bears</option>
        <option value="DVDs & Movies">DVDs & Movies</option>
        <option value="Entertainment Memorabilia">Entertainment Memorabilia</option> 
        <option value="Everything Else">Everything Else</option> 
        <option value="Gift Cards & Coupons">Gift Cards & Coupons</option>
        <option value="Health & Beauty">Health & Beauty</option> 
        <option value="Home & Garden">Home & Garden</option> 
        <option value="Jewelry & Watches">Jewelry & Watches</option> 
        <option value="Music">Music</option> 
        <option value="Musical Instruments & Gear">Musical Instruments & Gear</option>
        <option value="Pet Supplies">Pet Supplies</option> 
        <option value="Pottery & Glass">Pottery & Glass"</option> 
        <option value="Real Estate">Real Estate</option> 
        <option value="Specialty Services">Specialty Services</option> 
        <option value="Sporting Goods">Sporting Goods</option>
        <option value="Sports Mem, Cards & Fan Shop">Sports Mem, Cards & Fan Shop</option> 
        <option value="Stamps">Stamps</option>
        <option value="Tickets & Experiences">Tickets & Experiences</option> 
        <option value="Toys & Hobbies">Toys & Hobbies</option> 
        <option value="Travel">Travel</option> 
        <option value="Video Games & Consoles">Video Games & Consoles</option> 
    </select>

    {/* <DropdownButton
  alignRight
  title="Dropdown right"
  id="dropdown-menu-align-right"
>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton> */}


        </>)
}

export default Category;


