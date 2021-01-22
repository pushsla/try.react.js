import { useState } from "react";
import React from "react";
import cellState from "../Cell/cellState";
import Cell from "../Cell/Cell";

import "./Board.sass";
import Button from "../Button/Button";

export default function Board({rowCount, columnCount}: {rowCount: number, columnCount: number}){
    const default_cells = Array(rowCount).fill(null).map((_, i) => (
            {row_id: i, row: Array(columnCount).fill(null).map((__, c) => (
                    {cell_id: c, cell_state: cellState.Null}
                ))
            }
        ));
    const default_turn = cellState.X;

    const [cells, setCells] = useState(default_cells);
    const [turn, setTurn] = useState(default_turn);

    const refreshCells = () => {
        setCells(default_cells);
    }

    const onCellClick = (row: number, cell: number) => {
        if (cells[row].row[cell].cell_state === cellState.Null){
            const newcells = cells.slice();
            newcells[row].row[cell].cell_state = turn;

            setCells(newcells);
            setTurn((turn === cellState.X) ? cellState.O : cellState.X);
        }
    }

    const onRefreshButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        refreshCells();
        setTurn(default_turn);
    }

    return(
        <div className="Board">
            <table className="Board__table">
                <tbody>
                    {cells.map((row, _) => (
                        <tr key={`row-${row.row_id}`}>
                            {row.row.map((cell, __) => (
                                <td key={`cell-${cell.cell_id}`} onClick={() => onCellClick(row.row_id, cell.cell_id)}>
                                    <Cell cellState={cell.cell_state}/>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button displayText="Refresh" onClick={onRefreshButtonClick}/>
        </div>
    );
}