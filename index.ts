/*
    Basic Types
    -----------------------------------------------------------------------

    1. Boolean
    2. Number
    3. String
    4. Array
    5. Tuple
    6. Enum
    7. Any/Unknown (Top type)
    8. Void
    9. Null/Undefined
    10. Never (Bottom type)
    11. object
*/

// Boolean
const thisIsABoolean: boolean = true;

// Number
const thisIsANumber: number = 42;

// String
const thisIsAString: string = "Hello World";

// Array
const thisIsAnArray1: Array<string> = ["Foo"];
const thisIsAnArray2: string[] = ["Bar"];

// Tuple
const thisIsATuple: [number, string] = [42, "Meaning of life"];

// Enum
enum thisIsAnEnum1 {
  Foo = "foo",
  Bar = "bar",
  Baz = "baz",
}

enum thisIsAnEnum2 {
  Yes = 1,
  No = 0,
}

thisIsAnEnum1.Foo;
thisIsAnEnum2.Yes;

// Any/Unknown
// Top type: A top type is a supertype of every other type.
const thisIsAnAny1: any = "Can be anything";
const thisIsAnAny2: any = 1;
const thisIsAnAny3: unknown = "Can be anything";
const thisIsAnAny4: unknown = 1;

// Void
const thisIsAVoid2: () => void = () => {
  console.log("Orlando Devs");
};

// Null/Undefind
const thisIsANull: null = null;
const thisIsAnUndefined: undefined = undefined;

// Never
// Bottom tyoe: A bottom type is a type that can never happen and has no value
const thisIsANever: () => never = () => {
  throw new Error("There will never be a return from this function");
};

// Object
const thisIsAnObject: object = { key: "value" };
const thisIsAMoreDefinedObject: { [key: string]: string } = { bar: "value" };

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/*
    Type Inference
    -----------------------------------------------------------------------

    Type inference is the ability to automatically deduce, either partially or
    fully,  the type of an expression at compile time. The compiler is often 
    able to infer the type of a variable or the type signature of a function,
    without explicit type annotations having been given.
*/

// const resultIsNumber = 10 * 10;

// const returnAString = (x: number) => `This is your number: ${x}`;

// const resultIsBoolean = !1;

// const curriedFunction = (x: boolean) => (y: number) => (z: string) =>
//   x ? y : z;
// const curriedFunction1 = curriedFunction(true);
// const curriedFunction2 = curriedFunction1(10);
// const curriedFunction3 = curriedFunction2("Whoop there it is!");

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Type Aliases & Interfaces */

/*    
    Type Aliases
    -----------------------------------------------------------------------

    Type aliases create a new name for an underlying type.
*/

// type Foo = "foo";
// type Foo = string
// type Foo = number

// const tempFunc = (x: Foo) => `${x}`;
// tempFunc('Bar') //?
// tempFunc('foo') //?

// type Bar = { bar: Foo; baz?: number };

// const obj: Bar = { baz: 'foo' }
// const obj: Bar = { bar: 'baz' }
// const obj: Bar = { bar: 'foo', baz: 10 }

/*
    Interfaces
    -----------------------------------------------------------------------

    Interfaces are a powerful way of defining contracts within your code as
    well as contracts with code outside of your project.
*/

// interface Foobar {
//   val: string;
//   val2: number;
//   val3?: boolean;
// }

// const foobarObj: Foobar = {
//     val: 'hello',
//     val2: 10,
//     val4: true
// }
// const foobarObj: Foobar = {
//     val: 'hello',
//     val2: 10,
//     val3: 'true'
// }
// const foobarObj: Foobar = {
//     val: 'hello',
//     val2: 10,
// }
// const foobarObj: Foobar = {
//     val: 'hello',
//     val2: 10,
//     val3: true
// }

/*
    The main difference between the two

    Type Aliases are just that, an alias for an already existing type. Because of this they can be created
    for just about any type, even alias primitive types.

    Interfaces, on the other hand, are a contract of a shape of an object so they can only describe shapes,
    and can't be used as a type for primitives. However, when creating an interface, TS actually creates a new type (not an alias)
    so you can't see the underlying implementation of the type in your code (also called an opaque type).
*/

