"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Pixel } from "./Pixel";

export type GridFrame = number[][];
type PixelPanelProps = {
  color1?: string;
  color2?: string;
  pixelWidth?: number;
  pixelHeight?: number;
  yGap?: number;
  xGap?: number;
  transitionStyle?: React.CSSProperties;
  gridFrames: GridFrame[];
  frameInterval?: number; // ms per frame
  loop?: boolean;
};

const MemoizedPixel = React.memo(Pixel);

export const PixelPanel: React.FC<PixelPanelProps> = ({
  color1 = "black",
  color2 = "white",
  pixelWidth = 25,
  pixelHeight = 25,
  yGap = 10,
  xGap = 10,
  transitionStyle,
  gridFrames,
  frameInterval = 500,
  loop = true,
}) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (gridFrames.length <= 1) return;
    const id = setInterval(() => {
      setFrameIndex((prev) => {
        const next = prev + 1;
        if (next >= gridFrames.length) return loop ? 0 : prev;
        return next;
      });
    }, frameInterval);
    return () => clearInterval(id);
  }, [gridFrames.length, frameInterval, loop]);

  const currentGrid = gridFrames[frameIndex];

  const gridStyle = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${currentGrid[0].length}, ${pixelWidth}px)`,
      gap: `${yGap}px ${xGap}px`,
    }),
    [currentGrid, pixelWidth, yGap, xGap]
  );

  return (
    <div style={gridStyle}>
      {currentGrid.map((row, rowIndex) =>
        row.map((gridValue, colIndex) => (
          <MemoizedPixel
            key={`(${rowIndex},${colIndex})`}
            color={gridValue === 1 ? color1 : color2}
            pixelWidth={pixelWidth}
            pixelHeight={pixelHeight}
            transitionStyle={transitionStyle}
          />
        ))
      )}
    </div>
  );
};
