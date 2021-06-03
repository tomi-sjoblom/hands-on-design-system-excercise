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
      <code><strong>Size:</strong> {spaces[0][1]}, <strong>Variables:</strong> {spaces.map(item => item[0]).join(', ')}</code>
    </SpacingBoxStyled>
  )
}


export function RadiusSet({radiuses}) {

  const groupBy = keys => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = keys.map(key => obj[key]).join('-');
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  const getGrouped = (arr, sizes) => {

    return sizes.reduce((acc,curr)=> (acc[curr]=arr.filter(s => s[0].indexOf(`radii${curr}`) !== -1),acc),{});
  }

  const getSizes = (arr) => {
    return arr.reduce((res, obj) => {
      const size = obj[0].split('radii')[1].split(/(TopRight|BottomRight|BottomLeft|TopLeft|Smoothing|Type)/)[0];
      if (res.indexOf(size) === -1 ) res.push(size);
      return res;
    }, []);
  }
  console.log(radiuses)
  const spacesSizes = getSizes(Object.entries(radiuses));
  console.log(spacesSizes)
  const spacesGrouped = getGrouped(Object.entries(radiuses), spacesSizes);
  console.log(spacesGrouped)

  return (
    <div>{spacesSizes.map(size => <RadiusBox key={size} size={size} spaces={spacesGrouped[size]} />)}</div>
  )
}

const RadiusBoxStyled = styled.div`
  margin-bottom: 2em;
  display: flex;
`;

const RadiusUnitHolder = styled.div`
  width: 116px;
  display: inline-block;
  flex-shrink: 0;
`;

const RadiusUnit = styled.div`
  width: 100px;
  height: 100px;
  border-radius: ${({ size }) => size};
  display: inline-block;
  background-color: ${(colors.primary500 || 'red')};
`;

export function RadiusBox({spaces}) {
  return (
    <RadiusBoxStyled>
      <RadiusUnitHolder>
        <RadiusUnit size={spaces[0][1]}/>
      </RadiusUnitHolder>
      <code><strong>Size:</strong> {spaces[0][1]}, <strong>Variables:</strong> {spaces.map(item => item[0]).join(', ')}</code>
    </RadiusBoxStyled>
  )
}
