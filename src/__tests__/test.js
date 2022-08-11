import { Team } from "../index";

test('test', () => {
    const person = new Team()

    person.add({ name: "puncher" })
    expect(person.members).toEqual(new Set(["{\"name\":\"puncher\"}"]))
})

test('test2', () => {
    const person = new Team()

    person.addAll({ name: "puncher" }, { name: "puncher" })
    expect(person.members).toEqual(new Set(["{\"name\":\"puncher\"}"]))
})

test('test3', () => {
    const person = new Team()

    person.addAll({ name: "puncher" }, { name: "2" })
    expect(person.toArray()).toEqual([{ name: "puncher" }, { name: "2" }])
})