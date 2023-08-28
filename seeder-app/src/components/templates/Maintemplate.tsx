import React from "react";
import NavigationBar from "../organisms/Bars/NavBar";
import TitleBar from "../organisms/Bars/TitleBar";
import YourContract from "../organisms/card/cashaccleration/YourContract";
import { Grid } from "@mui/material";
import { theme } from "../../themes";
import Summary1 from "../organisms/card/Summary/Summary1";
import { rows } from "../organisms/tables/TableComponent";
import SelectedContracts from "../organisms/card/cashaccleration/SelectedContract";
import Summary2 from "../organisms/card/Summary/Summary2"

function Maintemplate({handleShowHome,handleShowCashAcceleration,handleShowSuccess}) {
  const [selectedRowIds, setSelectedRowIds] = React.useState([]);

  const [showYourContracts, setShowYourContracts] = React.useState(true);
  const handleReviewButtonClick = () => {
    setShowYourContracts(false);
  };


  const handleReset = () => {
    setSelectedRowIds([]);
  };
  const handleRowSelectionModelChange = (newSelectionModel) => {
    setSelectedRowIds(newSelectionModel);
  };

  if (showYourContracts) {
    return (
      <Grid style={{ background: theme.palette.structural.elevation0 }}>
        <TitleBar title="New Cash Kick" />
        <YourContract
          selectionModel={selectedRowIds}
          handleRowSelectionModelChange={handleRowSelectionModelChange}
        />
        <Summary1
          selectedRows={selectedRowIds}
          rows={rows}
          handleReset={handleReset}
          handleReviewButtonClick={handleReviewButtonClick}
          handleRowSelectionModelChange={handleRowSelectionModelChange}
        />
        <NavigationBar handleShowHome={handleShowHome} handleShowCashAcceleration={handleShowCashAcceleration} />
      </Grid>
    );
  } else {
    return (
      <Grid style={{ background: theme.palette.structural.elevation0 }}>
        <TitleBar title="New Cash Kick" caption="Let's setup a new cash kick to power your Saas" />
        <SelectedContracts selectedRows={selectedRowIds} rows={rows} />
        <Summary2 selectedRows={selectedRowIds} rows={rows} handleShowSuccess={handleShowSuccess} />
        <NavigationBar handleShowHome={handleShowHome} handleShowCashAcceleration={handleShowCashAcceleration} />
      </Grid>
    );
  }
}

export default Maintemplate;
