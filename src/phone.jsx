import { Controller, useWatch } from "react-hook-form";
import { Box, MenuItem, Select, TextField, FormControl } from "@mui/material";

const PhoneInput = ({ name, required, register, control }) => {
  const countryCodes = [
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+216", name: "Tunisia" },
    { code: "+91", name: "India" },
  ];

  const selectedCountryCode = useWatch({
    control,
    name: "countryCode",
  });

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <FormControl sx={{ minWidth: 100 }} size="medium">
        <Controller
          name="countryCode"
          control={control}
          render={({ field }) => (
            <Select labelId="country-code-label" {...field}>
              {countryCodes.map((item) => (
                <MenuItem key={item.code} value={item.code}>
                  {item.name} ({item.code})
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <TextField
        name={name}
        type="text"
        placeholder="Phone Number"
        required={required}
        {...register(name)}
        inputProps={{
          maxLength: selectedCountryCode === "+216" ? 8 :10,
        }}
        sx={{ width: 300 }}
      />
    </Box>
  );
};

export default PhoneInput;
