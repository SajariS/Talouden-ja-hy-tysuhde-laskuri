/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";


export default function KoriVertaus({kori, kori2, setKori, setKori2}) {

    const [juomat, setJuomat] = useState({
        viinanMaara: '',
        euroMaara: '',
        hyotySuhde: '',
        summa: ''
    });
    const [juomat2, setJuomat2] = useState({
        viinanMaara: '',
        euroMaara: '',
        hyotySuhde: '',
        summa: ''
    });

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleReset = () => {
        setKori([]);
        setKori2([]);
        handleClose();
    }

    const laskeKorit = () => {
        console.log(kori);
        console.log(kori2);
    }

    return(
        <>
            <Button onClick={() => handleOpen()}>Laske ja vertaa koreja</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Yhteenveto</DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Sulje</Button>
                    <Button onClick={handleReset}>Sulje ja nollaa</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}    









    const laskuriRikulle = (juotava) => {
    //koko korille
    const viinanMaara = parseFloat(juotava.tilavuus) * (parseFloat(juotava.voltti) / 100) * parseInt(juotava.lukumaara);
    //ja myös koko korille
    const euroMaara = parseInt(juotava.lukumaara) * (parseFloat(juotava.hinta) - parseFloat(juotava.pantti));
    // ja niillä tämä
    return euroMaara / viinanMaara;
}