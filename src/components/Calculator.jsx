import { useState } from "react";

import LisaaJuoma from "./LisaaJuoma";

export default function Calculator() {

    const [kori, setKori] = useState([]);

    return(
        <>
        <LisaaJuoma setKori={setKori} kori={kori} />
        </>
    )
}