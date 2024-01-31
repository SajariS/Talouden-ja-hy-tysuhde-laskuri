/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import JuomaDia from "./JuomaDia";


export default function MuokkaaJuoma({data, setKori}) {

    const [juoma, setJuoma] = useState({
        id: '',
        voltti: '',
        tilavuus: '',
        hinta: '',
        pantti: '',
        lukumaara: '',
        pakkausJuoma: 0,
        pakkaus: false
    });
    const [virheet, setVirheet] = useState({
        voltti: false,
        tilavuus: false,
        hinta: false,
        pantti: false,
        lukumaara: false,
        pakkausJuoma: false
    })

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        setJuoma({
            id: data.id,
            voltti: data.voltti,
            tilavuus: data.tilavuus,
            hinta: data.hinta,
            pantti: data.pantti,
            lukumaara: data.lukumaara,
            pakkausJuoma: data.pakkausJuoma,
            pakkaus: data.pakkaus
        });
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        const isValid = !isNaN(value);

        setJuoma({...juoma, [name]: value});
        setVirheet({...virheet, [name]: !isValid});
    };

    const handleCheckChange = () => {
        setJuoma(vanhaTila => ({
            ...vanhaTila, pakkaus: !vanhaTila.pakkaus
        }));
    };

    const validateInput = () => {
        return !Object.values(virheet).every((arvo) => arvo === false);
    };

    const handleEdit = () => {
        setKori((kori) => kori.map((vanhaJuoma) => {
            if(vanhaJuoma.id === data.id) {
                return {...vanhaJuoma,
                voltti: juoma.voltti,
                tilavuus: juoma.tilavuus,
                hinta: juoma.hinta,
                pantti: juoma.pantti,
                lukumaara: juoma.lukumaara,
                pakkausJuoma: juoma.pakkausJuoma,
                pakkaus: juoma.pakkaus
                }
            }
            return vanhaJuoma;
        }))

        handleClose();
    }
    
    return(
        <>
            <Button size="small" onClick={handleOpen}>
                Muokkaa
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Muokkaa</DialogTitle>
                <JuomaDia juoma={juoma} handleChange={handleChange} virheet={virheet} handleCheckChange={handleCheckChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEdit} disabled={validateInput()}>Tallenna</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}