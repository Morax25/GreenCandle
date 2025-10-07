import { useEffect, useRef } from "react";

export const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.log("No container ref found");
      return;
    }

    if (containerRef.current.dataset.loaded === "true") {
      return;
    }

    containerRef.current.innerHTML = '';

    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container__widget";
    widgetContainer.style.height = `${height}px`;
    widgetContainer.style.width = "100%";

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(widgetContainer);
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, height, JSON.stringify(config)]);

  return containerRef;
};