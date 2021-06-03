import React from "react";
import styled from "styled-components";
import { spacing } from "../../tokens";
import { node, string } from "prop-types";

/* TopBar
 *
 * A wrapper component for the app nav, with slots for two actions and a title.
 */
const TopBar = ({ firstAction = null, title, lastAction = null }) => {
  return (
    <StyledTopBar>
      {firstAction}
      {title && (
        <StyledTitle>
          <h4>{title}</h4>
        </StyledTitle>
      )}
      {lastAction}
    </StyledTopBar>
  );
};

TopBar.propTypes = {
  firstAction: node,
  lastAction: node,
  title: string,
};

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.spacing4XlTop};
  padding-top: ${spacing.spacing2XlTop};
`;

const StyledTitle = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: ${spacing.spacing2XlLeft};
`;

export default TopBar;
