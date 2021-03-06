import React, {useState} from "react";

import {NavLink} from 'react-router-dom';

import {Tabs, Tab, TabList, TabPanel} from "react-tabs";

import Logo from './img/Logo.png';
import coolicon from './img/coolicon.png';
import Search from './img/Search.png';

import Australia from './img/countries/Australia.png';
import Austria from './img/countries/Austria.png';
import Brazil from './img/countries/Brazil.png';
import Bulgaria from './img/countries/Bulgaria.png';
import Chech from './img/countries/Chech.png';
import Cube from './img/countries/Cube.png';
import Denmark from './img/countries/Denmark.png';
import Greece from './img/countries/Greece.png';
import Egypt from './img/countries/Egypt.png';
import Hungary from './img/countries/Hungary.png';
import Poland from './img/countries/Poland.png';
import Portugal from './img/countries/Portugal.png';
import Russia from './img/countries/Russia.png';
import Spain from './img/countries/Spain.png';
import Turkey from './img/countries/Turkey.png';

import classes from "./Header.module.css";

const HeaderMobile = () => {

    const [tabIndex, setTabIndex] = useState(1);

    const onClickMenuMobile = () => {


        const button: any = document.getElementById('button_mobile');
        const menu: any = document.getElementById('main_mobile');

        let buttonMobileState;
        let menuMobileState;

        if (button.classList.contains(classes.menu_opened)) {
            buttonMobileState = 'opened';
            menuMobileState = 'opened';
        }

        if (button.classList.contains(classes.menu_closed)) {
            buttonMobileState = 'closed';
            menuMobileState = 'closed';
        }

        switch (buttonMobileState) {
            case 'closed': {
                // console.log('Closed');
                button.classList.replace(classes.menu_closed, classes.menu_opened);
                menu.classList.replace(classes.main_closed, classes.main_opened);
                break;
            }

            case 'opened': {
                // console.log('Opened');
                button.classList.replace(classes.menu_opened, classes.menu_closed);
                menu.classList.replace(classes.main_opened, classes.main_closed);
                break;
            }
        }
    }

    return (
        <>
            <div className={classes.header_mobile}>
                <button onClick={onClickMenuMobile} className={`${classes.menu} ${classes.menu_closed}`}
                        id="button_mobile"></button>
                <a href="#" className={classes.logo}>
                    <img className={classes.logo} src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className={classes.main_mobile + ' ' + classes.main_closed} id="main_mobile">
                <Tabs
                    className={classes.reactTabs}
                    forceRenderTabPanel
                    selectedTabPanelClassName={classes.reactTabsTabPanelSelected}
                    selectedTabClassName={classes.tab__selected}
                >
                    <TabList>
                        <div className={classes.tabsCategories}>
                            <Tab className={classes.tab}>
                                ??????????????
                            </Tab>
                            <Tab className={classes.tab}>
                                ??????????????
                            </Tab>
                            <Tab className={classes.tab}>
                                ????????????????????????
                            </Tab>
                            <Tab className={classes.tab}>
                                ??????????
                            </Tab>
                            <div className={classes.tabGroupSeparator}></div>
                            <Tab className={classes.tab}>
                                ????????????
                            </Tab>
                            <Tab className={classes.tab}>
                                ????????????
                            </Tab>
                            <Tab className={classes.tab}>
                                ??????????????????????????????????????????
                            </Tab>
                        </div>
                    </TabList>

                    <TabPanel className={classes.reactTabsTabPanel + ' ' + classes.categoriesMobile}>
                        <h3>??????????????</h3>
                        <ul>
                            <li><NavLink onClick={onClickMenuMobile} to={'/'}>???????????? ???????? </NavLink></li>
                            <li><a href="#">???????????? ????????</a></li>
                            <li><a href="#">?????????????????????????????????????????? </a></li>
                            <li><a href="#">???????????? ?? ?????????????????????? </a></li>
                            <li><NavLink onClick={onClickMenuMobile} to={'/about'}>?? ?????? </NavLink></li>
                        </ul>
                    </TabPanel>
                    <TabPanel className={classes.reactTabsTabPanel}>
                        <h3>
                            ??????????????
                        </h3>
                    </TabPanel>
                    <TabPanel className={classes.reactTabsTabPanel}>
                        <h3>
                            ????????????????????????
                        </h3>
                    </TabPanel>
                    <TabPanel className={classes.reactTabsTabPanel}>
                        <h3>
                            ??????????
                        </h3>
                    </TabPanel>
                    <TabPanel className={classes.reactTabsTabPanel}>
                        <h3>
                            ????????????
                        </h3>
                        <div className={classes.tabCountries}>
                            <div className={classes.tabCountries__row}>
                                <div className={classes.tabCountries__country}>
                                    <img src={Australia} alt=""/>
                                    <a href="#">??????????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Bulgaria} alt=""/>
                                    <a href="#">????????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Greece} alt=""/>
                                    <a href="#">????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Cube} alt=""/>
                                    <a href="#">????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Poland} alt=""/>
                                    <a href="#">????????????</a>
                                </div>
                            </div>
                            <div className={classes.tabCountries__row}>
                                <div className={classes.tabCountries__country}>
                                    <img src={Austria} alt=""/>
                                    <a href="#">??????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Brazil} alt=""/>
                                    <a href="#">????????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Denmark} alt=""/>
                                    <a href="#">??????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Spain} alt=""/>
                                    <a href="#">??????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Portugal} alt=""/>
                                    <a href="#">????????????????????</a>
                                </div>
                            </div>
                            <div className={classes.tabCountries__row}>
                                <div className={classes.tabCountries__country}>
                                    <img src={Russia} alt=""/>
                                    <a href="#">????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Turkey} alt=""/>
                                    <a href="#">????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Chech} alt=""/>
                                    <a href="#">??????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Hungary} alt=""/>
                                    <a href="#">??????????????</a>
                                </div>
                                <div className={classes.tabCountries__country}>
                                    <img src={Egypt} alt=""/>
                                    <a href="#">????????????</a>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={classes.reactTabsTabPanel}>
                        <h3>
                            ????????????
                        </h3>
                    </TabPanel>
                    <TabPanel className={classes.reactTabsTabPanel}>
                        <h3>
                            ??????????????????????????????????????????
                        </h3>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}


