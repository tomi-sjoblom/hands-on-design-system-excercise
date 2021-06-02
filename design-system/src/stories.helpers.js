import React from "react";
import styled from "styled-components";

import { colors } from "./tokens";

const packageInfo = require("../package.json");

export function VersionInfo() {
  return (
    <>
    Current library version: {packageInfo.version}
    </>
    )
  }

export function SpacingSet({spaces}) {

  const groupBy = keys => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = keys.map(key => obj[key]).join('-');
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  const getGrouped = (arr, sizes) => {

    return sizes.reduce((acc,curr)=> (acc[curr]=arr.filter(s => s[0].indexOf(`spacing${curr}`) !== -1),acc),{});
  }

  const getSizes = (arr) => {
    return arr.reduce((res, obj) => {
      const size = obj[0].split('spacing')[1].split(/(Top|Right|Bottom|Left)/)[0];
      if (res.indexOf(size) === -1 ) res.push(size);
      return res;
    }, []);
  }

  const spacesSizes = getSizes(Object.entries(spaces));
  const spacesGrouped = getGrouped(Object.entries(spaces), spacesSizes);

  return (
    <div>{spacesSizes.map(size => <SpacingBox key={size} size={size} spaces={spacesGrouped[size]} />)}</div>
  )
}

const SpacingBoxStyled = styled.div`
  margin-bottom: 2em;
`;

const SpacingUnitHolder = styled.div`
  width: 50px;
  display: inline-block;
`;

const SpacingUnit = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: inline-block;
  background-color: ${(colors.primary500 || 'red')};
`;

export function SpacingBox({spaces}) {
  return (
    <SpacingBoxStyled>
      <SpacingUnitHolder>
        <SpacingUnit size={spaces[0][1]}/>
      </SpacingUnitHolder>
      <code>Variables: {spaces.map(item => item[0]).join(', ')}</code>
    </SpacingBoxStyled>
  )
}
