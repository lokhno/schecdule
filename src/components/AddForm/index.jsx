import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Input,
} from "@material-ui/core";

export default function AddForm({ onClose, onSave, structure }) {
    const [item, setItem] = useState({});

    return (
        <List>
            <ListItem>
                <ListItemText>Создание</ListItemText>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
            {structure.map((property) => {
                if (property.editable) {
                    return (
                        <div key={property.internalName}>
                            <ListItem>
                                <ListItemText>
                                    {property.displayName}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <Input
                                    onChange={(event) => {
                                        setItem({
                                            ...item,
                                            [property.internalName]:
                                                event.target.value,
                                        });
                                    }}
                                    value={item[property.internalName] || ''}
                                />
                            </ListItem>
                        </div>
                    );
                }
            })}

            <IconButton
                onClick={() => {
                    onSave(item);
                    onClose();
                }}
            >
                <SaveIcon />
            </IconButton>
        </List>
    );
}
