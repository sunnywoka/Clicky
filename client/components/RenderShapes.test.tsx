// @vitest-environment jsdom

import React from 'react';
import { describe, it, expect, vi } from 'vitest'
import Square from './shapes/Square'
import { renderComponent } from '../test-utils'
import Triangle from './shapes/Triangle';
import Circle from './shapes/Circle';

describe('Shapes Components', () => {
  it('renders a Square with a rect element with correct attributes', () => {
    const squareProps = {
      x: 10,
      y: 20,
      size: 30,
      handleClick: () => {},
    };

    const { user } = renderComponent(
      <Square
        handleClick={squareProps.handleClick}
        x={squareProps.x}
        y={squareProps.y}
        size={squareProps.size}
      />
    );

    const rectElement = document.querySelector('[data-testid="square-rect"]');
    expect(rectElement).toBeInTheDocument();
    expect(rectElement?.getAttribute('x')).toBe('10');
    expect(rectElement?.getAttribute('y')).toBe('20');
    expect(rectElement?.getAttribute('width')).toBe('30');
    expect(rectElement?.getAttribute('height')).toBe('30');
  });

  it('renders a Triangle with a polygon element with correct attributes', () => {
    const triangleProps = {
      x: 20,
      y: 30,
      sideLength: 40,
      handleTriangleClick: () => {},
    };

    const { user } = renderComponent(
      <Triangle
        handleTriangleClick={triangleProps.handleTriangleClick}
        x={triangleProps.x}
        y={triangleProps.y}
        sideLength={triangleProps.sideLength}
      />
    );

    const polygonElement = document.querySelector('[data-testid="triangle-polygon"]');
    expect(polygonElement).toBeInTheDocument();
    expect(polygonElement?.getAttribute('points')).toBe('40 36, 60 70, 20 70');
  });

  it('renders a Circle with a circle element with correct attributes', () => {
    const circleProps = {
      x: 30,
      y: 40,
      radius: 20,
      handleCircleClick: () => {},
    };

    const { user } = renderComponent(
      <Circle
        handleCircleClick={circleProps.handleCircleClick}
        x={circleProps.x}
        y={circleProps.y}
        radius={circleProps.radius}
      />
    );

    const circleElement = document.querySelector('[data-testid="circle-circle"]');
    expect(circleElement).toBeInTheDocument();
    expect(circleElement?.getAttribute('cx')).toBe('35');
    expect(circleElement?.getAttribute('cy')).toBe('45');
    expect(circleElement?.getAttribute('r')).toBe('20');
  });
});