//for dataTypes used across multiple files
type dataType = {
    id: string,
    title: string,
};

const DATA: dataType[] = [
{id: '1', title: 'First'},
{id: '2', title: 'Second'},
{id: '3', title: 'Third'},
{id: '4', title: 'Fourth'},
];

export {dataType, DATA};