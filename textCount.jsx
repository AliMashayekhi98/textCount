
import { React, useState } from "react";
// 
export default function InputPassword() {

    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <label style={{ display: 'block' }} >
                Write your messege:
            </label>
            <textarea
                name="postContent"
                rows={4}
                cols={40}
                onChange={inputHandler}
                maxLength={20}
            />
            <span className="charLeft">{20 - input.length} /20</span>
        </>
    );
}

