import PhoneInput from "./phone";
import { usedbStore } from "./db";
import { useDropzone } from "react-dropzone";
import { useForm, Controller, useWatch } from "react-hook-form";
import { compdbStore } from "./db";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  Button,
} from "@mui/material";
import { useState } from "react";

function Basic() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();
  const files = acceptedFiles.map((file) => (
    <h4 key={file.name}>{file.name}</h4>
  ));

  return (
    <Box>
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed orange",
          padding: 2,
          backgroundColor: "linen",
          borderRadius: "9px",
          width: "250px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />

        <Typography variant="body2" color="orange">
          Recommended resolution for image <br /> 400px * 400px
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: 3,
          border: "2px dashed gray",
          borderRadius: "8px",
          padding: 4,
          backgroundColor: "lightgray",
          textAlign: "center",
        }}
      >
        {isDragActive ? (
          <Typography>Drop your image here...</Typography>
        ) : (
          <>
            <Typography>Drag & drop your images</Typography>
            <Typography>or</Typography>
            <Button
              onClick={() =>
                document.querySelector('input[type="file"]').click()
              }
              sx={{
                marginTop: 1,
                padding: "5px 10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
                display: "inline-flex",
              }}
            >
              <img
                src="https://www.shutterstock.com/shutterstock/videos/3761516199/thumb/1.jpg?ip=x480"
                height={30}
              />
              <center>Select</center>
            </Button>
          </>
        )}
        <aside>
          <center>
            <h4>Files</h4>
            <ul>{files}</ul>
          </center>
        </aside>
      </Box>
    </Box>
  );
}

