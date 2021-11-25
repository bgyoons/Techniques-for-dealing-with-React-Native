export default function() {}

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

