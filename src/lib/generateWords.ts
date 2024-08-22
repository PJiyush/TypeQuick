import { generate } from "random-words";

export const generateWords = (count: number) => {
    const wordsArray:string[] =  [...generate({ exactly: count, wordsPerString: 1 })];
    return wordsArray.join(' ');
};