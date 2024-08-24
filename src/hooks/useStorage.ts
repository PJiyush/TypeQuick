import { useState, useCallback } from 'react';

interface storedItem{
    accuracy:number,
    wpm:number,
    date:string
}

export function useStorage(key:string) {
    
    const getStoredItems = ():storedItem[] => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : <storedItem[]>([]);
    };

    
    const [items, setItems] = useState(getStoredItems);

    
    const setItem = useCallback((accuracy:number, wpm: number) => {
        
        const currentItems = getStoredItems();
        const newItem = { accuracy, wpm, date: new Date().toLocaleString() };
        const updatedItems = [...currentItems, newItem];

        
        localStorage.setItem(key, JSON.stringify(updatedItems));
        setItems(updatedItems);
    }, [key]);

    return { items, setItem };
}