// type ObjAlias = {
//     func: () => void,
//     num: number,
//     str: string,
//     bool: boolean
// };

// type NewString1 = 'string'

// interface ObjInterface {
//     func: () => void,
//     num: number,
//     str: string,
//     bool: boolean
// };

// interface NewString2 = 'string'

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Union Types and Intersection Types */

/*
    Union Types
    -----------------------------------------------------------------------

    Union Types allow you to compose types by "having any one of the type" (OR)
*/

// type NewObj1 = {
//   str: string;
//   num: number;
// };

// type Union1 = string | number;

// type Union2 = Union1 | NewObj1;

// const newFunc = (x: Union2) => {
//   console.log(x);
// };

// newFunc('Hello World')
// newFunc(10)
// newFunc({ str: 'Hello World', num: 10 })
// newFunc(true)

// type StrLiteral = "typescript" | "is" | "awesome!";

// const strLiteral1: StrLiteral = 'boo'
// const strLiteral2: StrLiteral = 'typescript'

// type NumLiteral = 1 | 2 | 3 | 4 | 5;

// const numLiteral1: NumLiteral = '1'
// const numLiteral2: NumLiteral = 1

/* Discriminated Unions (aka Tagged Unions) */

/* Object type that has one common key to discriminate on to be able to narrow the type down */

// type ExampleAction1 = {
//   readonly type: "EXAMPLE_ACTION_1";
//   payload: StrLiteral;
// };

// type ExampleAction2 = {
//   readonly type: "EXAMPLE_ACTION_2";
//   payload: NumLiteral;
// };

// type ExampleAction3 = {
//   readonly type: "EXAMPLE_ACTION_3";
//   payload: { boo: string; baz: number };
// };

// type OneOfTheseActions = ExampleAction1 | ExampleAction2 | ExampleAction3;

// const action: ExampleAction2 = {
//   type: "EXAMPLE_ACTION_2",
//   payload: 3,
// };

// const displayAction = (action: OneOfTheseActions) => {
//   switch (action.type) {
//     case "EXAMPLE_ACTION_1":
//     case "EXAMPLE_ACTION_2":
//     case "EXAMPLE_ACTION_3":
//       // case "EXAMPLE_ACTION_4":
//       return action.payload;
//   }
// };

// displayAction(action); //?

/*
    Intersection Types
    -----------------------------------------------------------------------

    Intersection Types allow you to compose types together in order to create
    a new type that "has all of the intersected types together" (AND)
*/

// type NewObj2 = {
//   a: boolean;
// };

// type IntersectionType1 = NewObj2 & { b: string };

// const intersectionType1: IntersectionType1 = { a: true };
// const intersectionType2: IntersectionType1 = { a: true, b: "Hello" };

// type IntersectionType2 = Omit<NewObj2, "a"> & { a: string };

// const intersectionType3: IntersectionType2 = { a: true };
// const intersectionType4: IntersectionType2 = { a: "Hello" };

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Type Guards */

/*
    Because Typescript does not have any run time type checking, one common
    problem that is constantly mentioned is how does one make sure data
    coming from the outside world (i.e 3rd party API) is actually the shape
    that Typescript thinks it is?
    
    The answer is type guards. Three Javascript keywords can help to easily make 
    type guards:
        1. "in" keyword
        2. "typeof" keyword
        3. "instanceof" keyword

    As you can see, type guards are really just assertions that the data coming in
    at run time is exactly as the type expects it to be. A really useful library
    that helps with these assertions is io-ts (https://github.com/gcanti/io-ts).
    I highly recommend taking a look at it!
*/

/* "in" keyword */

// type Foo = {
//     foo: string
//     baz: string
// }

// type Bar = {
//     bar: string
//     boo: string
// }

// const foo = {
//     foo: 'foo',
//     baz: 'baz'
// }

// const bar = {
//     bar: 'bar',
//     boo: 'boo'
// }

