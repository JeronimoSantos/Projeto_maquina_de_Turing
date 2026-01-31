# 🤖💛 Turning Machine Project in JS
A Turing Machine is a theoretical model of computation devised by British mathematician Alan Turing in the 1930s. It serves as a fundamental abstraction for understanding what it means to "compute", formalizing the concept of an algorithm and establishing the limits of computability.

### The machine is composed of:
- An infinite tape, divided into cells, where each cell contains a symbol from a finite alphabet (including a special null symbol, such as white space)
- A read/write head that can move left or right along the tape, reading one symbol at a time.
- A finite set of states, including an initial state and one or more accepting or rejecting states.
- A table of transitions that defines the machine's actions: writing a new symbol, moving the head left or right, and changing state, based on the symbol read and the current state.

## 🎯 Main Objective
Practice hands-on concepts, techniques and fundamentals of programming logic with JS.

## 🚨 Problematization
Using Javascript, develop a function that is based on the Turing machine to perform all mathematical operations present in an array and that returns an array containing the results.

## 💡 Solução
Develop a Turing machine engine along with a function that performs all mathematical operations on an array and returns an array containing the results.

## 🧰 Technologies Used

| Technologies | Version |
|--------------|---------|
| ![JAVASCRIPT][javascript-url] | v22.15.0 |
| ![GIT][git-url] | V2.46.0.windows.1 |

## 📚 Process elaboration
All the key steps I needed in developing and completing the problem.

- My first step, was to transform the mathematical operators into sequences of 8 bytes. This would be the encoder.
- The second step, will be to create the machine head that will manipulate the tape.
- Third step: develop the Transition Table, which will contain the machine's logical rules.
- Fourth step, implement an error handling process.

## 📝 Prerequisites
Before you begin, make sure you have the following installed on your computer:

1. [**Git**](https://git-scm.com/downloads) – to clone the project repository.
2. [**Node.js**](https://nodejs.org/) - to run locally.
3. [**VS Code**](https://code.visualstudio.com/) *(Optional, but recommended.)*

## ✅ Step by step for Installation

1. First, you'll need to clone the project from the repository containing this code onto your machine.
```
git clone https://github.com/JeronimoSantos/Projeto_maquina_de_Turing.git 
```

2. Go to the project folder.
```
cd projeto_maquina_de_turing
```

3. Go to the 'main.js' file.
```
cd src/js/main.js
```

4. To take the tests, type
```
console.log(realizarOperacoesComSeguranca([numero, "operador", numero]));
```

<!-- LINKS THE BAGDES -->
[javascript-url]: https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black
[git-url]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
