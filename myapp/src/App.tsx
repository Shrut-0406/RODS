function App() {
  //UI
  return (
    <form style={{
      background: "linear-gradient(90deg, #f6d365, #fda085) padding-box" ,
      width: "300px",
      margin: "auto",
      padding: "20px",
      borderRadius: "10px",
      color: "black",
      fontWeight: "500",
    }}>
      <div>
        <label>Name: </label>
        <input id="name" required style={{
          backgroundColor: "#e3fff6 ",
          border: "3px solid #0f9369",
          color: "black",
          borderRadius: "5px",
        }}></input>
      </div>
      <div>
        <label>Age: </label>
        <input type="number" id="age" min="0" max="120" required style={{
          backgroundColor: "#e3fff6 ",
          border: "3px solid #0f9369",
          color: "black",
          borderRadius: "5px",
        }}></input>
      </div>
      <div>
        <button onClick={submitButtonOnClick} style={{ 
          backgroundColor: "#43cea2 ",
          border: "3px solid #0f9369",
          color: "white",
          padding: "5px 30px",
          margin: "5px 0",
          borderRadius: "5px",
          }}>
          Submit
        </button>
      </div>
    </form>
  )
}

function submitButtonOnClick() {
  let name = document.querySelector<HTMLInputElement>("#name");
  let age = document.querySelector<HTMLInputElement>("#age");

  if (name && age && parseInt(age.value) >= 0 && parseInt(age.value) <= 120) {
    alert("Name: " + name.value + " | Age: " + age.value);
  }
}




export default App

// function App() {
//   let isTeacher: boolean = false;
//   const name: string = "Shrut";
//   let age: number = 16;

//   let teacher = new Person();

//   teacher.name = name;
//   teacher.age = age;
//   teacher.isTeacher = isTeacher;



//   let people: Person[] = [
//     { name: teacher.name, age: teacher.age, isTeacher: teacher.isTeacher },
//     { name: "Jane", age: 28, isTeacher: false },
//     { name: "Sam", age: 42, isTeacher: false },
//   ];

//   let message: string = "Start";

//   let score: number = 70;
//   if (score >= 60) {
//     message = "You passed!";
//   } else {
//     message = "You failed!";
//   }

//   let isActive: boolean = true;

//   while (isActive) {
//     message = "Loop";
//     isActive = false;
//   }
  
//   let loops : number = 0;
//   for (; loops < 3;) {
//     loops = loops + 1;
//   }

//   //Loop #1 - start --> Loops = 0, 0 < 3 = true, end --> loops = 1
//   //Loop #2 - start --> Loops = 1, 1 < 3 = true, end --> loops = 2
//   //Loop #3 - start --> Loops = 2, 2 < 3 = true, end --> loops = 3
//   //Loop #4 - start --> Loops = 3, 3 < 3 = false, end --> loops = 3

//   let product: number = Multiply(8, 7);
// return 
// }

// class Person {
//   name!: string;
//   age!: number;
//   isTeacher!: boolean;
//   }

// function Multiply(number1: number, number2: number): number {
//     return number1 * number2;
// }

// function printScore(parameter: string): string {
//   try {
//     let score: number = Number(parameter);

//     if (isNaN(score)) {
//       throw new Error("not a number!");
//     }

//     return String(score);
//   } catch (error) {
//     return String(error);
//   }
// }

// export default App