// const isFoo = (x: Foo | Bar): x is Foo => 'foo' in x
// const isBar = (x: Foo | Bar): x is Bar => 'bar' in x

// isFoo(foo) //?
// isFoo(bar) //?
// isBar(foo) //?
// isBar(bar) //?

// const newFunc = (x: Foo | Bar) => {
//     if (isFoo(x)) {
//         return x.baz
//     }

//     if (isBar(x)) {
//         return x.boo
//     }
// }

// newFunc(foo) //?
// newFunc(bar) //?

/* "typeof" keyword */

// const str1 = "woot";
// const str2 = null;
// const isString = (x: unknown): x is String => typeof x === "string";

// isString(str1); //?
// isString(str2); //?

// const newFunc = (x: unknown) => {
//   if (isString(x)) {
//     return x.split("");
//   } else {
//     throw new Error("x needs to be a string");
//   }
// };

// newFunc(str1); //?
// newFunc(str2); //?

/* "instanceof" keyword */

// class Car {
//     vroom = () => 'VROOM!'
// }
// class Bike {
//     horn = () => 'HONK!'
// }

// const car = new Car();
// const bike = new Bike();
// const isCar = (x: unknown): x is Car => x instanceof Car;

// isCar(car); //?
// isCar(bike); //?

// const newFunc = (x: unknown) => {
//   if (isCar(x)) {
//     return x.vroom();
//   } else {
//     throw new Error("x needs to be an instance of car");
//   }
// };

// newFunc(car); //?
// newFunc(bike); //?

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Functions and Function Overloading */

// const newFunc = (a: number, b: number): number => a * b;

// newFunc(1, true);
// newFunc("Hello", 2);
// newFunc(1, 2); //?

/* Optional Parameters */

// const newFunc1 = (a: number, b?: number): number => b ? a * b : a;

// newFunc1(1, true);
// newFunc1("Hello");
// newFunc1(10); //?
// newFunc1(1, 2); //?

/* Default Parameters */

// const newFunc2 = (a: number, b = 10): number => a * b;

// newFunc2(1, true);
// newFunc2("Hello");
// newFunc2(10); //?
// newFunc2(1, 2); //?

/*
    Function Overloading
    ----------------------------------------------------------------------

    Function Overloading allows for multiple function type signatures for the same function
*/

// function newFunc(a: number, b: number): number;
// function newFunc(a: string, b: string): string;
// function newFunc(a: number, b: string): string;
// function newFunc(a: any, b: any) {
//   if (typeof a === "string" && typeof b === "string") {
//     return `${a} - ${b}`;
//   } else if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else if (typeof a === "number" && typeof b === "string") {
//     return `${b} - ${a}`;
//   } else {
//     throw new Error("Incorrect types were passed in");
//   }
// }

// newFunc(1, 3); //?
// newFunc("Hello", "World"); //?
// newFunc(2, "Hello"); //?
// newFunc("Hello", 3); //?

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Generics */

/*
    Generics are where Typescript can really shine. Simply put, Generics
    allow a type to be resuable since it allows a type to be passed in 
    at the call site and therefore allowing the type being called to
    work with a variety of different types.
*/

// const getArrayLength = <T>(x: Array<T>) => x.length;

// getArrayLength<number>([2, 3]); //?
// getArrayLength<string>(["foo", "bar", "baz"]); //?
// getArrayLength<boolean>([true]); //?
// getArrayLength<object>([{ key: "val" }, { key: "val" }]); //?

// const getStrOfElements = <T>(x: Array<T>) => {
//   if (x.length > 0) {
//     if (typeof x[0] === "string") {
//       return x.join(", ");
//     } else {
//       return x.map(String).join(", ");
//     }
//   }

//   return "";
// };

// getStrOfElements(["One", "Two", "Three"]); //?
// getStrOfElements([1, 2, 3]); //?
// getStrOfElements([true, false, true]); //?
// getStrOfElements([{ key: "val" }, { key: "val" }]); //?
// getStrOfElements([]); //?

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Nominal vs Structural Typing */

