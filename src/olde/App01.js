import { useEffect, useState } from "react"

export default function App01(){
    const [title,setTitle] = useState('happy');
    // 인수의 작업 조건 => 시작할때 작업진행할때
    useEffect(()=>{console.log('effect')},[]);
    useEffect(()=>{console.log('조건이 실행이 될때')},[title])
    return(
        <>
        <h1>{title}</h1>
        <button type="button" onClick={()=>setTitle('first')}>first</button>
        <button type="button" onClick={()=>setTitle('second')}>second</button>
        </>
    )
}