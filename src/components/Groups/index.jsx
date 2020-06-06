import React, { useEffect, useState } from "react";

import { getGroups } from "../../db/api";
import { groupStructure } from "../../db/structure";

import PageData from "../PageData";

const Groups = () => {
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        setGroups(getGroups());
    }, []);

 
    function handleSave(group) {
        
        const newGroup = [...groups];
        if(!group.id){
            group.id = groups.length + 1;
            newGroup.push(group)
        }

        newGroup.forEach((g, index) => {
            if (g.id === group.id) {
                newGroup[index] = group;
            }
        });
        
        setGroups(newGroup);
    }

    function handleDelete(group) {
        
        setGroups(groups.filter((g) => g.id !== group.id))
    }
    

    return (
        <PageData
            info={groups}
            onSave={handleSave}
            onDelete={handleDelete}
            structure={groupStructure}

        />
    );
};

export default Groups;
