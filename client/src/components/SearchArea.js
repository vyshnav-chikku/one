import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Container = styled.div`
  min-height: 120px;
  background: #fff;
  display: flex;
  align-items: center;
  .searchbyfilter {
    margin: 0 auto;
  }
`;

const SearchArea = () => {
  return (
    <Container>
      <Button
        variant="outlined"
        className="searchbyfilter"
        startIcon={<FilterAltIcon />}
      >
        Search By Filter
      </Button>
    </Container>
  );
};

export default SearchArea;
