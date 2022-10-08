import * as React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const EmployeeCard: React.FC<IEmployeeCardProps> = ({ title }) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            component="p"
            style={{ color: "background.primary" }}
            lineHeight={"50px"}
            textAlign="center"
          >
            0
          </Typography>
        </Box>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Button variant="contained">Status</Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
