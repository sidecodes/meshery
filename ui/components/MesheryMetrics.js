//@ts-check
import React from "react";
import { Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import GrafanaCustomCharts from "./GrafanaCustomCharts";

function MesheryMetrics({
  boardConfigs = [], grafanaURL = "", grafanaAPIKey = "", handleGrafanaChartAddition
}) {
  if (boardConfigs?.length)
    return (
      <>
        <Typography
          align="center"
          variant="h6"
          style={{ margin : "0 0 2.5rem 0", }}
        >
          Service Mesh Metrics
        </Typography>
        <GrafanaCustomCharts
          // @ts-ignore
          enableGrafanaChip
          boardPanelConfigs={boardConfigs || []}
          grafanaURL={grafanaURL || ""}
          grafanaAPIKey={grafanaAPIKey || ""}
        />
      </>
    );

  return (
    <div
      style={{
        padding : "2rem",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
      }}
    >
      <Typography style={{ fontSize : "1.5rem", marginBottom : "2rem" }} align="center" color="textSecondary">
        No Service Mesh Metrics Configurations Found
      </Typography>
      <Button
        aria-label="Add Grafana Charts"
        variant="contained"
        color="primary"
        size="large"
        onClick={() => handleGrafanaChartAddition()}
      >
        <AddIcon />
        Configure Service Mesh Metrics
      </Button>
    </div>
  );
}

export default MesheryMetrics;
