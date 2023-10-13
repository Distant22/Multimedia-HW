"use client";

import { useState } from "react";

const Home = () => {

    const [forStart, setForStart] = useState(''); // State for the start value
    const [forEnd, setForEnd] = useState(''); // State for the end value
    const [result, setResult] = useState(''); // State to store the calculation result

    const handleForStartChange = (e: any) => {
        setForStart(e.target.value);
    };

    const handleForEndChange = (e: any) => {
        setForEnd(e.target.value);
    };

    const handleCalculate = () => {
        // Parse the user input and calculate the result
        const start = parseInt(forStart);
        const end = parseInt(forEnd);
        if ((end-start >= 1000) || (start-end >= 1000)) {
            setResult('Over 1000');
        }

        if (!isNaN(start) && !isNaN(end)) {
            let result = 0;
            for (let i = start; i < end; i++) {
                result += 1
            }
            setResult(result.toString());
        } else {
            setResult('Error');
        }
    };
    
    return (
        <section className="h-full w-full flex flex-col items-center bg-yellow-50">
            <h1 className="h-[30%] w-full flex flex-col items-center justify-center font-bold space-y-3">
                <p className="text-xl">for loop 計算機</p>
                <p>幫忙填上 for loop 的起始與結束數字並按下送出，我會回傳結果給你！</p>
            </h1>
            <p className="flex h-[35%] w-full justify-center items-center">
                <section className="w-[30%] h-full"></section>
                <section className="w-[70%] h-full flex flex-col items-between space-y-2">
                    <p className="text-xl font-bold flex w-full justify-start">a = 0</p>
                    <p className="flex w-full space-x-4 items-center">
                        <p className="text-xl font-bold">for i in range {'('} </p>
                        <input className="h-[90%] p-2 border-2 border-black" type="text" value={forStart} onChange={handleForStartChange} />
                        <p className="text-xl font-bold">,</p>
                        <input className="h-[90%] p-2 border-2 border-black" type="text" value={forEnd} onChange={handleForEndChange} />
                        <p className="text-xl font-bold"> {')'} :</p>
                    </p>
                    <p className="text-xl font-bold w-full flex justify-start">⠀⠀⠀⠀a += 1</p>
                    <p className="text-xl font-bold w-full flex justify-start">print(a)</p>
                </section>
            </p>
            <p className="h-[25%] flex w-full justify-center items-center">
                <section className="w-[35%] h-full flex"></section>
                <section className="w-[65%] h-full flex items-center space-x-8 font-bold">
                    <button 
                        className="rounded-xl bg-white py-3 px-8 border-2 border-black"
                        onClick={handleCalculate}
                    >
                        送出
                    </button>
                    <p className="rounded-xl bg-white py-3 px-8 border-2 border-black flex w-[30%]">
                        <p className="flex justify-start w-full">結果： {result}</p>
                    </p>
                </section>
            </p>
        </section>
    )
}

export default Home;