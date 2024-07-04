import { add } from "./Set"

const value = new Set<number>()

value.add(3)

add(value, 3)

const value2 = {} as Readonly<{ [k: string]: number }>
