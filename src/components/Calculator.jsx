import { useState } from "react";

import LisaaJuoma from "./LisaaJuoma";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { Grid } from "@mui/material";

export default function Calculator() {

    const [kori, setKori] = useState([]);
    const [kori2, setKori2] = useState([]);

    const [columnDefs] = useState([
        {field: 'voltti'},
        {field: 'tilavuus'},
        {field: 'hinta'}
    ]);

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
                            columnDefs={columnDefs}
                            />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}