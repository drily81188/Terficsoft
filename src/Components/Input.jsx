import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ariaLabel = { "aria-label": "description" };
export const Inputs = () => {
  const [value, setValue] = React.useState(dayjs());
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    hobbies: "",
  });
  const handler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          defaultValue="name"
          inputProps={ariaLabel}
          onChange={handler}
          id="name"
        />
        <Input
          placeholder="email"
          inputProps={ariaLabel}
          onChange={handler}
          id="email"
        />
        <Input
          defaultValue="phone"
          inputProps={ariaLabel}
          onChange={handler}
          id="phone"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="For desktop"
            value={value}
            minDate={dayjs("2017-01-01")}
            id="dob"
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
          onChange={handler}
          id="gender"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
          onChange={handler}
          id="gender"
        />
        <Checkbox {...label} defaultChecked onChange={handler} id="hobbies" />
        football
        <Checkbox {...label} onChange={handler} id="hobbies" />
        Reading Books
        <Checkbox {...label} onChange={handler} id="hobbies" />
        tracking
        <Checkbox {...label} onChange={handler} id="hobbies" />
        Coding
      </Box>
      {data.id}
    </div>
  );
};
