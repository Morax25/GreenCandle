"use client";
import { MARKET_DATA_WIDGET_CONFIG } from "@/lib/constants";
import React, { useEffect, useRef, memo } from "react";
import { useTradingViewWidget } from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";

interface TradingViewWidgetProps {
  title: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height: number;
  className: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div>
        {title && <h3 className="font-semibold text-2xl mb-5 text-gray-100">{title}</h3>}
      <div
        className={cn(`tradingview-widget-container`, className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{height, width:100}}
        />
      </div>
    </div>
  );
};

 export default memo(TradingViewWidget);
