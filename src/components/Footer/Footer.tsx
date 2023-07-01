import React from "react";
import classes from './Footer.module.css';
import {NavLink} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.company}><p className={classes.companyItem}>Ⓒ 2023 - Shhhamsy</p></div>
                <div className={classes.link}>
                    <NavLink to="https://vk.com/shhhamsy" className={classes.vk}>VK</NavLink>
                    <NavLink to="https://t.me/shhhamsy" className={classes.tg}>Telegram</NavLink>
                    <NavLink to="https://github.com/Shamsyyy" className={classes.gh}>Github</NavLink>
                    <NavLink to="mailto:daurwork@mail.ru" className={classes.em}>Email</NavLink>
                    <NavLink to="https://www.linkedin.com/in/shhhamsy-undefined-8a5300271/" className={classes.in}>Linkedin</NavLink>
                </div>

        </div>
    )
}

export default Footer;