import { useState } from "react"

export function Contadores() {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    });

    const [allClicks, setAll] = useState([]);
    const [total, setTotal] = useState(0);

    const handleClickLeft = () => {
        setClicks(prevClicks => ({ ...prevClicks, left: prevClicks.left + 1 })); //Modificando los estados de los componentes
        setAll(prevAllClicks => prevAllClicks.concat('L'));
        setTotal(prevTotal => prevTotal + 1);
    };

    const handleClickRight = () => {
        setClicks(prevClicks => ({ ...prevClicks, right: prevClicks.right + 1 })); //Modificando los estados de los componentes
        setAll(prevAllClicks => prevAllClicks.concat('R'));
        setTotal(prevTotal => prevTotal + 1);
    };

    return (
        <div>
            <Contador allClicks={allClicks} total={total} />
            <ButtonLeft clicks={clicks.left} onClick={handleClickLeft} />
            <ButtonRight clicks={clicks.right} onClick={handleClickRight} />
        </div>
    );
}

function Contador({total}) {
    return (
        <div>
            <p>Total {total}</p>
        </div>
    );
}

function ButtonLeft({ clicks, onClick }) {
    return (
        <div>
            {clicks}
            <button onClick={onClick}>
                Left
            </button>
        </div>
    );
}

function ButtonRight({ clicks, onClick }) {
    return (
        <div>
            {clicks}
            <button onClick={onClick}>
                Right
            </button>
        </div>
    );
}
