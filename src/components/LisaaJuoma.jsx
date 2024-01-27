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

    const [juoma, setJuoma] = useState(juomaAlkuTila)

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
        setJuoma({...juoma, [e.target.name]: e.target.value});
    }

    return(
        <>
            <Button size="small" onClick={handleOpen}>
                Lisää
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Lisää juoma</DialogTitle>
                <JuomaDia juoma={juoma} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Lisää koriin</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}