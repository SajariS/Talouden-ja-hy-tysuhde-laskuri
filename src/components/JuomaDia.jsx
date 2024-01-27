/* eslint-disable react/prop-types */
import { DialogContent, TextField } from "@mui/material";


export default function JuomaDia({juoma, handleChange}) {
    return(
        <DialogContent>
            <TextField
            margin="dense"
            label="Voltti"
            name="voltti"
            fullWidth
            variant="standard"
            value={juoma.voltti}
            onChange={handleChange}
            type="number"
            />
            <TextField
            margin="dense"
            label="Tilavuus"
            name="tilavuus"
            fullWidth
            variant="standard"
            value={juoma.tilavuus}
            onChange={handleChange}
            type="number"
            />
            <TextField
            margin="dense"
            label="Hinta"
            name="hinta"
            fullWidth
            variant="standard"
            value={juoma.hinta}
            onChange={handleChange}
            type="number"
            />
            <TextField
            margin="dense"
            label="Pantti"
            name="pantti"
            fullWidth
            variant="standard"
            value={juoma.pantti}
            onChange={handleChange}
            type="number"
            />
        </DialogContent>
    )
}