const Header = () => {

    const onClickMenu = () => {
        const button: any = document.getElementById('button_desktop');
        const menu: any = document.getElementById('main_desktop');

        // console.log(button);
        // console.log(menu);

        let buttonState;
        let menuState;

        if (button.classList.contains(classes.menu_opened)) {
            buttonState = 'opened';
            menuState = 'opened';
        }

        if (button.classList.contains(classes.menu_closed)) {
            buttonState = 'closed';
            menuState = 'closed';
        }

        switch (buttonState) {
            case 'closed': {
                // console.log('Closed');
                button.classList.replace(classes.menu_closed, classes.menu_opened);
                menu.classList.replace(classes.main_closed, classes.main_opened);
                break;
            }

            case 'opened': {
                // console.log('Opened');
                button.classList.replace(classes.menu_opened, classes.menu_closed);
                menu.classList.replace(classes.main_opened, classes.main_closed);
                break;
            }
        }
    }


    return (
        <header>
            <HeaderMobile/>

            <div className={classes.header_desktop} id="header">
                <button onClick={onClickMenu} className={`${classes.menu} ${classes.menu_closed}`}
                        id="button_desktop"></button>
                <a href="#" className={classes.logo}>
                    <img className={classes.logo} src={Logo} alt="Logo"/>
                </a>
                <a className={`${classes.donateButton} ${classes.headerIcon}`} href="#">
                    <div className={classes.donateButtonText}>
                        ????????????????????????
                    </div>
                </a>
                <a href="#" className={classes.headerIcon}>
                    <img className="account__img" src={coolicon} alt="account"/>
                </a>
                <a href="#" className={classes.headerIcon}>
                    <img className="search__img" src={Search} alt="Search"/>
                </a>
            </div>
            <div className={`${classes.main_desktop} ${classes.main_closed} `} id="main_desktop">
                <div className={classes.categories}>
                    <h3>??????????????</h3>
                    <ul>
                        <li><NavLink onClick={onClickMenu} to={'/'}>???????????? ???????? </NavLink></li>
                        <li><a href="#">???????????? ????????</a></li>
                        <li><a href="#">?????????????????????????????????????????? </a></li>
                        <li><a href="#">???????????? ?? ?????????????????????? </a></li>
                        <li><NavLink onClick={onClickMenu} to={'/about'}>?? ?????? </NavLink></li>
                    </ul>
                </div>
                <div className={classes.countries}>
                    <ul>
                        <li><a className={classes.actvie}>????????????</a></li>
                        <li><a>????????????</a></li>
                        <li><a>??????????????????????????????????????????</a></li>
                    </ul>
                    <div className={classes.countries__rows}>
                        <div className={classes.countries__row}>
                            <div className={classes.countries__country}>
                                <img src={Australia} alt=""/>
                                <a href="#">??????????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Bulgaria} alt=""/>
                                <a href="#">????????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Greece} alt=""/>
                                <a href="#">????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Cube} alt=""/>
                                <a href="#">????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Poland} alt=""/>
                                <a href="#">????????????</a>
                            </div>
                        </div>
                        <div className={classes.countries__row}>
                            <div className={classes.countries__country}>
                                <img src={Austria} alt=""/>
                                <a href="#">??????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Brazil} alt=""/>
                                <a href="#">????????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Denmark} alt=""/>
                                <a href="#">??????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Spain} alt=""/>
                                <a href="#">??????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Portugal} alt=""/>
                                <a href="#">????????????????????</a>
                            </div>
                        </div>
                        <div className={classes.countries__row}>
                            <div className={classes.countries__country}>
                                <img src={Russia} alt=""/>
                                <a href="#">????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Turkey} alt=""/>
                                <a href="#">????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Chech} alt=""/>
                                <a href="#">??????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Hungary} alt=""/>
                                <a href="#">??????????????</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Egypt} alt=""/>
                                <a href="#">????????????</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.countries__all}>
                        <a href="#">?????? ???????????? ????????</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
