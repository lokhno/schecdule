import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { getLeftMenu } from "../../db/api";

import PersonIcon from "@material-ui/icons/Person";

import "./index.css";

const LeftMenu = () => {
    const [leftPanelLinks, setLeftPanelLinks] = useState([]);
    useEffect(() => {
        setLeftPanelLinks(getLeftMenu());
    }, []);

    return (
        <>
            <List>
                {leftPanelLinks.map((leftPanelLink, index) => {
                    return (
                        <ListItem
                            className="menu-item"
                            key={index}
                            button
                            component={NavLink}
                            to={`/${leftPanelLink.url}`}
                        >
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText>{leftPanelLink.name}</ListItemText>
                        </ListItem>
                    );
                })}
            </List>
            <Divider orientation="vertical" />
        </>
    );
};

export default LeftMenu;
