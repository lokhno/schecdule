import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Divider,
    IconButton,
    Input,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from '@material-ui/icons/Delete';

import Details from "../Details";
import AddForm from "../AddForm";

const PageData = ({ info, onSave, onDelete, structure }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [addingItem, setAddingItem] = useState(null);

    function handleSelect(data) {
        setSelectedItem(data);
    }

    function handleClose() {
        setSelectedItem(null);
        setAddingItem(null);
    }

    const getInfo = (data) => {
        let info = "";
        structure.forEach((property) => {
            if (property.browsable) {
                info = `${info} ${data[property.internalName]}`;
            }
        });
        return info;
    };

    return (
        <div id="data-page">
            <IconButton
                onClick={() => {
                    setAddingItem(true)
                }}
            >
                <AddCircleIcon />
            </IconButton>
            <List id="data-list">
                {info.map((data) => {
                    return (
                        <ListItem className="sudents-item" key={data.id}>
                            <ListItemText>{getInfo(data)}</ListItemText>
                            <IconButton onClick={() => handleSelect(data)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => onDelete(data)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    );
                })}
            </List>
            {selectedItem && (
                <div className="students-page-edit">
                    <Divider orientation="vertical" />
                    <Details
                        onSave={onSave}
                        onClose={handleClose}
                        itemProp={selectedItem}
                        structure={structure}
                    />
                </div>
            )}
            {addingItem && (
                <div className="students-page-edit">
                    <Divider orientation="vertical" />
                    <AddForm
                        onSave={onSave}
                        onClose={handleClose}
                        structure={structure}
                    />
                </div>
            )}
        </div>
    );
};

export default PageData;
