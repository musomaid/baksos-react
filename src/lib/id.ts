export const uid=(p='id')=>`${p}_${Math.random().toString(36).slice(2,9)}`;
export const nextQueue=(n:number)=>`A${String(n).padStart(3,'0')}`;
