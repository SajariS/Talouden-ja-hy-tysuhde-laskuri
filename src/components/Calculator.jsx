import { useState } from "react";

import LisaaJuoma from "./LisaaJuoma";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { Grid, Button } from "@mui/material";
import MuokkaaJuoma from "./MuokkaaJuoma";

export default function Calculator() {

    const [kori, setKori] = useState([]);
    const [kori2, setKori2] = useState([]);

    //Viereen +(kopioi) ja -(poisto) ja nappi joka nollaa
    //editointi -- Tehty
    const [columnDefs] = useState([
        {field: 'voltti', width: 140},
        {field: 'tilavuus', width: 120},
        {field: 'hinta', width: 120},
        {field: 'lukumaara', width: 120, headerName: 'Lukumäärä'},
        {
            cellRenderer: params => <Button size="small" onClick={() => handleDelete(params.data.id)}>Poistha</Button>,
            width: 100
        },
        {
            cellRenderer: params => <MuokkaaJuoma data={params.data} setKori={setKori} />,
            width: 100
        }
    ]);
    const [columnDefs2] = useState([
        {field: 'voltti', width: 120},
        {field: 'tilavuus', width: 120},
        {field: 'hinta', width: 120},
        {field: 'lukumaara', width: 120, headerName: 'Lukumäärä'},
        {
            cellRenderer: params => <Button size="small" onClick={() => handleDelete(params.data.id)}>Poistha</Button>,
            width: 100
        },
        {
            cellRenderer: params => <MuokkaaJuoma data={params.data} kori={kori2} setKori={setKori2} />,
            width: 100
        }
    ]);

    const handleDelete = (id) => {
        //Uuid pitäisi olla täysin uniikki, eli pitäisi toimia kahdella listalla jos poistettavaa
        //filtteröiddän kummastakin listasta

        setKori(kori => {
            return kori.filter((item,_) => item.id !== id );
        })
        setKori2(kori2 => {
            return kori2.filter((item,_) => item.id !== id );
        })

        console.log(kori);
        console.log(kori2);
    }

    const laskuriRikulle = (juotava) => {
        //koko korille
        const viinanMaara = parseFloat(juotava.tilavuus) * (parseFloat(juotava.voltti) / 100) * parseInt(juotava.lukumaara);
        //ja myös koko korille
        const euroMaara = parseInt(juotava.lukumaara) * (parseFloat(juotava.hinta) - parseFloat(juotava.pantti));
        // ja niillä tämä
        return euroMaara / viinanMaara;
    }

    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="ag-theme-material" style={{ width: '80%', height: 600}}>
                            <LisaaJuoma setKori={setKori} kori={kori} />
                            <AgGridReact
                            rowData={kori}
                            columnDefs={columnDefs}
                            />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="ag-theme-material" style={{ width: '80%', height: 600}}>
                            <LisaaJuoma setKori={setKori2} kori={kori2} />
                            <AgGridReact
                            rowData={kori2}
                            columnDefs={columnDefs2}
                            />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}