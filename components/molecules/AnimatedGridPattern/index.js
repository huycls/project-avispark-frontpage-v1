"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const SQUARE_COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-tertiary)",
  "var(--color-success)",
];

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  interactive = false,
  glowRadius = 2,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState([]);
  const [glowSquares, setGlowSquares] = useState([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(0);

  const getPos = useCallback(() => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.height, dimensions.width, height, width]);

  const generateSquares = useCallback(
    (count) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0,
      }));
    },
    [getPos],
  );

  const updateSquarePosition = useCallback(
    (squareId) => {
      setSquares((currentSquares) => {
        const current = currentSquares[squareId];
        if (!current || current.id !== squareId) return currentSquares;

        const nextSquares = currentSquares.slice();
        nextSquares[squareId] = {
          ...current,
          pos: getPos(),
          iteration: current.iteration + 1,
        };

        return nextSquares;
      });
    },
    [getPos],
  );

  const updateGlowFromPointer = useCallback(() => {
    const { x: px, y: py, active } = pointerRef.current;
    if (!active || dimensions.width === 0 || dimensions.height === 0) {
      setGlowSquares((current) => (current.length ? [] : current));
      return;
    }

    const col = Math.floor(px / width);
    const row = Math.floor(py / height);
    const next = [];

    for (let dy = -glowRadius; dy <= glowRadius; dy += 1) {
      for (let dx = -glowRadius; dx <= glowRadius; dx += 1) {
        const distance = Math.hypot(dx, dy);
        if (distance > glowRadius) continue;
        next.push({
          key: `${col + dx}-${row + dy}`,
          x: col + dx,
          y: row + dy,
          opacity: Math.max(
            0.08,
            maxOpacity * (1 - distance / (glowRadius + 0.35)),
          ),
          color:
            SQUARE_COLORS[
              (Math.abs(col + dx) + Math.abs(row + dy)) % SQUARE_COLORS.length
            ],
        });
      }
    }

    setGlowSquares(next);
  }, [
    dimensions.height,
    dimensions.width,
    glowRadius,
    height,
    maxOpacity,
    width,
  ]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);

  useEffect(() => {
    const element = containerRef.current;
    let resizeObserver = null;

    if (element) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setDimensions((currentDimensions) => {
            const nextWidth = entry.contentRect.width;
            const nextHeight = entry.contentRect.height;
            if (
              currentDimensions.width === nextWidth &&
              currentDimensions.height === nextHeight
            ) {
              return currentDimensions;
            }
            return { width: nextWidth, height: nextHeight };
          });
        }
      });

      resizeObserver.observe(element);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!interactive) return undefined;

    const gridLayer = containerRef.current?.parentElement;
    const target =
      containerRef.current?.closest("[data-grid-interactive]") || gridLayer;
    if (!target || !gridLayer) return undefined;

    const scheduleGlowUpdate = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateGlowFromPointer);
    };

    const handleMove = (event) => {
      const rect = gridLayer.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
      scheduleGlowUpdate();
    };

    const handleLeave = () => {
      pointerRef.current = { x: -9999, y: -9999, active: false };
      scheduleGlowUpdate();
    };

    target.addEventListener("pointermove", handleMove);
    target.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      target.removeEventListener("pointermove", handleMove);
      target.removeEventListener("pointerleave", handleLeave);
    };
  }, [interactive, updateGlowFromPointer]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
        <radialGradient id={`${id}-particle`} cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor="var(--color-secondary)"
            stopOpacity="0.55"
          />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(
          ({ pos: [squareX, squareY], id: squareId, iteration }, index) => (
            <motion.rect
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: 1,
                delay: index * 0.1,
                repeatType: "reverse",
                repeatDelay,
              }}
              onAnimationComplete={() => updateSquarePosition(squareId)}
              key={`${squareId}-${iteration}`}
              width={width - 1}
              height={height - 1}
              x={squareX * width + 1}
              y={squareY * height + 1}
              fill={SQUARE_COLORS[index % SQUARE_COLORS.length]}
              strokeWidth="0"
            />
          ),
        )}
        {glowSquares.map((square) => (
          <g key={square.key}>
            <rect
              width={width - 1}
              height={height - 1}
              x={square.x * width + 1}
              y={square.y * height + 1}
              fill={square.color}
              opacity={square.opacity}
              strokeWidth="0"
            />
            <circle
              cx={square.x * width + width / 2}
              cy={square.y * height + height / 2}
              r={Math.max(3, width * 0.18)}
              fill={`url(#${id}-particle)`}
              opacity={square.opacity * 0.9}
            />
          </g>
        ))}
      </svg>
    </svg>
  );
}
