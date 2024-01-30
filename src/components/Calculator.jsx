import { useState } from "react";

import LisaaJuoma from "./LisaaJuoma";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { Grid, Button, Container } from "@mui/material";
import MuokkaaJuoma from "./MuokkaaJuoma";
import KoriVertaus from "./KoriVertaus";

export default function Calculator() {

    const [kori, setKori] = useState([]);
    const [kori2, setKori2] = useState([]);

    //Viereen +(kopioi) ja -(poisto) ja nappi joka nollaa
    //editointi -- Tehty
    const [columnDefs] = useState([
        {field: 'voltti', width: 110},
        {field: 'tilavuus', width: 110},
        {field: 'hinta', width: 110},
        {field: 'lukumaara', width: 110, headerName: 'lkm.'},
        {
            cellRenderer: params => <Button size="small" color="error" onClick={() => handleDelete(params.data.id)}>Poista</Button>,
            width: 90
        },
        {
            cellRenderer: params => <MuokkaaJuoma data={params.data} setKori={setKori} />,
            width: 100
        }
    ]);
    const [columnDefs2] = useState([
        {field: 'voltti', width: 110},
        {field: 'tilavuus', width: 110},
        {field: 'hinta', width: 110},
        {field: 'lukumaara', width: 110, headerName: 'Lkm.'},
        {
            cellRenderer: params => <Button size="small" color="error" onClick={() => handleDelete(params.data.id)}>Poista</Button>,
            width: 90
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

    return(
        <>
            <Container maxWidth="xxl">
                    <Grid container spacing={0} justifyContent="center">
                        <Grid item xs={5}>
                            <div className="ag-theme-material" style={{ width: '90%', height: 600}}>
                                    <LisaaJuoma setKori={setKori} kori={kori} />
                                    <AgGridReact
                                    rowData={kori}
                                    columnDefs={columnDefs}
                                    overlayNoRowsTemplate="Lisää juomia napista"
                                    />
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                        <KoriVertaus kori={kori} kori2={kori2} setKori={setKori} setKori2={setKori2} />
                        </Grid>
                        <Grid item xs={5}>
                            <div className="ag-theme-material" style={{ width: '90%', height: 600}}>
                                    <LisaaJuoma setKori={setKori2} kori={kori2} />
                                    <AgGridReact
                                    rowData={kori2}
                                    columnDefs={columnDefs2}
                                    overlayNoRowsTemplate="Lisää juomia napista"
                                    />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
        </>
    )
}