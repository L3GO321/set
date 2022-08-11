export class Team {
    constructor() {
        this.members = new Set();
    }
    add(member) {
        const str = JSON.stringify(member);

        if (this.members.has(str)) {
            throw new Error('Персонаж уже добавлен');
        } else {
            this.members.add(str);
        }
    }

    addAll(...rest) {
        rest.forEach(item => this.members.add(JSON.stringify(item)));
    }

    toArray() {
        const arr = [];
        this.members.forEach(item => arr.push(JSON.parse(item)));
        return arr;
    }
}
