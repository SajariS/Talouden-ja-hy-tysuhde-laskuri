/* eslint-disable react/prop-types */
import { DialogContent, TextField } from "@mui/material";


export default function JuomaDia({juoma, handleChange, virheet}) {



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
            error={virheet.voltti}
            helperText={virheet.voltti ? 'Virheellinen syöte' : ''}
            inputProps={{
                pattern: '^\\d*\\.?\\d*$',
                inputMode: 'numeric'
            }}
            />
            <TextField
            margin="dense"
            label="Tilavuus"
            name="tilavuus"
            fullWidth
            variant="standard"
            value={juoma.tilavuus}
            onChange={handleChange}
            error={virheet.tilavuus}
            helperText={virheet.voltti ? 'Virheellinen syöte' : ''}
            inputProps={{
                pattern: '^\\d*\\.?\\d*$',
                inputMode: 'numeric'
            }}
            />
            <TextField
            margin="dense"
            label="Hinta"
            name="hinta"
            fullWidth
            variant="standard"
            value={juoma.hinta}
            onChange={handleChange}
            error={virheet.hinta}
            helperText={virheet.voltti ? 'Virheellinen syöte' : ''}
            inputProps={{
                pattern: '^\\d*\\.?\\d*$',
                inputMode: 'numeric'
            }}
            />
            <TextField
            margin="dense"
            label="Pantti"
            name="pantti"
            fullWidth
            variant="standard"
            value={juoma.pantti}
            onChange={handleChange}
            error={virheet.pantti}
            helperText={virheet.voltti ? 'Virheellinen syöte' : ''}
            inputProps={{
                pattern: '^\\d*\\.?\\d*$',
                inputMode: 'numeric'
            }}
            />
        </DialogContent>
    )
}