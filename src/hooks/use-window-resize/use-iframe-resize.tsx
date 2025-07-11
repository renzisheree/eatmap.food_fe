import { get } from "lodash";
import { useEffect, useRef, useState } from "react";

const useIframeResize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const ref = useRef(null);

  useEffect(() => {
    const win = get(
      ref,
      ["current", "ownerDocument", "defaultView", "window"],
      window
    );
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: win.innerWidth ,
        height: win.innerHeight,
      });
    }

    // Add event listener
    win.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => win.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return [windowSize, ref];
};

export default useIframeResize;
