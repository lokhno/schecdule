import React, { useState, useEffect } from "react";

import { getStudents } from "../../db/api";
import { studentStructure } from "../../db/structure";

import PageData from "../PageData";

import "./index.css";

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(getStudents());
    }, []);

    function handleSave(student) {
        const newStudents = [...students];

        if(!student.id){
            student.id = students.length + 1;
            newStudents.push(student)
        }

        newStudents.forEach((person, index) => {
            if (person.id === student.id) {
                newStudents[index] = student;
            }
        });

        setStudents(newStudents);
    }

    function handleDelete(student) {
        setStudents(students.filter((person) => person.id !== student.id))
    }
    

    return (
        <>
            <PageData
                info={students}
                onSave={handleSave}
                onDelete={handleDelete}
                structure={studentStructure}
            />
        </>
    );
};

export default Students;
