/* eslint-disable react/prop-types */
import { DialogContent, InputAdornment, TextField } from "@mui/material";


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
            InputProps={{
                startAdornment: <InputAdornment position="start">%</InputAdornment>,
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
            InputProps={{
                startAdornment: <InputAdornment position="start">l</InputAdornment>,
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
            InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
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
            InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            />
            <TextField
            margin="dense"
            label="Lukumäärä"
            name="lukumaara"
            fullWidth
            variant="standard"
            value={juoma.lukumaara}
            onChange={handleChange}
            error={virheet.lukumaara}
            helperText={virheet.voltti ? 'Virheellinen syöte' : ''}
            type="number"
            inputProps={{min: 0}}
            />
        </DialogContent>
    )
}