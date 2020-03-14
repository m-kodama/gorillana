export const color = {
    primary: "#0F4C81",
    secondary: "#658DC6",
    accent: "#F5B895",
    baseCorn: "#F2D6AE",
    baseBrown: "#A58D7F",
    baseBlue: "#B5C7D3",
    baseGrey: "#84898C",
    text: "#333333",
};

export type StudentProperties = {
    studentId: number;
    studentNumber: string;
    lastName: string;
    firstName: string;
    faculityId: number;
    classId: number;
    entranceYear: string;
};

export const defaultStudent: StudentProperties = {
    studentId: -1,
    studentNumber: "",
    lastName: "",
    firstName: "",
    faculityId: 0,
    classId: 0,
    entranceYear: "2019"
};