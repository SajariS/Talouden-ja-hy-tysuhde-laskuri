/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import { useState } from "react";


export default function KoriVertaus({kori, kori2, setKori, setKori2}) {

    const [juomat, setJuomat] = useState({
        viinanMaara: '',
        euroMaara: '',
        hyotySuhde: '',
        summa: '',
        nestetta: ''
    });
    const [juomat2, setJuomat2] = useState({
        viinanMaara: '',
        euroMaara: '',
        hyotySuhde: '',
        summa: '',
        nestetta: ''
    });

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        laskeKorit()
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        setKori([]);
        setKori2([]);
        handleClose();
    };

    const laskeKorit = () => {
        const viinat = [], viinat2 = [];
        const hinnat = [], hinnat2 = [];
        const hintaIlmanPanttia = [], hintaIlmanPanttia2 = [];
        const tilavuus = [], tilavuus2 = [];

        kori.forEach(juoma => {

            if(juoma.pakkaus) {
                viinat.push(juoma.tilavuus * (juoma.voltti / 100) * juoma.pakkausJuoma * juoma.lukumaara);
                hinnat.push(juoma.lukumaara * juoma.hinta - (juoma.pantti * juoma.pakkausJuoma * juoma.lukumaara));
                hintaIlmanPanttia.push(juoma.lukumaara * juoma.hinta);
                tilavuus.push(juoma.tilavuus);
            }
            else {
                viinat.push(juoma.tilavuus * (juoma.voltti / 100) * juoma.lukumaara);
                hinnat.push(juoma.lukumaara * juoma.hinta - juoma.pantti * juoma.lukumaara);
                hintaIlmanPanttia.push(juoma.lukumaara * juoma.hinta);
                tilavuus.push(juoma.tilavuus);
            }
        });

        kori2.forEach(juoma => {

            if(juoma.pakkaus) {
                viinat2.push(juoma.tilavuus * (juoma.voltti / 100) * juoma.pakkausJuoma * juoma.lukumaara);
                hinnat2.push(juoma.lukumaara * juoma.hinta - (juoma.pantti * juoma.pakkausJuoma * juoma.lukumaara));
                hintaIlmanPanttia2.push(juoma.lukumaara * juoma.hinta);
                tilavuus2.push(juoma.tilavuus);
            }
            else {
                viinat2.push(juoma.tilavuus * (juoma.voltti / 100) * juoma.lukumaara);
                hinnat2.push(juoma.lukumaara * juoma.hinta - juoma.pantti * juoma.lukumaara);
                hintaIlmanPanttia2.push(juoma.lukumaara * juoma.hinta);
                tilavuus2.push(juoma.tilavuus);
            }
        });

        setJuomat({
            viinanMaara: viinat.reduce((acc, arvo) => acc + arvo, 0),
            euroMaara: hinnat.reduce((acc, arvo) => acc + arvo, 0),
            hyotySuhde: hinnat.reduce((acc, arvo) => acc + arvo, 0) / viinat.reduce((acc, arvo) => acc + arvo, 0),
            summa: hintaIlmanPanttia.reduce((acc, arvo) => acc + arvo, 0),
            nestetta: tilavuus.reduce((acc, arvo) => acc + arvo, 0)
        })
        setJuomat2({
            viinanMaara: viinat2.reduce((acc, arvo) => acc + arvo, 0),
            euroMaara: hinnat2.reduce((acc, arvo) => acc + arvo, 0),
            hyotySuhde: hinnat2.reduce((acc, arvo) => acc + arvo, 0) / viinat2.reduce((acc, arvo) => acc + arvo, 0),
            summa: hintaIlmanPanttia2.reduce((acc, arvo) => acc + arvo, 0),
            nestetta: tilavuus2.reduce((acc, arvo) => acc + arvo, 0)
        })

    }

    return(
        <>
            <Button onClick={() => handleOpen()}>Laske ja vertaa koreja</Button>
            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <DialogTitle>Yhteenveto</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650}} aria-label="Yhteenveto">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Yhteenveto</TableCell>
                                    <TableCell align="right">Nestettä yhteensä</TableCell>
                                    <TableCell align="right">Viinanmäärä</TableCell>
                                    <TableCell align="right">Hinta</TableCell>
                                    <TableCell align="right">Hyötysuhde(Pienempi parempi)</TableCell>
                                    <TableCell align="right">Hinta ilman panttia</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Kori 1</TableCell>
                                    <TableCell align="right">{parseFloat(juomat.nestetta).toFixed(2)}l</TableCell>
                                    <TableCell align="right">{parseFloat(juomat.viinanMaara).toFixed(2)}l</TableCell>
                                    <TableCell align="right">{parseFloat(juomat.euroMaara).toFixed(2)}€</TableCell>
                                    <TableCell align="right">{isNaN(juomat.hyotySuhde)? 0 : parseFloat(juomat.hyotySuhde).toFixed(2)}</TableCell>
                                    <TableCell align="right">{parseFloat(juomat.summa).toFixed(2)}€</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Kori 2</TableCell>
                                    <TableCell align="right">{parseFloat(juomat2.nestetta).toFixed(2)}l</TableCell>
                                    <TableCell align="right">{parseFloat(juomat2.viinanMaara).toFixed(2)}l</TableCell>
                                    <TableCell align="right">{parseFloat(juomat2.euroMaara).toFixed(2)}€</TableCell>
                                    <TableCell align="right">{isNaN(juomat2.hyotySuhde)? 0 : parseFloat(juomat2.hyotySuhde).toFixed(2)}</TableCell>
                                    <TableCell align="right">{parseFloat(juomat2.summa).toFixed(2)}€</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Sulje</Button>
                    <Button onClick={handleReset}>Sulje ja nollaa</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}    