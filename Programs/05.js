//Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const stringCheck = (str1) => {
  if (str === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
    return str1;
  }
  else {
    return `Py${str1}`;
  }
}

console.log(stringCheck('thon'));