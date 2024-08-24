import { appendClass, removeClass } from "./helper";

const placeBeforeSpace = (currWord:HTMLElement,incorrectChar:HTMLElement)=>{
    const childs = Array.from(currWord.childNodes);
    const beforeSpace = childs[childs.length-1];
    currWord.insertBefore(incorrectChar,beforeSpace);
}

export const handleKey = (e:KeyboardEvent)=>{
    e.preventDefault()
    const key = e.key;
    const isLetter = key.length === 1 && key!== ' ';
    const currWord = document.querySelector('.word.current');
    const currChar = document.querySelector('.character.focus');
    const currSpace = document.querySelector('.space.focus');
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    if(isLetter){
        if(currChar){
            appendClass(currChar,key===currChar.innerHTML?'correct':'incorrect');
            removeClass(currChar,'focus');
            if(currChar.nextSibling){
                appendClass(currChar.nextSibling as HTMLElement,'focus');
            }
            console.log("curWord next", currWord?.nextSibling)
            console.log("curSpace", document.querySelector('.space.focus'))
            if(!currWord?.nextSibling && document.querySelector('.space.focus')){
                return true;
            }
        }else{
            const incorrectChar = document.createElement('span');
            incorrectChar.innerHTML = key;
            appendClass(incorrectChar,'incorrect');
            appendClass(incorrectChar,'character');
            appendClass(incorrectChar,'extra');
            placeBeforeSpace(currWord as HTMLElement,incorrectChar);
        }

    }
    if(isSpace){
        if(!currChar){
            removeClass(currWord,'current');
            removeClass(currSpace,'focus');
            const nextWord = currWord?.nextSibling as HTMLElement;
            appendClass(nextWord,'current');
            appendClass(nextWord.firstChild as HTMLElement,'focus');
        }else{
            appendClass(currChar,'incorrect');
            removeClass(currChar,'focus');
            const nextChar = currChar.nextSibling as HTMLElement;
            if(nextChar){
                appendClass(nextChar,'focus');
            }else{
                const nextWord = currWord?.nextSibling as HTMLElement;
                removeClass(currWord as HTMLElement,'current');
                appendClass(nextWord,'current');
                appendClass(nextWord.firstChild as HTMLElement,'current');
            }
        }
    }
    if(isBackspace){
        if(currChar && currChar.previousSibling){
            removeClass(currChar,'focus');
            appendClass(currChar.previousSibling as HTMLElement,'focus');
            removeClass(currChar.previousSibling as HTMLElement,'incorrect');
            removeClass(currChar.previousSibling as HTMLElement,'correct');
        }else if(currChar && !currChar.previousSibling){
            removeClass(currChar,'focus');
            removeClass(currWord,'current');
            const prevWord = currWord?.previousSibling as HTMLElement;
            appendClass(prevWord,'current');
            const charArray = Array.from(prevWord.childNodes as NodeListOf<HTMLElement>);
            const lastChar = charArray[charArray.length-2];
            if(lastChar){
                appendClass(lastChar,'focus');
                removeClass(lastChar,'incorrect');
                removeClass(lastChar,'correct');
            }
        }else{
            console.log("current word",currWord);
            const charArray = Array.from(currWord?.childNodes as NodeListOf<HTMLElement>);
            console.log("charArray",charArray);
            const lastChar = charArray[charArray.length-2];
            if(lastChar && !lastChar.classList.contains('extra')){
                console.log("This runs when there is no current char")
                removeClass(currChar,'focus');
                appendClass(lastChar,'focus');
                removeClass(lastChar,'incorrect');
                removeClass(lastChar,'correct');
            }else{
                console.log("Nice")
                for(let i = charArray.length-1; i>=0; i--){
                    const char = charArray[i];
                    if(char.classList.contains('extra')){
                        currWord?.removeChild(char);
                        break;
                    }
                }
            }
        }
    }

}



