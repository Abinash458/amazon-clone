import React from 'react';

import { Search, ShoppingBasket } from '@material-ui/icons';

import './header.css';
import amazonLogo from '../../assets/amazon_PNG11.png';

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={amazonLogo} alt="" />
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header