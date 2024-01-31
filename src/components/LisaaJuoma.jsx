/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import JuomaDia from "./JuomaDia";
import { v4 as uuidv4 } from "uuid";

export default function LisaaJuoma({setKori, kori}) {

    //Helppoa palautusta varten, auttaa myöhemmin B)
    const juomaAlkuTila = {
        id: '',
        voltti: '',
        tilavuus: '',
        hinta: '',
        pantti: '',
        lukumaara: '',
        pakkausJuoma: 0,
        pakkaus: false
    };

    const [juoma, setJuoma] = useState(juomaAlkuTila);
    const [virheet, setVirheet] = useState({
        voltti: false,
        tilavuus: false,
        hinta: false,
        pantti: false,
        lukumaara: false,
        pakkausJuoma: false
    })

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        handleReset();
    }

    const handleOpen = () => {
        setOpen(true);
        setJuoma({...juoma, id: uuidv4()});
    }

    const handleAdd = () => {
        setKori([...kori, juoma]);
        handleClose();
        handleReset();
    }

    const handleReset = () => {
        setJuoma(juomaAlkuTila);
    }

    const handleCheckChange = () => {
        setJuoma(vanhaTila => ({
            ...vanhaTila, pakkaus: !vanhaTila.pakkaus
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        const isValid = !isNaN(value);

        setJuoma({...juoma, [name]: value});
        setVirheet({...virheet, [name]: !isValid});
    }

    const validateInput = () => {
        if(Object.values(virheet).every((arvo) => arvo === false) && Object.values(juoma).every((arvo) => arvo !== '')) {
            return false;
        }
        else {
            return true;
        }
    }

    return(
        <>
            <Button size="small" onClick={handleOpen}>
                Lisää
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Lisää juoma</DialogTitle>
                <JuomaDia juoma={juoma} handleChange={handleChange} virheet={virheet} handleCheckChange={handleCheckChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd} disabled={validateInput()}>Lisää koriin</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}