export default function CompForm() {
  const navigate = useNavigate();
  const FollowUpStatus = usedbStore((state) => state.FollowUpStatus);
  const CustomerFeedback = usedbStore((state) => state.CustomerFeedback);
  const ManagersList = usedbStore((state) => state.ManagersList);
  const SourceList = usedbStore((state) => state.SourceList);
  const ChannelList = usedbStore((state) => state.ChannelList);
  const TypeList = usedbStore((state) => state.TypeList);
  const CustomerTypeList = usedbStore((state) => state.CustomerTypeList);
  const DepartmentsList = usedbStore((state) => state.DepartmentsList);
  const CsComplaintsList = usedbStore((state) => state.CsComplaintsList);
  const CustomerRequest = usedbStore((state) => state.CustomerRequest);
  const CustomerStatusList = usedbStore((state) => state.CustomerStatusList);
  const ApplicationOptionsList = usedbStore(
    (state) => state.ApplicationOptionsList
  );
  const FoodNames = usedbStore((state) => state.FoodNames);
  const DishComplaintsOptionsList = usedbStore(
    (state) => state.DishComplaintsOptionsList
  );
  const IngredientList = usedbStore((state) => state.IngredientsList);
  const DeliveryList = usedbStore((state) => state.DeliveryList);
  const DriverNameList = usedbStore((state) => state.DriverNameList);
  const PackagingOptionsList = usedbStore(
    (state) => state.PackagingOptionsList
  );

  const { control, handleSubmit, register, errors } = useForm();
  const { Complaints, addComplaint } = compdbStore();

  const [phoneNumber, setPhoneNumber] = useState("");
  const complaints = compdbStore.getState().complaints;

  const handlePhoneNumberChange = (event) => {
    console.log("something changed");
    setPhoneNumber(event.target.value);
  };

  const selectedDepartment = useWatch({
    control,
    name: "department",
  });

  function onSubmit(data) {
    const complaints = compdbStore.getState().complaints;

    if (complaints.some((c) => c.ticketnumber === data.ticketnumber)) {
      alert("This complaint with this ticket number already exists.");

      return;
    }

    if (complaints.some((c) => c.phonenumber === data.phonenumber)) {
      alert("This complaint with this phone number already exists.");

      return;
    }

    compdbStore.getState().addComplaint(data);
    alert("This complaint has been added :))");
  }

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#ffffff",
        minHeight: "96vh",
        minWidth: "96vw",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" color="orange" gutterBottom>
          Create Complaint
        </Typography>

        <Grid
          style={{
            position: "absolute",
            top: 18,
            right: 3,
            display: "flex",
            gap: 10,
          }}
        >
          <button
            type="reset"
            style={{ border: "2px solid black", width: 160 }}
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{ backgroundColor: "black", color: "white" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            Create Complaint
          </button>
        </Grid>

        <Paper sx={{ p: 3, borderRadius: 2, border: "1px solid #B4CBFFB0" }}>
          <Typography fontWeight="bold" mb={2}>
            Complaints Overview
          </Typography>

          <Grid container spacing={2}>
            <Grid item md={3}>
              <label htmlFor="source">Select Source</label>
              <Autocomplete
                {...register("source")}
                name="source"
                options={SourceList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Source"
                    name="source"
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <label htmlFor="channel">Select Channel</label>
              <Autocomplete
                {...register("channel")}
                name="channel"
                options={ChannelList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Channel"
                    name="channel"
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <label htmlFor="type">Select Type</label>
              <Autocomplete
                {...register("type")}
                name="type"
                options={TypeList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select a Type"
                    name="type"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <label htmlFor="ticketnumber">Ticket Number</label>
              <TextField
                {...register("ticketnumber")}
                fullWidth
                type="text"
                placeholder="Enter Ticket Number"
                defaultValue=""
                inputProps={{ maxLength: 5 }}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{ p: 3, borderRadius: 2, border: "1px solid #B4CBFFB0", mt: 2 }}
        >
          <Typography fontWeight="bold" mb={2}>
            Customer Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item md={3}>
              <label htmlFor="customertype">Customer Type</label>
              <Autocomplete
                {...register("customertype")}
                name="customertype"
                options={CustomerTypeList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Customer Type"
                    name="customertype"
                  />
                )}
              />
            </Grid>

            <Grid item>
              <label htmlFor="phonenumber">Phone Number</label>
              <PhoneInput
                required
                name="phonenumber"
                register={register}
                onchange={handlePhoneNumberChange}
                value={phoneNumber}
                control={control}
              />
            </Grid>

            <Grid item>
              <label htmlFor="customername">Customer Name</label>
              <TextField
                {...register("customername")}
                name="customername"
                fullWidth
                placeholder="Customer Name"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
                }}
              />
            </Grid>

            <Grid item>
              <label htmlFor="customeremail">Customer Email</label>
              <TextField
                {...register("customeremail")}
                name="customeremail"
                fullWidth
                type="email"
                placeholder="Email"
              />
            </Grid>

            <Grid item md={3}>
              <label htmlFor="customerstatus">Customer Status</label>
              <Autocomplete
                {...register("customerstatus")}
                name="customerstatus"
                options={CustomerStatusList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Customer Status"
                    name="customerstatus"
                  />
                )}
              />
            </Grid>

            <Grid item>
              <label htmlFor="age">Age</label>
              <TextField
                {...register("age")}
                name="age"
                fullWidth
                type="text"
                inputProps={{ maxLength: 3 }}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                placeholder="Enter Age"
              />
            </Grid>

            <Grid item>
              <br />
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <RadioGroup {...field} sx={{ display: "inline-block" }}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{ p: 3, borderRadius: 2, mt: 3, border: "1px solid #B4CBFFB0" }}
        >
          <Typography fontWeight="bold" mb={2}>
            Complaint Classifications
          </Typography>

          <Grid container spacing={2}>
            <Grid item md={4}>
              <Basic />
            </Grid>

            <Grid item>
              <Grid width={1490}>
                <label htmlFor="description">Description</label>
                <TextField
                  {...register("description")}
                  name="description"
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Description"
                />
              </Grid>

              <Box sx={{ width: 300 }}>
                <label htmlFor="department">Department</label>
                <Controller
                  name="department"
                  control={control}
                  sx={{ width: 300 }}
                  render={({ field }) => (
                    <Autocomplete
                      options={DepartmentsList}
                      onChange={(e, value) => field.onChange(value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Department"
                          name="department"
                        />
                      )}
                    />
                  )}
                />

                {/*cus ser*/}

                {selectedDepartment === "Customer Service" && (
                  <Box>
                    <label htmlFor="cscomplaint">
                      Customer Service Complaint
                    </label>
                    <Autocomplete
                      {...register("cscomplaint")}
                      name="cscomplaint"
                      options={CsComplaintsList}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Complaint"
                          name="cscomplaint"
                        />
                      )}
                    />
                    <label htmlFor="agentname">Agent Name</label>
                    <Autocomplete
                      {...register("agentname")}
                      name="agentname"
                      options={ManagersList}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select an Agent "
                          name="agentname"
                        />
                      )}
                    />
                  </Box>
                )}
                {/*Food*/}

                {selectedDepartment === "Food" && (
                  <Box sx={{ width: 300 }}>
                    <label htmlFor="dishname">Dish Name</label>
                    <Autocomplete
                      {...register("dishname")}
                      name="dishname"
                      options={FoodNames}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select a dish"
                          name="dishname"
                        />
                      )}
                    />
                    <label htmlFor="dishcomplaint">Dish Complaints</label>
                    <Autocomplete
                      {...register("dishcomplaint")}
                      name="dishcomplaint"
                      options={DishComplaintsOptionsList}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Complaint"
                          name="dishcomplaint"
                        />
                      )}
                    />
                    <label htmlFor="ingredient">Ingredients</label>
                    <Autocomplete
                      {...register("ingredient")}
                      name="ingredient"
                      options={IngredientList}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select an Ingredient"
                          name="ingredient"
                        />
                      )}
                    />
                    <Grid>
                      <label htmlFor="dateofdish">Date of Dish</label>
                      <TextField
                        {...register("dateofdish")}
                        name="dateofdish"
                        fullWidth
                        type="date"
                      />
                    </Grid>
                  </Box>
                )}
                {/*Delivery*/}
                {selectedDepartment === "Delivery" && (
                  <Box sx={{ mt: 2 }}>
                    <label htmlFor="delivery">Delivery </label>
                    <Autocomplete
                      {...register("delivery")}
                      name="delivery"
                      options={DeliveryList}
                      renderInput={(params) => (
                        <TextField
                          sx={{ width: 300 }}
                          {...params}
                          placeholder="Select a Delivery "
                          name="delivery"
                        />
                      )}
                    />
                    <label htmlFor="drivername">Driver Name</label>
                    <Autocomplete
                      {...register("drivername")}
                      name="drivername"
                      options={DriverNameList}
                      renderInput={(params) => (
                        <TextField
                          sx={{ width: 300 }}
                          {...params}
                          placeholder="Select Driver Name"
                          name="drivername"
                        />
                      )}
                    />
                  </Box>
                )}
                {/*Packaging*/}
                {selectedDepartment === "Packaging" && (
                  <Box sx={{ mt: 2 }}>
                    <label htmlFor="packaging">Packaging</label>
                    <Autocomplete
                      {...register("packaging")}
                      name="packaging"
                      options={PackagingOptionsList}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select a packaging"
                          name="packaging"
                        />
                      )}
                    />
                  </Box>
                )}
                {/*App*/}
                {selectedDepartment === "Application" && (
                  <Box sx={{ width: 300 }}>
                    <label htmlFor="application">Application</label>
                    <Autocomplete
                      {...register("application")}
                      name="application"
                      options={ApplicationOptionsList}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select an Application"
                          name="application"
                        />
                      )}
                    />
                  </Box>
                )}
                {/*Other*/}
                {selectedDepartment === "Other" && (
                  <Box sx={{ mt: 2 }}>
                    <label htmlFor="othercomplaint">Other</label>
                    <TextField
                      {...register("othercomplaint")}
                      name="othercomplaint"
                      fullWidth
                      placeholder="Enter Other Complaint"
                    />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{ p: 3, borderRadius: 2, border: "1px solid #B4CBFFB0", mt: 3 }}
        >
          <Typography fontWeight="bold" mb={2}>
            Complaints Tracking
          </Typography>

          <Grid container spacing={2}>
            <Grid item md={3}>
              <label htmlFor="customerrequest">Customer Request</label>
              <Autocomplete
                {...register("customerrequest")}
                name="customerrequest"
                options={ApplicationOptionsList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Customer Request"
                    name="customerrequest"
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <label htmlFor="assignedagent">Assigned Agent</label>
              <Autocomplete
                {...register("assignedagent")}
                name="assignedagent"
                options={ManagersList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Assigned Agent"
                    name="assignedagent"
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <label htmlFor="assignedmanager">Assigned Manager</label>
              <Autocomplete
                {...register("assignedmanager")}
                name="assignedmanager"
                options={ManagersList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Assigned Manager"
                    name="assignedmanager"
                  />
                )}
              />
            </Grid>

            <Grid item md={3}>
              <label htmlFor="complaintstatus">Complaint Status</label>
              <Autocomplete
                {...register("complaintstatus")}
                name="complaintstatus"
                options={CsComplaintsList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Complaint Status"
                    name="complaintstatus"
                  />
                )}
              />
            </Grid>
            <br />

            <Grid item>
              <Grid sx={{ width: 1800 }}>
                <label htmlFor="solution">Solution</label>
                <TextField
                  {...register("solution")}
                  name="solution"
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Solution"
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{ p: 3, borderRadius: 2, border: "1px solid #B4CBFFB0", mt: 3 }}
        >
          <Typography fontWeight="bold" mb={2}>
            Complaints Follow-Up
          </Typography>

          <Grid container spacing={2}>
            <Grid item md={3}>
              <label htmlFor="followupstatus">Follow-Up Status</label>
              <Autocomplete
                {...register("followupstatus")}
                name="followupstatus"
                options={FollowUpStatus}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Customer Request"
                    name="followupstatus"
                  />
                )}
              />
            </Grid>
            <Grid item md={3}>
              <label htmlFor="customerfeedback">Customer Feedback</label>
              <Autocomplete
                {...register("customerfeedback")}
                name="customerfeedback"
                options={CustomerFeedback}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Assigned Agent"
                    name="customerfeedback"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}
