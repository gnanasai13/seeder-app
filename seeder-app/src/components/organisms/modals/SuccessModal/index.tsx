import React from "react";
import { Modal, Button, Box, Avatar } from "@mui/material";
import load from "../../../../../images/review gif.png";
import { theme } from "../../../../themes/index";
import TypographyComponent from "../../../atoms/Typography";
import BoxComponent from "../../../atoms/Box";
import "./index.css";

const SuccessModal = (props) => {
  return (
    <div>
      <Modal open={props.show} onClose={props.cancel}>
        <Box className="modal">
          <Box className="modal-header">
            <Box className="header-text">
              <TypographyComponent variant="h2">
                Cash kick launched successfully!
              </TypographyComponent>
              <TypographyComponent variant="h3">
                We are reviewing your cash kick
              </TypographyComponent>
            </Box>
            <Button
              sx={{ color: theme.palette.icon.highEmphasis, fontSize: "32px" }}
              onClick={props.cancel}
            >
              &times;
            </Button>
          </Box>
          <Box className="modal-body">
            <Box className="body-container">
              <Box>
                <Avatar className="review-img" src={load} />
              </Box>
              <Box className="body-text">
                <BoxComponent width="560px" height="29px">
                  <TypographyComponent variant="h2">
                    Your cash kick is under review
                  </TypographyComponent>
                </BoxComponent>
                <BoxComponent width="560px" height="66px">
                  <TypographyComponent variant="body1">
                    It will remain on pending state until we review it
                    internally. This can take upto 5 mins to couple of hours.
                    Once reviewed, the cash will be transferred to your account
                    and {"you'll"} be notified.
                  </TypographyComponent>
                </BoxComponent>
              </Box>
            </Box>
          </Box>
          <Box className="modal-footer">
            <Button className="close-button" onClick={props.cancel}>Close</Button>
            <Button
              className="view-button"
              onClick={props.close}
              variant="contained"
            >
              View Cash Kicks
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessModal;
