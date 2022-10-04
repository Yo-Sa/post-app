import React from 'react'
import { useState } from 'react';

export const InputForm = ({postList, setPostList}) => {

    const [inputText, setInputText] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault();

        setPostList([
            ...postList,
            {
                text: inputText
            }
        ]);

        setInputText("")
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }

    return (
        <div className='inptForm'>
            <form onSubmit={handlesubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                    送信
                </button>
            </form>
        </div>
    )
}
