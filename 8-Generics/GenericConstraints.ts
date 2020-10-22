function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'Farhan Ahmed' }, 'name');
console.log(str);
