/* eslint-disable react/prop-types */
import { Checkbox, DialogContent, FormControlLabel, InputAdornment, TextField, Typography } from "@mui/material";


export default function JuomaDia({juoma, handleChange, virheet, handleCheckChange}) {

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
            label="tilavuus"
            name="tilavuus"
            fullWidth
            variant="standard"
            value={juoma.tilavuus}
            onChange={handleChange}
            error={virheet.tilavuus}
            helperText={virheet.tilavuus ? 'Virheellinen syöte' : ''}
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
            helperText={virheet.hinta ? 'Virheellinen syöte' : ''}
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
            helperText={virheet.pantti ? 'Virheellinen syöte' : ''}
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
            helperText={virheet.lukumaara ? 'Virheellinen syöte' : ''}
            type="number"
            inputProps={{min: 0}}
            />
            <FormControlLabel control={<Checkbox checked={juoma.pakkaus} onChange={() => handleCheckChange()} />} label="Pakkaus?" />
            {juoma.pakkaus && (
                <>
                    <TextField
                    margin="dense"
                    label="Pakkauksessa olevien juomien määrä"
                    name="pakkausJuoma"
                    fullWidth
                    variant="standard"
                    value={juoma.pakkausJuoma}
                    onChange={handleChange}
                    error={virheet.pakkausJuoma}
                    helperText={virheet.pakkausJuoma ? 'Virheellinen syöte' : ''}
                    type="number"
                    inputProps={{min: 0}}
                    />
                    <Typography>Muista päivittää tilavuus ja pantti vastaamaan yksittäistä juomaa, hinta tarkoittaa yhden pakkauksen hintaa, lukumäärä tarkoittaa yhtä pakkausta</Typography>
                </>
            )}
        </DialogContent>
    )
}