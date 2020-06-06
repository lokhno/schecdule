export function getLeftMenu() {
    return [
        { name: "Students", url: "Students" },
        { name: "Professors", url: "Professors" },
        { name: "Courses", url: "Courses" },
        { name: "Groups", url: "Groups" },
        { name: "Subjects", url: "Subjects" },
        { name: "Lecture Hall", url: "LectureHall" },
Корректировка реализации
    ];
}

export function getStudents() {
    let students = [
        { id: 1, fullname: "preson_1", group: 1159 },
        { id: 2, fullname: "preson_2", group: 1159 },
        { id: 3, fullname: "preson_3", group: 1159 },
        { id: 4, fullname: "preson_4", group: 1159 },
        { id: 5, fullname: "preson_5", group: 2159 },
        { id: 6, fullname: "preson_6", group: 2159 },
        { id: 7, fullname: "preson_7", group: 2159 },
        { id: 8, fullname: "preson_8", group: 5156 },
    ];
    return students;
}

export function getProffessors() {}

export function getGroups() {
    let groups = [
        { id: 1, title: 1159, quantity: 30 },
        { id: 2, title: 2159, quantity: 25 },
        { id: 3, title: 5156, quantity: 15 },
    ];
    return groups;
}
