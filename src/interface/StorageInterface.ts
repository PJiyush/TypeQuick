export interface storedItem{
    accuracy:number,
    wpm:number,
    date:string
}

export interface StorageInterface {
    items: storedItem[];
    setItem: (accuracy:number, wpm: number) => void;
}