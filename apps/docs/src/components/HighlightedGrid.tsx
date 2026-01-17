/**
 * Given the input dimentions, render a grid for every combination of rows and columns
 * If onHightlightedCell is provided, call it when a cell is hovered and add a highlight style to the cell
 */

import { Paper } from "@dldc/ui-components/paper";
import { Scrollbars } from "@dldc/ui-components/scrollbars";
import { useCallback, useState } from "react";
import { Fragment } from "react/jsx-runtime";

export interface HeighligedCellParams<TRow, TColumn> {
  key: string;
  row: TRow;
  column: TColumn;
  rowIndex: number;
  columnIndex: number;
}

export interface HighlightedGridProps<TRow, TColumn> {
  rowsDims?: TRow[];
  columnsDims?: TColumn[];
  renderCell: (params: HeighligedCellParams<TRow, TColumn>) => React.ReactNode;
  onHighlightedCell?: (params: HeighligedCellParams<TRow, TColumn>) => void;
  className?: string;
}

export function HighlightedGrid<TRow, TColumn>({
  rowsDims,
  columnsDims,
  renderCell,
  onHighlightedCell,
  className,
}: HighlightedGridProps<TRow, TColumn>) {
  const hasRows = rowsDims && rowsDims.length > 0;
  const hasColumns = columnsDims && columnsDims.length > 0;

  const safeRows = hasRows ? rowsDims : ([null] as TRow[]);
  const safeColumns = hasColumns ? columnsDims : ([null] as TColumn[]);

  const columnOffset = hasRows ? 2 : 1;
  const rowOffset = hasColumns ? 2 : 1;

  const [highlighted, setHighlighted] = useState<{ columnIndex: number; rowIndex: number } | null>(null);

  const onHightlighted = useCallback(
    (params: HeighligedCellParams<TRow, TColumn>) => {
      setHighlighted(params ? { columnIndex: params.columnIndex, rowIndex: params.rowIndex } : null);
      onHighlightedCell?.(params);
    },
    [onHighlightedCell],
  );

  return (
    <Paper background="900" className={className}>
      <Scrollbars className="h-full w-full">
        <div className="p-3 w-max">
          <div
            className="gap-3 relative grid"
            style={{
              gridTemplateRows: `${hasColumns ? "4px " : ""} repeat(${safeRows.length}, max-content)`,
              gridTemplateColumns: `${hasRows ? "4px " : ""} repeat(${safeColumns.length}, max-content)`,
            }}
          >
            {highlighted && hasRows && (
              <div
                className="bg-white/15 align-self-stretch justify-self-stretch rounded-0x my--1 sticky left-0"
                style={{ gridColumn: 1, gridRow: rowOffset + highlighted.rowIndex }}
              />
            )}
            {highlighted && hasColumns && (
              <div
                className="bg-white/15 align-self-stretch justify-self-stretch rounded-0x mx--1 sticky top-0"
                style={{ gridColumn: columnOffset + highlighted.columnIndex, gridRow: 1 }}
              />
            )}

            {safeColumns.map((column, columnIndex) => (
              <Fragment key={columnIndex}>
                {safeRows.map((row, rowIndex) => {
                  const key = `${columnIndex}-${rowIndex}`;
                  const params: HeighligedCellParams<TRow, TColumn> = { key, row, column, rowIndex, columnIndex };
                  return (
                    <div
                      className="relative"
                      style={{ gridColumn: columnOffset + columnIndex, gridRow: rowOffset + rowIndex }}
                      key={key}
                      onPointerEnter={() => onHightlighted(params)}
                    >
                      {renderCell(params)}
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </Scrollbars>
    </Paper>
  );
}
