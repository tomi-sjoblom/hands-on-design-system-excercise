import { string } from "prop-types";
import React from "react";
import { spacing } from "../../tokens";
import styled from "styled-components";

/* Avatar
 *
 * Avatar displays user picture
 */
const Avatar = ({ src, ...props }) => <StyledAvatar src={src} {...props} />;

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${spacing.spacingLgTop};
`;

Avatar.propTypes = {
  src: string,
};

export default Avatar;
