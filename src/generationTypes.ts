export const generationTypes: GenerationType[] = [
    {
        name: 'Info General',
        courseCodes: [
            'I01',
            'I02',
            'I03',
            'I04',
            'I05',
            'I06',
            'I07',
            'I08',
            'I09',
            'I10',
            'I11',
            'I12',
            'I13',
            'I14',
            'I15',
            'I16',
            'I17',
            'I18',
        ],
        major: 'Infó',
        imsc: false,
        german: false,
        groupCount: 18,
        allowMultipleGirlRooms: false,
    },
    {
        name: 'Info IMSC',
        courseCodes: ['I_IMSc1', 'I_IMSc2', 'I_IMSc3'],
        major: 'Infó',
        imsc: true,
        german: false,
        groupCount: 3,
        allowMultipleGirlRooms: true,
    },
    {
        name: 'Info German',
        courseCodes: ['INÉMET'],
        major: 'Infó',
        imsc: false,
        german: true,
        groupCount: 1,
        allowMultipleGirlRooms: false,
    },
    {
        name: 'Vill General',
        courseCodes: ['V01', 'V02', 'V03', 'V04', 'V07 (V05)', 'V08 (V06)', 'V09 (V07)', 'V10 (V08)'],
        major: 'Vill',
        imsc: false,
        german: false,
        groupCount: 8,
        allowMultipleGirlRooms: false,
    },
    {
        name: 'Vill IMSC',
        courseCodes: ['V_IMSc1', 'V_IMSc2'],
        major: 'Vill',
        imsc: true,
        german: false,
        groupCount: 2,
        allowMultipleGirlRooms: false,
    },
    {
        name: 'Vill German',
        courseCodes: ['VNÉMET'],
        major: 'Vill',
        imsc: false,
        german: true,
        groupCount: 1,
        allowMultipleGirlRooms: false,
    },
    {
        name: 'Bprof General',
        courseCodes: ['BPI01', 'BPI07 (BPI02)', 'BPI08 (BPI03)'],
        major: 'Üzinfó',
        imsc: false,
        german: false,
        groupCount: 3,
        allowMultipleGirlRooms: true,
    },
];
