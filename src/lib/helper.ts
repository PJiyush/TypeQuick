export const appendClass = (element:Element|null, className:string) => {
    if(element){
        element.classList.add(className);
    }
}

export const removeClass = (element:Element|null, className:string) => {
    if(element){
        element.classList.remove(className);
    }
}
