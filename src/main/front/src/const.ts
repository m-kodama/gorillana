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