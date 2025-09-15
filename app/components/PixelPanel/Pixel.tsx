import React from "react";

export const Pixel: React.FC<{
    color: string;
    pixelWidth: number;
    pixelHeight: number;
    transitionStyle?: React.CSSProperties;
}> = ({ color, pixelWidth, pixelHeight, transitionStyle }) => {
    return (
        <div
            style={{
                backgroundColor: color,
                width: pixelWidth,
                height: pixelHeight,
                ...transitionStyle,
            }}
        />
    );
};
