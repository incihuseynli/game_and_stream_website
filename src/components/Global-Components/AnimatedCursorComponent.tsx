import AnimatedCursor from "react-animated-cursor";
const AnimatedCursorComponent = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={20}
      color='69,248,130'
      outerAlpha={0.1}
      innerScale={0.9}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "img",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default AnimatedCursorComponent;
