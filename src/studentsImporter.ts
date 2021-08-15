import { importDH, importDormitory, importGTB } from './dataImporter';
import { Students } from './Students';

/**
 * @description Imports a group [Vill, Infó, Üzinfó] of students
 * @param filePaths Object containing the excel file paths [DH, Dormitory, GTB]
 * @param major Which major to import [Vill, Infó, Üzinfó]
 * @param imsc If true we will import IMSC students
 * @param german If true we will import German students
 */
export function importStudents(
    filePaths: { DH: string; Dorm: string; GTB: string },
    major: Major,
    imsc: boolean = false,
    german: boolean = false,
) {
    Students.instance.clear();

    const infoDH = importDH(filePaths.DH, major); //TODO: This major -> excel sheet mapping may needs to be changed
    if (!infoDH) {
        //TODO: Create better error handling
        process.exit(-1);
    }
    const infoDorm = importDormitory(filePaths.Dorm, 'Bsc elsőéves felvettek');
    if (!infoDorm) {
        //TODO: Create better error handling
        process.exit(-1);
    }
    const infoGTB = importGTB(filePaths.GTB);
    if (!infoGTB) {
        //TODO: Create better error handling
        process.exit(-1);
    }

    let huColor = new Map<string, string>([
        ['sárga', 'yellow'],
        ['fekete', 'black'],
        ['kék', 'blue'],
        ['fehér', 'white'],
        ['piros', 'red'],
    ]);

    infoDH.forEach((student) => {
        const studentGTB = infoGTB.find((s) => s.neptun === student.neptun);
        const studentDorm = infoDorm.find((s) => s.neptun === student.neptun);

        const color = studentGTB
            ? huColor.get(studentGTB.color)
            : studentDorm
            ? huColor.get(studentDorm.color)
            : 'gray';

        //If a student is doublePassive we don't care about her/him, will be grouped next year
        if (student.doublePassive) return;

        if (imsc) {
            if (!student.imsc) return;
        } else if (german) {
            if (!student.german) return;
        } else if (student.imsc || student.german) return;

        Students.instance.add({
            ...student,
            roomSenior: studentGTB ? studentGTB.roomSenior : '',
            cardSenior: studentGTB ? studentGTB.cardSenior : '',
            color: color ? color : 'gray',
            admissionType: studentDorm ? studentDorm.admissionType : '',
            major: studentDorm ? studentDorm.major : '',
            room: studentDorm ? studentDorm.room : 0,
            score: studentDorm ? studentDorm.score : 0,
            groupId: NaN,
            trueDormitory: !!studentDorm,
        });
    });
}
