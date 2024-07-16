import React from 'react'
import classes from './Header.module.css'

import {SlLocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/bi";

import {BiCart} from "react-icons/bi";

const Header = () => {
  return (
    <section>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div className={calasses.delivery}>
              {/* delivery */}
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
            <div className={calasses.order_container}>
              <img src="../../assets/images/usa.png" alt="" />
              <select>
                <option value="">EN</option>
              </select>
            </div>
            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* order */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
              {/* icon */}
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Header