import { ComponentType, useState } from "react"

export interface CounterWrappedProps {
    count: number,
    increment: () => void,
    data: {name: string, acc:number}[],
}
export interface AccountInfo {
   name: string
   acc: number
}


export const HocCounter = (WrappedComponent: ComponentType<CounterWrappedProps>) => {
  return function HocCounter() {
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<AccountInfo[]>([
      {name: 'praveen', acc: 23123},
      {name: 'naveen', acc: 23124},
      {name: 'Baalu', acc: 23125},
    ])
    const increment = () => {
      setCount((prevState) => prevState +1)
    }
    return <>
        <WrappedComponent  data = {data} count = {count} increment = {increment} />
       </>
  }
}