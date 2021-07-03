import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

interface CustomScrollBarProps {
  children: React.ReactNode;
  className: string;
}

const renderThumb = () => {
  const thumbStyle = {
    backgroundColor: "#3c9ffb",
    borderRadius: 10,
  };
  return <div style={thumbStyle} />;
};

const renderTrack = ({ style }: { style: any }) => {
  const TrackStyle = {
    backgroundColor: "#f0f7fd",
    right: 2,
    bottom: 2,
    top: 2,
    borderRadius: 3,
  };

  return <div style={{ ...style, ...TrackStyle }}></div>;
};

export const CustomScrollBar = ({
  children,
  className,
}: CustomScrollBarProps): JSX.Element => {
  return (
    <Scrollbars
      renderTrackVertical={renderTrack}
      renderThumbVertical={renderThumb}
      className={className}
    >
      {children}
    </Scrollbars>
  );
};