/*
    Nominal Typing
    ----------------------------------------------------------------------
    
    Nominal typing is when the type system relies on the name of the type
    to check equivalence.

    Some examples of a nominal type systems are C++, Java, and Swift.

    Ex:

    type Car = {
        horn: () => void
    }

    type Bike = {
        horn: () => void
    }

    const car: Car = {
        horn: () => console.log('Beep!')
    }

    const bike: Bike = car; // Error


    Structural Typing
    ----------------------------------------------------------------------

    Structural typing is when the type system relies on the underlying 
    structure of the types to check their equivalence.

    Some examples of a structural type system are OCaml, Haskell, and
    Typescript.

    Ex:

    type Car = {
        horn: () => void
    }

    type Bike = {
        horn: () => void
    }

    const car: Car = {
        horn: () => console.log('Beep!')
    }

    const bike: Bike = car; // Works fine
*/

/* Why nominal typing can be useful in Typescript and ways to mimic nominal typing */

/*
    Why nominal typing can be useful
    ----------------------------------------------------------------------

    Sometimes, structural typing doesn't give you the granularity you need
    in order to make sure something is able to error on a type check. For
    instance, if trying to determine what type of a currency a number
    being passed into a function is, having the structural type of `number`
    doesn't give us that granularity. However if we had nominal typing, 
    one could know that the number being passed into a function is the 
    right currency or not.

    Ex:

    type Car = {
        horn: () => void
    }
    type Bike = {
        horn: () => void
    }

    const car = {
        horn: () => console.log('Beep!')
    } as Car

    const honkBikeHorn = (bike: Bike) => bike.horn()

    honkBikeHorn(car);
*/

/*
    Branded Types (Tagged Types)
    ----------------------------------------------------------------------

    Branded Types allow Typescript to mimic nominal typing by way
    of adding a "brand" to the type so that the underlying structure of the
    types are different. Setting the type of the brand to `void` allows there
    to be no cost at run time.

    A downside to this, however, is the fact that you have to type cast the 
    value you create if you want it to have the branding.
*/

// interface Car {
//     _carBrand: void
//     horn: () => void
// }

// interface Bike {
//     _bikeBrand: void
//     horn: () => void
// }

// const car = {
//     horn: () => console.log('Beep!')
// } as Car

// const honkBikeHorn = (bike: Bike) => bike.horn()

// honkBikeHorn(car);

// car._carBrand //?

/*
    Enums
    ----------------------------------------------------------------------

    In Typescript, Enums are always unique. Because of this, enums allow 
    Typescript to mimic nominal typing by way of intersecting an empty
    enum with an actual type. This allows for the type to not have to 
    have a "branded" property on the type.

    A downside to this, however, is that for every "nominal" type that is
    to be created, one would have to create two types. Also, since empty
    enums are inferred as numeric enums, an intersection with just a 
    string type could never happen so a little trickery has to be done
    with the enum in order to be able to allow that intersection to happen.
*/

// enum CarType { _ = "" }
// enum BikeType { _ = "" }

// type Car = CarType & {
//     horn: () => void
// }

// type Bike = BikeType & {
//     horn: () => void
// }

// const car = {
//     horn: () => console.log('Beep!')
// } as Car

// const honkBikeHorn = (bike: Bike) => bike.horn()

// honkBikeHorn(car);

// car._carBrand //?

/*
    Private Class Members
    ----------------------------------------------------------------------

    Another similar approach to the branding technique above, is creating
    classes and having a private class member be the "brand", is yet another
    way to mimic nominal typing. The advantage private class members has over
    Branded types is the fact that private class members can't be accessed at
    all both at compile time and at run time.

    A downside to this, however, is that you will have to create a Class
    in order to create your actual type.
*/

// class Car {
//   private _brand: "Car";
//   horn: () => void;
// }
// class Bike {
//   private _brand: "Bike";
//   horn: () => void;
// }

// const car = {
//   horn: () => console.log("Beep!"),
// } as Car;

// const honkBikeHorn = (bike: Bike) => bike.horn();

// honkBikeHorn(car);

// car._brand; //?

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
