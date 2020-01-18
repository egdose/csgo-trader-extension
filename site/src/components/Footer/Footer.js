import React from 'react';
import {Link} from "react-router-dom";
import NewTabLink from "..//NewTabLink/NewTabLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';

const footer = () => {
    return  (
        <footer className='buildingBlock'>
            <p>
                A
                <NewTabLink to='https://www.gergely-szabo.com/'> Gergely Szabo </NewTabLink>
                project © {new Date().getFullYear()}
            </p>
            <div>
                <BrandIcon link='https://github.com/gergelyszabo94/csgo-trader-extension' brand='github'/>
                <BrandIcon link='https://steamcommunity.com/groups/csgotraderextension' brand='steam'/>
                <BrandIcon link='https://chrome.google.com/webstore/detail/csgo-trader-steam-trading/kaibcgikagnkfgjnibflebpldakfhfih' brand='chrome'/>
                <BrandIcon link='https://addons.mozilla.org/en-US/firefox/addon/csgo-trader-steam-trading/' brand='firefox'/>
            </div>
            <span className='footerNavLink'>
                <Link to='/privacy/'>Privacy</Link>
            </span>
        </footer>
    );
};

const BrandIcon = (props) => {
    return (
        <span className='brandIcon'>
            <NewTabLink to={props.link}>
                <FontAwesomeIcon icon={['fab', props.brand]} />
            </NewTabLink>
        </span>
    );
};

export default footer;