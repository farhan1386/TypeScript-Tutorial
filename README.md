# TypeScript Tutorial

### What is TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components.

### What are the Differences between TypeScript and JavaScript?

| TypeScript | JavaScript |
| --- | --- |
| TypeScript is an Object-Oriented language | JavaScript is a Scripting language |
|It has a feature known as Static typing|It does not have static typing|
|TypeScript gives support for modules|	JavaScript does not support modules|
|It supports optional parameter function|	It does not support optional parameter function|

### Why do we need TypeScript?

* **Using new features of ECMAScript**: TypeScript supports new ECMAScript standards and transpiles them to ECMAScript targets of your choice. So, you can use features of ES2015 and beyond.
*	**Static Typing**: JavaScript is dynamically typed and does not know what type a variable is until it is actually instantiated at run-time. TypeScript adds type support to JavaScript.
*	**Type Inference**: TypeScript makes typing a bit easier and a lot less explicit by the usage of type inference. Even if you don’t explicitly type the types, they are still there to save you from doing something which otherwise would result in a run-time error.
*	**Better IDE Support**: The development experience with TypeScript is a great improvement over JavaScript. There is a wide range of IDEs that have excellent support for TypeScript, like Visual Studio & VS code, Atom, Sublime, and IntelliJ/WebStorm.
*	**Strict Null Checking**: Errors, like cannot read property ‘x’ of undefined, is common in JavaScript programming. You can avoid most of these kinds of errors since one cannot use a variable that is not known to the TypeScript compiler.
*	**Interoperability**: TypeScript is closely related to JavaScript so it has great interoperability capabilities, but some extra work is required to work with JavaScript libraries in TypeScript.

### What are the features of TypeScript

*	**Cross-Platform**:  The TypeScript compiler can be installed on any Operating System such as Windows, MacOS, and Linux.
*	**Object-Oriented Language**: TypeScript provides features like Classes, Interfaces, and Modules. Thus, it can write object-oriented code for client-side as well as server-side development.
*	**Static Type-Checking**: TypeScript uses static typing and helps type checking at compile time. Thus, you can find errors while writing the code without running the script.
*	**Optional Static Typing**: TypeScript also allows optional static typing in case you are using the dynamic typing of JavaScript.
*	**DOM Manipulation**: You can use TypeScript to manipulate the DOM for adding or removing elements.
*	**ES 6 Features**: TypeScript includes most features of planned ECMAScript 2015 (ES 6, 7) such as class, interface, Arrow functions, etc.

### What are the Benefits of using TypeScript?

*	TypeScript is fast, simple, easy to learn and runs on any browser or JavaScript engine.
*	It is similar to JavaScript and uses the same syntax and semantics.
*	This helps backend developers write front-end code faster.
*	You can call the TypeScript code from an existing JavaScript code. Also, it works with existing JavaScript frameworks and libraries without any issues.
*	The Definition file, with .d.ts extension, provides support for existing JavaScript libraries like Jquery, D3.js, etc.
*	It includes features from ES6 and ES7 that can run in ES5-level JavaScript engines like Node.js.
 
### What are the Disadvantages of TypeScript?

*	TypeScript takes a long time to compile the code.
*	It does not support abstract classes.
*	If we run the TypeScript application in the browser, a compilation step is required to transform TypeScript into JavaScript.
*	Web developers are using JavaScript for decades and TypeScript doesn’t bring anything new.
*	To use any third party library, the definition file is a must.
*	Quality of type definition files is a concern.
 
### What are the Components of TypeScript?
 
*	**Language**: It comprises of the syntax, keywords, and type annotations.
*	**The TypeScript Compiler**: This compiler (tsc) converts the instructions written in TypeScript to its JavaScript equivalent.
*	**The TypeScript Language Service**: The Language Service exposes an additional layer around the core compiler pipeline, editor-like applications. The language service supports the common set of typical editor operations.
