import React, { useState } from "react";
import { Modal, Button, Box, TextField, InputLabel } from "@mui/material";
import TypographyComponent from "../../../atoms/Typography";
import "./NameCashkick.css";
import SuccessModal from "../SuccessModal";

const NameCashkick = (props) => {
  const [text, setText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const textFieldStyle = {
    input: {
      background: "#3A3A3D",
      color: "#C9C8CC",
    },
    label: {
      color: "#A5A5A6",
    },
  };

  return (
    <div>
      <Modal open={props.show} onClose={props.close}>
        <Box className="modal1">
          <Box className="modal1-header">
            <Box className="header1-text">
              <TypographyComponent variant="h2">
                Name your cash kick
              </TypographyComponent>
              <TypographyComponent variant="h3">
                Add a name to identify your cash kick
              </TypographyComponent>
            </Box>
            <Button className="close1-button" onClick={props.close}>
              &times;
            </Button>
          </Box>
          <Box className="modal1-body">
            <Box className="body1-text">
              <InputLabel className="input" htmlFor="component-simple">
                Cash kick name
              </InputLabel>
              <TextField
                label="Ex: marketing expenses"
                variant="outlined"
                value={text}
                onChange={handleTextChange}
                fullWidth
                inputProps={{
                  style: textFieldStyle.input,
                }}
                InputLabelProps={{
                  style: textFieldStyle.label,
                }}
              />
            </Box>
          </Box>
          <Box className="modal1-footer">
            <Button onClick={props.close} className="cancel-button">
              Cancel
            </Button>
            <Button
              variant="contained"
              className="create-button"
              onClick={() => {setShowSuccess(true)}}
              disabled={!text}
            >
              Create Cash Kick
            </Button>
          </Box>
        </Box>
      </Modal>

      <SuccessModal
        show={showSuccess}
        close={() => {
          setShowSuccess(false);
          props.handleShowSuccess(); 
        }}

        cancel={()=>setShowSuccess(false)}
      />
    </div>
  );
};

export default NameCashkick;
