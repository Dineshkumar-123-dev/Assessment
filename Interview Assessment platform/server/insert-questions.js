const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Question = require("./models/question.model");
// ========== Paste the 50 MERN questions here ==========
const mernquestions = [
  {
    domain: "MERN",
    questionText: "What does MERN stand for?",
    options: {
      A: "MongoDB, Express, React, Node",
      B: "MongoDB, Ember, React, Node",
      C: "MySQL, Express, React, Node",
      D: "MongoDB, Express, Redux, Node"
    },
    correctAnswer: "A"
  },
  {
    domain: "MERN",
    questionText: "Which of the following is a NoSQL database?",
    options: {
      A: "MySQL",
      B: "PostgreSQL",
      C: "MongoDB",
      D: "SQLite"
    },
    correctAnswer: "C"
  },
  {
  domain: "MERN",
  questionText: "What does MERN stand for?",
  options: {
    A: "MongoDB, Express, React, Node",
    B: "MongoDB, Ember, React, Node",
    C: "MySQL, Express, React, Node",
    D: "MongoDB, Express, Redux, Node"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "Which of the following is a NoSQL database?",
  options: {
    A: "MySQL",
    B: "PostgreSQL",
    C: "MongoDB",
    D: "SQLite"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which function is used to create a server in Node.js?",
  options: {
    A: "http.createServer()",
    B: "express.createServer()",
    C: "create.Server()",
    D: "express()"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "Which command is used to initialize a new Node.js project?",
  options: {
    A: "npm start",
    B: "npm install",
    C: "npm init",
    D: "node init"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which of the following is used for routing in React?",
  options: {
    A: "react-router-dom",
    B: "redux-router",
    C: "react-path",
    D: "react-route"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "How can data be sent from a child to parent component in React?",
  options: {
    A: "Using useEffect",
    B: "Using props",
    C: "Using callback functions",
    D: "Using context"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which hook is used for side effects in React?",
  options: {
    A: "useState",
    B: "useRef",
    C: "useEffect",
    D: "useCallback"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which middleware is used in Express for parsing JSON?",
  options: {
    A: "bodyParser.json()",
    B: "express.json()",
    C: "app.useJson()",
    D: "parse.json()"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "Which command installs all dependencies from package.json?",
  options: {
    A: "npm install",
    B: "npm i",
    C: "npm get",
    D: "npm install-all"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "Which command starts a React development server?",
  options: {
    A: "npm start",
    B: "npm dev",
    C: "npm run",
    D: "npm build"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "How do you define a state variable in React?",
  options: {
    A: "const [state, setState] = useState()",
    B: "const state = useState()",
    C: "this.state = {}",
    D: "useEffect()"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "What is the purpose of Redux in a MERN stack app?",
  options: {
    A: "Database operations",
    B: "Server rendering",
    C: "State management",
    D: "Backend API handling"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which command creates a new React app?",
  options: {
    A: "npx create-react-app myapp",
    B: "npm create app",
    C: "create-react-app",
    D: "npx react-create"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "What HTTP method is used to create data?",
  options: {
    A: "GET",
    B: "POST",
    C: "PUT",
    D: "DELETE"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "What is JSX?",
  options: {
    A: "JavaScript XML",
    B: "Java XML",
    C: "JS export",
    D: "None"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "How do you send data in Express using a POST request?",
  options: {
    A: "req.params",
    B: "req.get",
    C: "req.body",
    D: "req.query"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which of these can be used to interact with MongoDB in Node.js?",
  options: {
    A: "Mongoose",
    B: "Sequelize",
    C: "MySQL",
    D: "Knex"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "How do you define a MongoDB schema in Mongoose?",
  options: {
    A: "new mongoose.Collection()",
    B: "mongoose.Schema()",
    C: "mongo.Schema()",
    D: "mongoose.Model()"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "Which tool is used to test API endpoints?",
  options: {
    A: "React DevTools",
    B: "Redux",
    C: "Postman",
    D: "Chrome"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which of the following is NOT a React lifecycle method?",
  options: {
    A: "componentDidMount",
    B: "shouldComponentUpdate",
    C: "useEffect",
    D: "componentWillPost"
  },
  correctAnswer: "D"
},
{
  domain: "MERN",
  questionText: "Which port does the default React app run on?",
  options: {
    A: "3000",
    B: "5000",
    C: "8000",
    D: "27017"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "What does `useState` return?",
  options: {
    A: "State object only",
    B: "Setter function only",
    C: "Array with state and setter",
    D: "Boolean"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which of the following is used to handle routing in Express?",
  options: {
    A: "Router",
    B: "RouteHandler",
    C: "PathMap",
    D: "Switch"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "Which command installs Mongoose in Node.js?",
  options: {
    A: "npm i mongo",
    B: "npm install mongoose",
    C: "npm i mongodb",
    D: "npm install mongoDB"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "How to connect MongoDB with Mongoose?",
  options: {
    A: "mongoose.connect(DB_URL)",
    B: "mongoose.link(DB_URL)",
    C: "mongoose.dbConnect(DB_URL)",
    D: "mongoose.attach(DB_URL)"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "Which of the following is a build tool for bundling React apps?",
  options: {
    A: "Parcel",
    B: "Webpack",
    C: "Gulp",
    D: "All of the above"
  },
  correctAnswer: "D"
},
{
  domain: "MERN",
  questionText: "Which React hook is used for lifecycle methods?",
  options: {
    A: "useLifecycle",
    B: "useMethod",
    C: "useEffect",
    D: "useMemo"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "In MongoDB, which command lists all collections?",
  options: {
    A: "show dbs",
    B: "show tables",
    C: "show collections",
    D: "list collections"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "How do you serve static files in Express?",
  options: {
    A: "express.static('folder')",
    B: "express.serve('folder')",
    C: "app.host('folder')",
    D: "res.sendStatic('folder')"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "Which of the following is used for authentication in Node?",
  options: {
    A: "jsonwebtoken",
    B: "bcrypt",
    C: "express-jwt",
    D: "All of the above"
  },
  correctAnswer: "D"
},
{
  domain: "MERN",
  questionText: "Which of the following is not a MongoDB data type?",
  options: {
    A: "String",
    B: "Integer",
    C: "Boolean",
    D: "Character"
  },
  correctAnswer: "D"
},
{
  domain: "MERN",
  questionText: "Which React feature allows UI updates without full page reload?",
  options: {
    A: "SPA",
    B: "SSR",
    C: "CSR",
    D: "DOM Injection"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "What is the default port of MongoDB?",
  options: {
    A: "3000",
    B: "5000",
    C: "8080",
    D: "27017"
  },
  correctAnswer: "D"
},
{
  domain: "MERN",
  questionText: "Which operator is used to update documents in MongoDB?",
  options: {
    A: "$add",
    B: "$update",
    C: "$set",
    D: "$push"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "How do you hash passwords in Node.js?",
  options: {
    A: "crypto.hash()",
    B: "bcrypt.hash()",
    C: "md5.hash()",
    D: "jwt.hash()"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "How do you define routes in Express?",
  options: {
    A: "app.routes()",
    B: "router.get()",
    C: "express.routes()",
    D: "server.route()"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "How do you create components in React?",
  options: {
    A: "Classes or Functions",
    B: "Only Classes",
    C: "Only Functions",
    D: "Variables"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "How do you export a component in React?",
  options: {
    A: "exports Component",
    B: "export Component",
    C: "export default Component",
    D: "module.Component"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which MongoDB function returns all documents?",
  options: {
    A: "find()",
    B: "fetch()",
    C: "get()",
    D: "list()"
  },
  correctAnswer: "A"
},
{
  domain: "MERN",
  questionText: "What does `res.json()` do in Express?",
  options: {
    A: "Sends plain text",
    B: "Redirects URL",
    C: "Sends JSON response",
    D: "Sends HTML"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which lifecycle method is replaced by `useEffect`?",
  options: {
    A: "componentDidMount",
    B: "componentWillMount",
    C: "componentWillUpdate",
    D: "All of the above"
  },
  correctAnswer: "D"
},
{
  domain: "MERN",
  questionText: "What is the purpose of `key` in React lists?",
  options: {
    A: "Styling",
    B: "Routing",
    C: "Re-render optimization",
    D: "State management"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "How do you send headers in an Express response?",
  options: {
    A: "res.sendHeader()",
    B: "res.set()",
    C: "res.header()",
    D: "res.addHeader()"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "What does `npm run build` do in React?",
  options: {
    A: "Starts dev server",
    B: "Cleans project",
    C: "Builds optimized production files",
    D: "Installs packages"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "How do you create an Express app?",
  options: {
    A: "const app = new express()",
    B: "app = express()",
    C: "const app = express()",
    D: "express.createApp()"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which hook is used to memoize a function?",
  options: {
    A: "useEffect",
    B: "useState",
    C: "useCallback",
    D: "useMemo"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "What is the purpose of `useRef`?",
  options: {
    A: "Manage state",
    B: "Track DOM elements or persistent values",
    C: "Trigger re-renders",
    D: "Make API calls"
  },
  correctAnswer: "B"
},
{
  domain: "MERN",
  questionText: "Which is not a core part of MERN?",
  options: {
    A: "MongoDB",
    B: "Express",
    C: "Redux",
    D: "React"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "Which command installs dependencies listed in package.json?",
  options: {
    A: "npm init",
    B: "npm add",
    C: "npm install",
    D: "npm start"
  },
  correctAnswer: "C"
},
{
  domain: "MERN",
  questionText: "How do you create a new MongoDB database?",
  options: {
    A: "use dbname",
    B: "create db dbname",
    C: "new db dbname",
    D: "init dbname"
  },
  correctAnswer: "A"
}
];

const javaquestions = [
{
domain: "Java",
questionText: "Which of these is not a Java feature?",
options: {
A: "Object-oriented",
B: "Use of pointers",
C: "Portable",
D: "Dynamic"
},
correctAnswer: "B"
},
{
domain: "Java",
questionText: "Java was developed by?",
options: {
A: "James Gosling",
B: "Dennis Ritchie",
C: "Bjarne Stroustrup",
D: "Guido van Rossum"
},
correctAnswer: "A"
},
{
domain: "Java",
questionText: "Which keyword is used to inherit a class in Java?",
options: {
A: "implements",
B: "inherits",
C: "extends",
D: "override"
},
correctAnswer: "C"
},
{
domain: "Java",
questionText: "What is the size of int in Java?",
options: {
A: "2 bytes",
B: "4 bytes",
C: "8 bytes",
D: "Depends on system"
},
correctAnswer: "B"
},
{
domain: "Java",
questionText: "Which method must be implemented by all threads?",
options: {
A: "wait()",
B: "run()",
C: "start()",
D: "sleep()"
},
correctAnswer: "B"
},
{
domain: "Java",
questionText: "Which exception is thrown when a division by zero occurs?",
options: {
A: "IOException",
B: "NullPointerException",
C: "ArithmeticException",
D: "NumberFormatException"
},
correctAnswer: "C"
},
{
domain: "Java",
questionText: "Which package contains the Random class?",
options: {
A: "java.util",
B: "java.lang",
C: "java.io",
D: "java.net"
},
correctAnswer: "A"
},
{
domain: "Java",
questionText: "Which of the following is not an access modifier?",
options: {
A: "private",
B: "protected",
C: "void",
D: "public"
},
correctAnswer: "C"
},
{
domain: "Java",
questionText: "Java uses which memory model?",
options: {
A: "Stack-based",
B: "Register-based",
C: "Heap-based",
D: "None of the above"
},
correctAnswer: "A"
},
{
domain: "Java",
questionText: "Which class is the superclass of all classes in Java?",
options: {
A: "Object",
B: "Class",
C: "Main",
D: "System"
},
correctAnswer: "A"
},
{
    domain: "Java",
    questionText: "Which of these is not a Java feature?",
    options: {
      A: "Object-oriented",
      B: "Use of pointers",
      C: "Portable",
      D: "Dynamic"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which of the following is not a primitive data type in Java?",
    options: {
      A: "int",
      B: "Float",
      C: "boolean",
      D: "char"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which method is the entry point of a Java program?",
    options: {
      A: "start()",
      B: "main()",
      C: "run()",
      D: "init()"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "What is the default value of a local variable?",
    options: {
      A: "null",
      B: "0",
      C: "Depends on data type",
      D: "No default value"
    },
    correctAnswer: "D"
  },
  {
    domain: "Java",
    questionText: "Which keyword is used to prevent inheritance?",
    options: {
      A: "static",
      B: "final",
      C: "abstract",
      D: "private"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which operator is used for object reference comparison?",
    options: {
      A: "==",
      B: "equals()",
      C: "!=",
      D: "instanceof"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "Which package contains the Scanner class?",
    options: {
      A: "java.util",
      B: "java.lang",
      C: "java.io",
      D: "java.net"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "Which exception is thrown when a divided by zero occurs?",
    options: {
      A: "NullPointerException",
      B: "ArithmeticException",
      C: "IOException",
      D: "NumberFormatException"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements?",
    options: {
      A: "HashMap",
      B: "ArrayList",
      C: "LinkedList",
      D: "HashSet"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which keyword is used to inherit a class?",
    options: {
      A: "this",
      B: "super",
      C: "extends",
      D: "implements"
    },
    correctAnswer: "C"
  },

  // Remaining 30 questions
  {
    domain: "Java",
    questionText: "What is the size of float in Java?",
    options: {
      A: "4 bytes",
      B: "2 bytes",
      C: "8 bytes",
      D: "1 byte"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "What is the default value of a reference variable?",
    options: {
      A: "0",
      B: "null",
      C: "undefined",
      D: "empty"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which interface provides capability to store objects using key-value pairs?",
    options: {
      A: "List",
      B: "Set",
      C: "Map",
      D: "Queue"
    },
    correctAnswer: "C"
  },
  {
    domain: "Java",
    questionText: "Which class is the superclass of all classes?",
    options: {
      A: "System",
      B: "Object",
      C: "Class",
      D: "String"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which of these is a wrapper class?",
    options: {
      A: "Integer",
      B: "int",
      C: "String",
      D: "Double"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "What does JVM stand for?",
    options: {
      A: "Java Variable Machine",
      B: "Java Virtual Machine",
      C: "Java Visual Machine",
      D: "Java Verified Machine"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which exception is thrown when an array is accessed with an illegal index?",
    options: {
      A: "ArrayIndexOutOfBoundsException",
      B: "NullPointerException",
      C: "IOException",
      D: "IllegalIndexException"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "Which keyword is used to define a constant variable?",
    options: {
      A: "static",
      B: "final",
      C: "const",
      D: "constant"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which of the following is used to create an object?",
    options: {
      A: "class",
      B: "new",
      C: "this",
      D: "object"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which of the following is not part of OOPS?",
    options: {
      A: "Encapsulation",
      B: "Polymorphism",
      C: "Compilation",
      D: "Inheritance"
    },
    correctAnswer: "C"
  },

  // 20 more
  {
    domain: "Java",
    questionText: "Which method must be implemented by a class implementing Runnable?",
    options: {
      A: "run()",
      B: "start()",
      C: "execute()",
      D: "init()"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "Which keyword is used to handle exceptions?",
    options: {
      A: "try",
      B: "catch",
      C: "throw",
      D: "All of the above"
    },
    correctAnswer: "D"
  },
  {
    domain: "Java",
    questionText: "Which keyword is used to inherit interfaces?",
    options: {
      A: "extends",
      B: "implements",
      C: "inherits",
      D: "interfaces"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which block is always executed regardless of exception?",
    options: {
      A: "catch",
      B: "finally",
      C: "try",
      D: "throw"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "Which loop is guaranteed to execute at least once?",
    options: {
      A: "for",
      B: "while",
      C: "do-while",
      D: "if"
    },
    correctAnswer: "C"
  },
  {
    domain: "Java",
    questionText: "Which of these is a runtime exception?",
    options: {
      A: "IOException",
      B: "SQLException",
      C: "NullPointerException",
      D: "FileNotFoundException"
    },
    correctAnswer: "C"
  },
  {
    domain: "Java",
    questionText: "Which of the following is used to make a class abstract?",
    options: {
      A: "interface",
      B: "abstract",
      C: "final",
      D: "super"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "What is method overloading?",
    options: {
      A: "Same method name with different parameters",
      B: "Same method name in child class",
      C: "Same class name",
      D: "Different return types only"
    },
    correctAnswer: "A"
  },
  {
    domain: "Java",
    questionText: "What is the return type of main method?",
    options: {
      A: "int",
      B: "void",
      C: "String",
      D: "char"
    },
    correctAnswer: "B"
  },
  {
    domain: "Java",
    questionText: "What is multithreading?",
    options: {
      A: "Multiple classes",
      B: "Multiple objects",
      C: "Multiple methods",
      D: "Multiple threads of execution"
    },
    correctAnswer: "D"
  }
];


const pythonquestions = [
  {
    domain: "Python",
    questionText: "What is the output of print(2 ** 3)?",
    options: {
      A: "6",
      B: "8",
      C: "9",
      D: "5"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which of these is not a core data type in Python?",
    options: {
      A: "Tuples",
      B: "Lists",
      C: "Class",
      D: "Dictionary"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "What is the correct file extension for Python files?",
    options: {
      A: ".pt",
      B: ".py",
      C: ".pyt",
      D: ".p"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which keyword is used to define a function in Python?",
    options: {
      A: "function",
      B: "define",
      C: "def",
      D: "func"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which of the following is a Python tuple?",
    options: {
      A: "[1, 2, 3]",
      B: "{1, 2, 3}",
      C: "(1, 2, 3)",
      D: "<1, 2, 3>"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "How do you start a comment in Python?",
    options: {
      A: "//",
      B: "<!--",
      C: "#",
      D: "/*"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which function is used to get the length of a list in Python?",
    options: {
      A: "length()",
      B: "len()",
      C: "count()",
      D: "size()"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
    options: {
      A: "strip()",
      B: "trim()",
      C: "len()",
      D: "ptrim()"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "What is the output of print(bool(0))?",
    options: {
      A: "True",
      B: "False",
      C: "0",
      D: "None"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "What keyword is used for loop in Python?",
    options: {
      A: "repeat",
      B: "for",
      C: "loop",
      D: "iterate"
    },
    correctAnswer: "B"
  },
   {
    domain: "Python",
    questionText: "What is the output of print(2 ** 3)?",
    options: {
      A: "6",
      B: "8",
      C: "9",
      D: "None"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which of the following is used to define a block of code in Python?",
    options: {
      A: "Curly braces",
      B: "Parentheses",
      C: "Indentation",
      D: "Quotation marks"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which keyword is used for function in Python?",
    options: {
      A: "function",
      B: "define",
      C: "def",
      D: "fun"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "What is the output of print(len('Python'))?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "Error"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which of these is not a core data type in Python?",
    options: {
      A: "Lists",
      B: "Dictionary",
      C: "Tuples",
      D: "Class"
    },
    correctAnswer: "D"
  },
  {
    domain: "Python",
    questionText: "What is the output of print(10 // 3)?",
    options: {
      A: "3.33",
      B: "3",
      C: "3.0",
      D: "Error"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "How do you start a comment in Python?",
    options: {
      A: "//",
      B: "/*",
      C: "#",
      D: "--"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which of these is the correct syntax to create a dictionary?",
    options: {
      A: "dict = { 'a' : 1, 'b' : 2 }",
      B: "dict = ( 'a' : 1, 'b' : 2 )",
      C: "dict = [ 'a' : 1, 'b' : 2 ]",
      D: "dict = 'a' : 1, 'b' : 2"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "Which module in Python is used for regular expressions?",
    options: {
      A: "regex",
      B: "re",
      C: "pyregex",
      D: "express"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "What does the 'break' keyword do in a loop?",
    options: {
      A: "Skips the current iteration",
      B: "Stops the loop",
      C: "Restarts the loop",
      D: "Exits the program"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which of the following functions can help us to find the version of python that we are currently working on?",
    options: {
      A: "sys.version(1)",
      B: "sys.version(0)",
      C: "sys.version()",
      D: "sys.version"
    },
    correctAnswer: "D"
  },
  {
    domain: "Python",
    questionText: "Which of the following is not a keyword in Python?",
    options: {
      A: "eval",
      B: "assert",
      C: "nonlocal",
      D: "pass"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "What is the maximum possible length of an identifier in Python?",
    options: {
      A: "16",
      B: "32",
      C: "64",
      D: "No fixed length is specified"
    },
    correctAnswer: "D"
  },
  {
    domain: "Python",
    questionText: "Which of the following is used to define a class in Python?",
    options: {
      A: "function",
      B: "def",
      C: "class",
      D: "struct"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which operator is used for exponentiation in Python?",
    options: {
      A: "^",
      B: "**",
      C: "%",
      D: "//"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "How do you handle exceptions in Python?",
    options: {
      A: "try/except",
      B: "try/catch",
      C: "do/except",
      D: "try/error"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "Which keyword is used to create an anonymous function in Python?",
    options: {
      A: "def",
      B: "lambda",
      C: "func",
      D: "anon"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "What will be the output of bool(0)?",
    options: {
      A: "True",
      B: "False",
      C: "0",
      D: "None"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which function is used to get the absolute value of a number?",
    options: {
      A: "abs()",
      B: "fabs()",
      C: "absolute()",
      D: "math.abs()"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "Which method is used to convert a string into lowercase?",
    options: {
      A: "lower()",
      B: "lowercase()",
      C: "toLowerCase()",
      D: "tolower()"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "What is a correct syntax to output 'Hello World' in Python?",
    options: {
      A: "echo 'Hello World'",
      B: "p('Hello World')",
      C: "print('Hello World')",
      D: "echo('Hello World')"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which keyword is used to create a function in Python?",
    options: {
      A: "func",
      B: "define",
      C: "def",
      D: "function"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which symbol is used to comment a single line in Python?",
    options: {
      A: "//",
      B: "#",
      C: "/*",
      D: "<!--"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which built-in function returns the length of a string?",
    options: {
      A: "count()",
      B: "size()",
      C: "length()",
      D: "len()"
    },
    correctAnswer: "D"
  },
  {
    domain: "Python",
    questionText: "What is the output of 3 == '3' in Python?",
    options: {
      A: "True",
      B: "False",
      C: "3",
      D: "Error"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which collection is ordered and unchangeable?",
    options: {
      A: "List",
      B: "Set",
      C: "Tuple",
      D: "Dictionary"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which of the following is mutable?",
    options: {
      A: "String",
      B: "Tuple",
      C: "List",
      D: "Integer"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "What is the correct file extension for Python files?",
    options: {
      A: ".py",
      B: ".python",
      C: ".pt",
      D: ".pyt"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "What does the 'pass' statement do?",
    options: {
      A: "Terminates loop",
      B: "Skips loop",
      C: "Does nothing",
      D: "Throws error"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which operator is used to check identity?",
    options: {
      A: "==",
      B: "!=",
      C: "is",
      D: "in"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "How do you define a dictionary in Python?",
    options: {
      A: "[]",
      B: "{}",
      C: "()",
      D: "<>"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "What does the 'break' keyword do in a loop?",
    options: {
      A: "Skips iteration",
      B: "Ends loop",
      C: "Goes to next loop",
      D: "Restarts loop"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "What is the output of bool(0)?",
    options: {
      A: "0",
      B: "1",
      C: "True",
      D: "False"
    },
    correctAnswer: "D"
  },
  {
    domain: "Python",
    questionText: "How do you get the type of a variable?",
    options: {
      A: "typeOf()",
      B: "typeof()",
      C: "type()",
      D: "getType()"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which keyword is used to handle exceptions?",
    options: {
      A: "try",
      B: "exception",
      C: "catch",
      D: "trap"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "Which exception is raised when dividing by zero?",
    options: {
      A: "ZeroDivision",
      B: "DivideError",
      C: "ZeroDivisionError",
      D: "ArithmeticError"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which module in Python is used to generate random numbers?",
    options: {
      A: "math",
      B: "random",
      C: "numbers",
      D: "rand"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "How do you open a file for writing?",
    options: {
      A: "open('file.txt')",
      B: "open('file.txt', 'r')",
      C: "open('file.txt', 'w')",
      D: "file.open('file.txt')"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which method returns a list of dictionary keys?",
    options: {
      A: "getkeys()",
      B: "keys()",
      C: "listkeys()",
      D: "dictkeys()"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which is the correct way to create a class in Python?",
    options: {
      A: "function MyClass:",
      B: "def MyClass:",
      C: "class MyClass:",
      D: "struct MyClass:"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which function converts a string to an integer?",
    options: {
      A: "str()",
      B: "float()",
      C: "int()",
      D: "bool()"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which of the following is not a loop structure in Python?",
    options: {
      A: "for",
      B: "while",
      C: "loop",
      D: "None of these"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "What is the keyword to inherit a class?",
    options: {
      A: "extend",
      B: "super",
      C: "inherits",
      D: "class SubClass(ParentClass)"
    },
    correctAnswer: "D"
  },
  {
    domain: "Python",
    questionText: "Which symbol is used for exponentiation?",
    options: {
      A: "^",
      B: "**",
      C: "exp",
      D: "^^"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "What is the result of 7 // 2?",
    options: {
      A: "3.5",
      B: "3",
      C: "4",
      D: "3.0"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which Python version introduced f-strings?",
    options: {
      A: "2.7",
      B: "3.5",
      C: "3.6",
      D: "3.8"
    },
    correctAnswer: "C"
  },
  {
    domain: "Python",
    questionText: "Which keyword is used to define a generator function?",
    options: {
      A: "return",
      B: "yield",
      C: "gen",
      D: "generate"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which function adds an element to the end of a list?",
    options: {
      A: "insert()",
      B: "append()",
      C: "add()",
      D: "push()"
    },
    correctAnswer: "B"
  },
  {
    domain: "Python",
    questionText: "Which function is used to sort a list in place?",
    options: {
      A: "sort()",
      B: "sorted()",
      C: "order()",
      D: "arrange()"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "Which operator is used for membership testing?",
    options: {
      A: "in",
      B: "is",
      C: "==",
      D: "&"
    },
    correctAnswer: "A"
  },
  {
    domain: "Python",
    questionText: "What does 'None' mean in Python?",
    options: {
      A: "Null value",
      B: "Empty string",
      C: "Zero",
      D: "False"
    },
    correctAnswer: "A"
  }

];


const devopsquestions = [
  {
    domain: "DevOps",
    questionText: "What does DevOps stand for?",
    options: {
      A: "Development and Options",
      B: "Development and Operations",
      C: "Devices and Operations",
      D: "None of the above"
    },
    correctAnswer: "B"
  },
  {
    domain: "DevOps",
    questionText: "Which of the following is a CI/CD tool?",
    options: {
      A: "Jenkins",
      B: "Docker",
      C: "Kubernetes",
      D: "Git"
    },
    correctAnswer: "A"
  },
  {
    domain: "DevOps",
    questionText: "What is the purpose of Docker?",
    options: {
      A: "Monitor applications",
      B: "Containerization",
      C: "Continuous Integration",
      D: "Source control"
    },
    correctAnswer: "B"
  },
  {
    domain: "DevOps",
    questionText: "Which file is used to define Docker configuration?",
    options: {
      A: "Dockerfile",
      B: "Docker.config",
      C: "Container.yaml",
      D: "docker.yml"
    },
    correctAnswer: "A"
  },
  {
    domain: "DevOps",
    questionText: "What is Kubernetes primarily used for?",
    options: {
      A: "Code compilation",
      B: "Managing containers",
      C: "Monitoring servers",
      D: "Testing applications"
    },
    correctAnswer: "B"
  },
  {
    domain: "DevOps",
    questionText: "Which command lists Docker containers?",
    options: {
      A: "docker ps",
      B: "docker list",
      C: "docker show",
      D: "docker view"
    },
    correctAnswer: "A"
  },
  {
    domain: "DevOps",
    questionText: "Which of the following is a version control system?",
    options: {
      A: "Jira",
      B: "Git",
      C: "Kubernetes",
      D: "Jenkins"
    },
    correctAnswer: "B"
  },
  {
    domain: "DevOps",
    questionText: "What does CI stand for in DevOps?",
    options: {
      A: "Continuous Integration",
      B: "Continuous Implementation",
      C: "Container Interface",
      D: "Central Integration"
    },
    correctAnswer: "A"
  },
  {
    domain: "DevOps",
    questionText: "What is the function of Ansible?",
    options: {
      A: "Container orchestration",
      B: "Monitoring",
      C: "Configuration management",
      D: "Code deployment"
    },
    correctAnswer: "C"
  },
  {
    domain: "DevOps",
    questionText: "Which tool helps in infrastructure as code?",
    options: {
      A: "Terraform",
      B: "Docker",
      C: "Jenkins",
      D: "Slack"
    },
    correctAnswer: "A"
  },
  {
  domain: "DevOps",
  questionText: "What does CI stand for in DevOps?",
  options: {
    A: "Continuous Integration",
    B: "Constant Inspection",
    C: "Cloud Integration",
    D: "Continuous Inspection"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "Which tool is used for containerization?",
  options: {
    A: "Git",
    B: "Jenkins",
    C: "Docker",
    D: "Ansible"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which tool is used for orchestration in containers?",
  options: {
    A: "Docker",
    B: "Kubernetes",
    C: "Chef",
    D: "Nagios"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "What is the main purpose of Jenkins?",
  options: {
    A: "Containerization",
    B: "Monitoring",
    C: "Continuous Integration and Delivery",
    D: "Deployment"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which file is used in Docker to build images?",
  options: {
    A: "Dockerfile",
    B: "Docker-compose.yml",
    C: "image.json",
    D: "build.conf"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What is the purpose of 'git clone'?",
  options: {
    A: "Creates a new repo",
    B: "Clones a repository",
    C: "Deletes the repo",
    D: "Commits changes"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "What is Infrastructure as Code (IaC)?",
  options: {
    A: "Physical server configuration",
    B: "Scripted provisioning of infrastructure",
    C: "Manual deployment",
    D: "Cloud cost estimation"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which tool is best suited for infrastructure automation?",
  options: {
    A: "Nagios",
    B: "Kubernetes",
    C: "Terraform",
    D: "Git"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which command is used to view Docker containers?",
  options: {
    A: "docker containers",
    B: "docker ps",
    C: "docker list",
    D: "docker view"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which of the following is a monitoring tool?",
  options: {
    A: "Prometheus",
    B: "Kubernetes",
    C: "GitLab",
    D: "Vagrant"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "Which file format is used by Ansible playbooks?",
  options: {
    A: "JSON",
    B: "YAML",
    C: "XML",
    D: "INI"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which DevOps practice focuses on automation of testing?",
  options: {
    A: "Continuous Monitoring",
    B: "Continuous Testing",
    C: "Continuous Deployment",
    D: "Continuous Delivery"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "What is the use of Helm in Kubernetes?",
  options: {
    A: "Monitoring tool",
    B: "CI/CD tool",
    C: "Package manager",
    D: "Authentication tool"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which command initializes a Terraform working directory?",
  options: {
    A: "terraform init",
    B: "terraform apply",
    C: "terraform plan",
    D: "terraform start"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "Which is a popular CI/CD tool?",
  options: {
    A: "Jenkins",
    B: "MySQL",
    C: "AWS",
    D: "Postman"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What is blue-green deployment?",
  options: {
    A: "Load testing",
    B: "A/B testing",
    C: "Deployment strategy to reduce downtime",
    D: "Monitoring technique"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "What is the use of the 'docker-compose' tool?",
  options: {
    A: "Monitor containers",
    B: "Run multiple containers",
    C: "Debug containers",
    D: "Deploy to Kubernetes"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which command lists all Kubernetes pods?",
  options: {
    A: "kubectl get deployments",
    B: "kubectl get services",
    C: "kubectl get pods",
    D: "kubectl show pods"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "What is 'artifact' in CI/CD?",
  options: {
    A: "An image",
    B: "A container",
    C: "Build output stored and reused",
    D: "Log file"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which tool does not belong in DevOps automation?",
  options: {
    A: "Ansible",
    B: "Chef",
    C: "Puppet",
    D: "Notepad++"
  },
  correctAnswer: "D"
},
{
  domain: "DevOps",
  questionText: "Which of the following best describes 'canary deployment'?",
  options: {
    A: "Deploys to 100% of users immediately",
    B: "Rolls back the previous version",
    C: "Releases to a small subset of users first",
    D: "Deploys in alphabetical order"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "What is the main purpose of Prometheus?",
  options: {
    A: "Code building",
    B: "Monitoring and alerting",
    C: "Deployment",
    D: "Code testing"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "What is the default port for Jenkins?",
  options: {
    A: "3000",
    B: "5000",
    C: "8080",
    D: "9090"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which DevOps phase involves evaluating metrics and logs?",
  options: {
    A: "Plan",
    B: "Monitor",
    C: "Release",
    D: "Deploy"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which tool helps in automating system configuration?",
  options: {
    A: "Slack",
    B: "Chef",
    C: "Zoom",
    D: "Jira"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "What is the purpose of 'docker build'?",
  options: {
    A: "Create a container",
    B: "Stop a container",
    C: "Build a Docker image",
    D: "Remove a container"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "In which language is Terraform written?",
  options: {
    A: "Go",
    B: "Python",
    C: "Ruby",
    D: "Shell"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "Which of the following is a cloud platform?",
  options: {
    A: "Git",
    B: "Azure",
    C: "Jenkins",
    D: "Nagios"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which of the following enables automated rollback?",
  options: {
    A: "Blue-green deployment",
    B: "Manual testing",
    C: "A/B testing",
    D: "All of the above"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What is the use of a load balancer?",
  options: {
    A: "Storing data",
    B: "Balancing container size",
    C: "Distributing traffic evenly",
    D: "Encrypting code"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which protocol is most commonly used for DevOps tools communication?",
  options: {
    A: "HTTP",
    B: "FTP",
    C: "SSH",
    D: "SMTP"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What does IaC stand for?",
  options: {
    A: "Internet as Code",
    B: "Infrastructure as Code",
    C: "Image and Configuration",
    D: "Integration and Code"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which of these is a version control system?",
  options: {
    A: "Git",
    B: "Docker",
    C: "Jenkins",
    D: "Ansible"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What does YAML stand for?",
  options: {
    A: "Yet Another Markup Language",
    B: "Your Application Markup Language",
    C: "You Are My Leader",
    D: "YAML Ain't Markup Language"
  },
  correctAnswer: "D"
},
{
  domain: "DevOps",
  questionText: "What is a pod in Kubernetes?",
  options: {
    A: "A group of VMs",
    B: "A group of containers",
    C: "A single script",
    D: "A service"
  },
  correctAnswer: "B"
},
{
  domain: "DevOps",
  questionText: "Which tool integrates well with GitHub for CI/CD pipelines?",
  options: {
    A: "Jenkins",
    B: "Kubernetes",
    C: "Nagios",
    D: "Grafana"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What is the use of 'terraform apply'?",
  options: {
    A: "To preview changes",
    B: "To destroy infrastructure",
    C: "To create infrastructure",
    D: "To debug modules"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which of the following is a push-based configuration tool?",
  options: {
    A: "Chef",
    B: "Puppet",
    C: "Ansible",
    D: "Terraform"
  },
  correctAnswer: "C"
},
{
  domain: "DevOps",
  questionText: "Which of the following tools is used to visualize metrics?",
  options: {
    A: "Grafana",
    B: "Jenkins",
    C: "Slack",
    D: "Docker"
  },
  correctAnswer: "A"
},
{
  domain: "DevOps",
  questionText: "What does GitHub Actions enable?",
  options: {
    A: "Monitoring",
    B: "CI/CD Workflows",
    C: "Virtualization",
    D: "Containerization"
  },
  correctAnswer: "B"
}

];






// ========== DB Insert Script ==========
//const mernquestions = require("./data/mernquestions");
//const javaquestions = require("./data/javaquestions");
//const pythonquestions = require("./data/pythonquestions");
//const devopsquestions = require("./data/devopsquestions");

// Main function to insert questions into the database
// Main function to insert questions into the database
const insertQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const domains = [
      { name: "MERN", data: mernquestions },
      { name: "Java", data: javaquestions },
      { name: "Python", data: pythonquestions },
      { name: "DevOps", data: devopsquestions },
    ];

    for (const domain of domains) {
      console.log(`\n--- Processing ${domain.name} domain ---`);

      // Clear existing questions for the current domain
      await Question.deleteMany({ domain: domain.name });
      console.log(`🗑️ Existing ${domain.name} questions cleared from DB.`);

      // Deduplicate using normalized question text
      const uniqueQuestionsForDomain = [];
      const seenQuestionTexts = new Set();

      for (const question of domain.data) {
        const normalizedText = question.questionText.trim().toLowerCase();
        if (!seenQuestionTexts.has(normalizedText)) {
          uniqueQuestionsForDomain.push(question);
          seenQuestionTexts.add(normalizedText);
        } else {
          console.warn(`⚠️ Duplicate skipped in ${domain.name}: "${question.questionText}"`);
        }
      }

      // Insert into database
      if (uniqueQuestionsForDomain.length > 0) {
        await Question.insertMany(uniqueQuestionsForDomain, { ordered: false });
        console.log(`✅ ${uniqueQuestionsForDomain.length} ${domain.name} questions inserted.`);
      } else {
        console.log(`ℹ️ No new ${domain.name} questions to insert.`);
      }
    }

    console.log("\n🎉 All domains processed successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed to insert questions:", err);
    process.exit(1);
  } finally {
    // Ensure connection closes cleanly
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
      console.log("🔌 MongoDB disconnected.");
    }
  }
};

insertQuestions();
