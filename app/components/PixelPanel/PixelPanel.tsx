"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Pixel } from "./Pixel";

export type GridFrame = number[][];
export type ColorMap = { [key: number]: string };

type PixelPanelBaseProps = {
    colorMap?: ColorMap;
    transitionStyle?: React.CSSProperties;
    gridFrames: GridFrame[];
    frameInterval?: number; // ms per frame
    loop?: boolean;
};

type PixelSizeProps =
  | { pixelSize: number; pixelWidth?: never; pixelHeight?: never }
  | { pixelSize?: never; pixelWidth: number; pixelHeight: number };

type GapProps = 
    | { gap: number; xGap?: never; yGap?: never }
    | { gap?: never; xGap: number; yGap: number }

type PixelPanelProps = PixelPanelBaseProps & PixelSizeProps & GapProps;

const mockTransitionStyle: React.CSSProperties = {
  transition: "background-color 0.4s ease-in-out, transform 0.3s ease-in-out",
};

const MemoizedPixel = React.memo(Pixel);

export const PixelPanel: React.FC<PixelPanelProps> = ({
    colorMap = { 0: "black", 1: "white" },
    pixelSize = 25,
    pixelHeight,
    pixelWidth,
    gap = 10,
    yGap,
    xGap,
    transitionStyle = mockTransitionStyle,
    gridFrames,
    frameInterval = 500,
    loop = true,
}) => {
    const [frameIndex, setFrameIndex] = useState(0);
    const width = pixelWidth ?? pixelSize;
    const height = pixelHeight ?? pixelSize;
    const yGapFinal = yGap ?? gap;
    const xGapFinal = xGap ?? gap;

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
            gridTemplateColumns: `repeat(${currentGrid[0].length}, ${width}px)`,
            gap: `${yGapFinal}px ${xGapFinal}px`,
        }),
        [currentGrid, width, yGapFinal, xGapFinal]
    );

    return (
        <div style={gridStyle}>
            {currentGrid.map((row, rowIndex) =>
                row.map((gridValue, colIndex) => (
                    <MemoizedPixel
                        key={`(${rowIndex},${colIndex})`}
                        color={colorMap[gridValue] ?? "transparent"}
                        pixelWidth={width}
                        pixelHeight={height}
                        transitionStyle={transitionStyle}
                    />
                ))
            )}
        </div>
    );
};
