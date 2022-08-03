import { useState } from "react";

const Test = (): JSX.Element => {

    console.log("test")
    const s = "123"

    const [obj, setObj] = useState<{id: number}>({id: 10});

    return (
        <>
            {s}
            <div className={s}>Hello From Test 123</div>
        </>
    )
}

export default Test;