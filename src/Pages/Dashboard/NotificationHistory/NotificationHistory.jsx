import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PageContainer from "../../../components/HOC/PageContainer";
import { Grid } from "@mui/material";

function NotificationHistory() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <PageContainer>
      <Grid container>
        <Grid item>
        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
          <InputLabel id="demo-select-small-label">Complain No.</InputLabel>
          <Select
            labelId="demo-select-large-label"
            id="demo-select-large"
            value={age}
            label="Complain No."
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item>
        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
          <InputLabel id="demo-select-small-label">Complain No.</InputLabel>
          <Select
            labelId="demo-select-large-label"
            id="demo-select-large"
            value={age}
            label="Complain No."
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item>
        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
          <InputLabel id="demo-select-small-label">Raiser Name</InputLabel>
          <Select
            labelId="demo-select-large-label"
            id="demo-select-large"
            value={age}
            label="raiser Name"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Grid>

        <Grid item>
        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
          <InputLabel id="demo-select-small-label">Taker name</InputLabel>
          <Select
            labelId="demo-select-large-label"
            id="demo-select-large"
            value={age}
            label="taker Name"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Grid>

        <Grid container>

        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default NotificationHistory;
