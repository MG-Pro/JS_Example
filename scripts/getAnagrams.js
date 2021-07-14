function getAnagrams(string) {
    const store = string.split(' ').reduce((acc, item) => {
        const sortWord = item.split('').sort().join('')
        if (!acc[sortWord]) {
            acc[sortWord] = [item]
        } else {
            acc[sortWord].push(item)
        }

        return acc
    }, {})

    return Object.values(store).filter(item => item.length > 1)
}

const str = 'адрес карп кума мир мука парк рим среда стук рост сорт трос';

console.log(getAnagrams(str));
// [
//  ["адрес", "среда"],
//  ["карп", "парк"],
//  ["кума", "мука"],
//  ["мир", "рим"],
//  ["рост", "сорт", "трос"]
// ];
