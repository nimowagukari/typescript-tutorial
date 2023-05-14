"use strict";

import { Resolver } from 'node:dns/promises'

function upper(arg: string): string {
  return arg.toUpperCase();
}

const msg = upper("gesogeso");
console.log(msg);

interface User {
  name: string;
  id: number;
  hoge?: string | number;
}

const user: User = {
  name: "taro",
  id: 18,
};

console.log(user.name);
console.log(user.id);

interface strWithIndex {
  index: number;
  value: string;
}

function arrayToObjectWithIndex(args: string[]): strWithIndex[] {
  const results: strWithIndex[] = [];
  for (let i = 0; i < args.length; i++) {
    const obj: strWithIndex = { index: i, value: args[i] };
    results.push(obj);
  }
  return results;
}

const args = ["this", "is", "array"];
const objs = arrayToObjectWithIndex(args);
console.log(objs);

let fuga: "fuga" | "fugafuga";
fuga = "fuga";
fuga = "fugafuga";

console.log(fuga);

console.log(typeof "hogehoge");

const p: Promise<string> = Promise.resolve("resolved");

console.log(p.then((v) => console.log(v)));

const resolver = new Resolver();
console.log(resolver.resolve("yahoo.co.jp"));
