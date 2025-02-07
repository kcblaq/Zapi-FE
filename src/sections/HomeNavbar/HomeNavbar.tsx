import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import { useContextProvider } from "../../contexts/ContextProvider";
import Vector from "../../assets/images/vector.png";
import "./HomeNavbar.css";

//images
import ZapiHomeLogo from "../../assets/images/ZapiHomeLogo.png";

const HomeNavbar: React.FC = () => {
    const classes = useStyles()
    const [mobileScreen, setMobileScreen] = useState(false)
    const [style, setStyle] = useState("mobileLinks") // ! add types here
    const { handleClicked } = useContextProvider()

    const handleClick = () => {
        if (mobileScreen) {
            setMobileScreen(false)
          } else {
            setMobileScreen(true)
          }
    }
    return (
        <>
            <div className={classes.NavBar}>
                <div className={classes.logo}>
                    <img src={ZapiHomeLogo} alt="zapi-Home" />
                    <span className={classes.zapi}>Z-API</span>
                    <img className={classes.vector} src={Vector} alt="vector-img" />
                </div>
                <div className={mobileScreen ? classes.mobileLinks : classes.links}>
                    <ul>
                        {/*  ! Use the NavLink instead of Link
                        * There is an "isActive" prop available in NavLink that allows conditional rendering
                        */}
                        <li className={classes.active}><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">API hub</Link></li>
                        <li><Link to="#">Pricing</Link></li>
                        <li><Link to="#">Documentation</Link></li>
                        <li><button onClick={() => handleClicked('login')}>Login</button></li>
                    </ul>
                    <div className={classes.signup}><Link to="/signup">Sign up</Link></div>
                </div>
                <div className={classes.hamburger} onClick={handleClick}>
                    <Menu />
                </div>
            </div>
            <div className={style}>
                <ul className={classes.mobileLinks}>
                    <li className={classes.active}><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">API hub</Link></li>
                    <li><Link to="#">Pricing</Link></li>
                    <li><Link to="#">Documentation</Link></li>
                    <li><button onClick={() => handleClicked('login')}>Login</button></li>
                </ul>
                <div className={classes.signup}><Link to="/signup">Sign up</Link></div>
            </div>
        </>
    )
}

export default HomeNavbar

const useStyles = makeStyles({
    NavBar: {
        position: "fixed",
        left: "0rem",
        right: "0rem",
        zIndex: 30,
        height: "112px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#081F4A",
        boxShadow: "0px 1px 15px rgba(7, 27, 133, 0.15)",
        padding: "0 5rem",
        "@media screen and (max-width: 1024px)": {
            padding: "1rem 2rem"
        },
        "@media screen and (max-width: 375px)": {
            padding: "1rem 1rem"
        }
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    zapi: {
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: "1.5rem"
    },
    vector: {
        position: "absolute",
        left: "130px",
        top: "-2px",
        filter: "drop-shadow(0px 1px 15px rgba(0, 0, 0, 0.1))",
    },
    links: {
        display: "flex",
        gap: "1.5rem",
        "& ul": {
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            "& li": {
                listStyle: "none",
                "& a": {
                    textDecoration: "none",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#FFFFFF",
                },
                "& button": {
                    textDecoration: "none",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                }
            }
        },
        "@media screen and (max-width: 800px)": {
            display: "none"
        }
    },
    active: {
        borderBottom: "2px solid #FFEA00"
    },
    hamburger: {
        display: "none",
        cursor: "pointer",
        fontSize: "2rem",
        color: "#FFFFFF",
        zIndex: "1000",
        "@media screen and (max-width: 800px)": {
            display: "block",
        }
    },
    mobileLinks: {
        // marginTop: "32rem",
        position: "absolute",
        top: "100%",
        width: "100%",
        background: "#ccc",
        padding: "2rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        "& ul": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
        },
        "& li": {
            listStyle: "none",
            "& a": {
                textDecoration: "none",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1rem",
                color: "#000000",
            }
        },
        "& button": {
            textDecoration: "none",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "1rem",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            outline: "none",
        }
    },
    signup: {
        borderRadius: "4px",
        padding: ".5rem 1rem",
        background: "#FFEA00",
        fontWeight: 500,
        fontSize: "1rem",
        color: "#081F4A",
    }

})