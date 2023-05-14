"use strict";
import { Resolver } from "node:dns/promises";

// Awaited
type AwaitedType = Awaited<Promise<string[]>>;
const resolver = new Resolver();

async function myDnsResolve() {
  const result: AwaitedType = await resolver.resolve("yahoo.co.jp");
  return result;
}

console.log(myDnsResolve().then((v) => console.log(v)));

// Required & Partial
type Person = {
  id: number;
  name: string;
};

type PersonOptional = Partial<Person>;

const p1: Person = {
  id: 1,
  name: "hoge",
};

const p2: PersonOptional = {
  name: "fugafuga",
};

console.log(p1);
console.log(p2);

type PersonOptional2 = {
  phoneNumber?: number;
};

type Person2 = Required<PersonOptional2>;

const p3: Person2 = {
  phoneNumber: 12345678,
};

console.log(p3);

// Pick & Omit
type Person3 = Person & Person2;
type PickedPerson = Pick<Person3, "name" | "phoneNumber">;
type OmittedPerson = Omit<Person3, "name" | "id">;
const p4: PickedPerson = {
  name: "geso",
  phoneNumber: 8012345678,
};
const p5: OmittedPerson = {
  phoneNumber: 1233422,
};
console.log(p4);
console.log(p5);
