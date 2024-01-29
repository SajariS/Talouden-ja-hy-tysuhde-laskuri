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
        lukumaara: ''
    });
    const [virheet, setVirheet] = useState({
        voltti: false,
        tilavuus: false,
        hinta: false,
        pantti: false,
        lukumaara: false
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
            lukumaara: data.lukumaara
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
                lukumaara: juoma.lukumaara
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
                <JuomaDia juoma={juoma} handleChange={handleChange} virheet={virheet} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEdit} disabled={validateInput()}>Tallenna</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}