// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}
function updateEmployeeWithKeyAndValue(Objemployee, key, value) {
    const newObj = {...Objemployee};

    newObj [key] = value;
return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee [key] = value;
return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key]
    return employee

}
