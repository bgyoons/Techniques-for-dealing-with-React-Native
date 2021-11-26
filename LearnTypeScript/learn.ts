export default function () {}

// * 기본 타입들
let message = 'Hello World';
let value: number = 1;

// * Union Types
let nullableString: string | null = null;
nullableString = 'abc';

let undefinedOrNum: number | undefined;
undefinedOrNum = 10;

let numOrStringOrNull: number | string | null;
numOrStringOrNull = 1;
numOrStringOrNull = 'abc';
numOrStringOrNull = null;

let isCompleted: boolean = true;
isCompleted = false;

// * Any Type
let anyValue: any = null;
anyValue = 1;
anyValue = 'abc';
anyValue = true;

// * function
function sum(a: number, b: number): number {
  // if (a === o) return null;
  return a + b;
}

const result1 = sum(1, 2);
// const result2 = sum('1', '2');

// * Optional Parameter
function process(a: number, b: number, isDouble?: boolean) {
  const plus = a + b;
  return isDouble ? plus * 2 : plus;
}

const total = process(1, 2);
const doubledTotal = process(1, 2, true);

// * 여러 반환값 타입을 지난 함수
function hello(str: string, returnNull?: boolean) {
  if (returnNull) {
    return null;
  }
  return `Hello ${str}`;
}

const result3 = hello('World');
const result4 = hello('World', true);

//* interface
interface Profile {
  id: number;
  username: string;
  nickname: string;
  img?: string;
}

interface Relationship {
  from: Profile;
  to: Profile;
}

function printUsername(profile: Profile) {
  console.log(profile.username);
}

const profile: Profile = {
  id: 1,
  username: 'yoonseo',
  nickname: 'bgyoon',
  img: 'profile.png',
};

const relationship: Relationship = {
  from: {
    id: 1,
    username: 'yoonseo',
    nickname: 'bgyoon',
  },
  to: {
    id: 2,
    username: 'baeg',
    nickname: 'baeg',
  },
};

interface Account extends Profile {
  email: string;
  password: string;
}

const account: Account = {
  id: 1,
  username: 'yoonseo',
  nickname: 'bgyoon',
  email: 'gye04056@gmail.com',
  password: '1234',
};

// * 클래스에서 interface를 implement하기
interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(4);
const rectangle = new Rectangle(4, 6);
const area = circle.getArea();
const perimeter = rectangle.getPerimeter();

// * 배열 타입
const numbers: number[] = [1, 2, 3, 4, 5];
const texts: string[] = ['a', 'b', 'c'];

interface Person1 {
  name: string;
}

const people: Person1[] = [{name: 'yoonseo'}, {name: 'baeg'}];

// * Type Alias
type Person = {
  name: string;
};

const person: Person1 = {
  name: 'bys',
};

type People = Person1[];

const people1: People = [{name: 'yoonseo'}];

type Color = 'red' | 'orange' | 'blue';

const color: Color = 'red';

type Employee = Person & {
  job: string;
};

const employee: Employee = {
  name: 'yoonseo',
  job: 'student',
};

// * Generic
function wrap<T>(parameter: T) {
  return {parameter};
}

const result = wrap('Hello World');

interface Item<T> {
  id: number;
  data: T;
}

interface Person0 {
  name: string;
}

interface Place {
  location: string;
}

const persomItem: Item<Person0> = {
  id: 1,
  data: {
    name: 'yoonseo',
  },
};

const placeItem: Item<Place> = {
  id: 2,
  data: {
    location: 'Seoul',
  },
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
const first = queue.dequeue(); // 0
const second = queue.dequeue(); // 1
