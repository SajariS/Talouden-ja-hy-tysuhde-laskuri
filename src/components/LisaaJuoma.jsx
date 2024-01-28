/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import JuomaDia from "./JuomaDia";

export default function LisaaJuoma({setKori, kori}) {

    //Helppoa palautusta varten, auttaa myöhemmin B)
    const juomaAlkuTila = {
        voltti: 0.0,
        tilavuus: 0.0,
        hinta: 0.0,
        pantti: 0.0
    };

    const [juoma, setJuoma] = useState(juomaAlkuTila);
    const [virheet, setVirheet] = useState({
        voltti: false,
        tilavuus: false,
        hinta: false,
        pantti: false
    })

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleAdd = () => {
        setKori([...kori, juoma]);
        handleClose();
        handleReset();
    }

    const handleReset = () => {
        setJuoma(juomaAlkuTila);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        const isValid = /^\d*\.?\d*$/.test(value);

        setJuoma({...juoma, [name]: value});
        setVirheet({...virheet, [name]: !isValid});

        console.log(validateInput())
    }

    const validateInput = () => {
        return !Object.values(virheet).every((arvo) => arvo === false);
    }

    return(
        <>
            <Button size="small" onClick={handleOpen}>
                Lisää
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Lisää juoma</DialogTitle>
                <JuomaDia juoma={juoma} handleChange={handleChange} virheet={virheet} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd} disabled={validateInput()}>Lisää koriin</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}