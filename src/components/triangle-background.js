import React from "react";
import { Flex } from "./";

const TriangleBackground = props => {
  return (
    <Flex>
      <Flex
        position="fixed"
        top={["0px", "20px", "200px"]}
        left={["0px", "0px", "0px"]}
        borderTop={[
          "175px solid transparent",
          "175px solid transparent",
          "275px solid transparent"
        ]}
        borderBottom={[
          "175px solid transparent",
          "175px solid transparent",
          "275px solid transparent"
        ]}
        borderRight={[
          "175px solid rgba(235,255,0, 0.6)",
          "175px solid rgba(235,255,0, 0.6)",
          "275px solid rgba(235,255,0, 0.6)"
        ]}
        rotate="34deg"
        overflow="hidden"
      />
      <Flex
        height="0px"
        width="0px"
        position="fixed"
        top={["300px", "450px", "400px"]}
        left={["150px", "200px", "500px"]}
        borderTop={[
          "170px solid transparent",
          "200px solid transparent",
          "300px solid transparent"
        ]}
        borderBottom={[
          "170px solid transparent",
          "200px solid transparent",
          "300px solid transparent"
        ]}
        borderRight={[
          "170px solid rgba(255,0,200, 0.6)",
          "200px solid rgba(255,0,200, 0.6)",
          "300px solid rgba(255,0,200, 0.6)"
        ]}
        rotate="130deg"
        overflow="hidden"
      />
      <Flex
        height="0px"
        width="0px"
        position="fixed"
        top={["140px", "200px", "100px"]}
        left={["300px", "450px", "550px"]}
        borderTop={[
          "175px solid transparent",
          "200px solid transparent",
          "300px solid transparent"
        ]}
        borderBottom={[
          "175px solid transparent",
          "200px solid transparent",
          "300px solid transparent"
        ]}
        borderRight={[
          "175px solid rgba(38,171,236, 0.6)",
          "200px solid rgba(38,171,236, 0.6)",
          "300px solid rgba(38,171,236, 0.6)"
        ]}
        rotate="300deg"
        overflow="hidden"
      />
    </Flex>
  );
};

export default TriangleBackground;
