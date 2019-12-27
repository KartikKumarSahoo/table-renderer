export const generateClassStats = (data = {}) => {
  return Object.keys(data).reduce((acc, klassName) => {
    const classStat = { Class: klassName };
    const students = data[klassName];

    classStat.Students = students.length;
    const passedStudents = students.filter(
      student => student.Status === "pass"
    );
    classStat.Pass = passedStudents.length;
    classStat.Fail = students.length - passedStudents.length;

    acc.push(classStat);
    return acc;
  }, []);
};
