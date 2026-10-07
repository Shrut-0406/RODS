function App() {
  let isTeacher: boolean = false;
  const name: string = "Shrut";
  let age: number = 16;

  let color: string[] = ["pink", "orange", "purple"];

  let teacher = new Person();

  teacher.name = name;
  teacher.age = age;
  teacher.isTeacher = isTeacher;

  let people: Person[] = [
    { name: "Rob", age: 39, isTeacher: true },
    { name: "Jane", age: 28, isTeacher: false },
    { name: "Sam", age: 42, isTeacher: false },
  ];

  return people[0].name;
}

class Person {
  name!: string;
  age!: number;
  isTeacher!: boolean;
  }

export default App