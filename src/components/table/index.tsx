import React, { useMemo } from "react";
import { useTable, Column } from "react-table";

interface tableProps {
	columns: readonly Column<Record<any, any>>[];
	data: Array<Record<any, any>>;
}

export default function Table({ columns, data }: tableProps) {
	/*const columns: any = useMemo(
		() => [
			{
				Header: "Age",
				accessor: "age",
			},
			{
				Header: "First name",
				accessor: "firstName",
			},
			{
				Header: "Last name",
				accessor: "lastName",
			},
			{
				Header: "Visits",
				accessor: "visits",
			},
			{
				Header: "Status",
				accessor: "status",
			},
			{
				Header: "Progress",
				accessor: "progress",
			},
		],
		[]
	);

	const data = useMemo(
		() => [
			{
				age: 15,
				firstName: "goldfish",
				lastName: "classroom",
				progress: 5,
				status: "single",
				visits: 86,
			},
			{
				age: 0,
				firstName: "arm",
				lastName: "watch",
				progress: 37,
				status: "single",
				visits: 92,
			},

			{
				age: 13,
				firstName: "member",
				lastName: "response",
				progress: 46,
				status: "relationship",
				visits: 9,
			},

			{
				age: 12,
				firstName: "cub",
				lastName: "wife",
				progress: 65,
				status: "complicated",
				visits: 12,
			},

			{
				age: 2,
				firstName: "produce",
				lastName: "sisters",
				progress: 46,
				status: "single",
				visits: 87,
			},

			{
				age: 12,
				firstName: "brothers",
				lastName: "psychology",
				progress: 66,
				status: "relationship",

				visits: 32,
			},

			{
				age: 26,
				firstName: "client",
				lastName: "twig",
				progress: 73,
				status: "relationship",

				visits: 23,
			},

			{ age: 18, firstName: "furniture", lastName: "building", progress: 87, status: "single", visits: 8 },

			{ age: 21, firstName: "crack", lastName: "front", progress: 33, status: "relationship", visits: 14 },

			{ age: 19, firstName: "pies", lastName: "bat", progress: 18, status: "relationship", visits: 30 },

			{ age: 25, firstName: "muscle", lastName: "stocking", progress: 9, status: "single", visits: 40 },

			{ age: 18, firstName: "video", lastName: "ticket", progress: 11, status: "complicated", visits: 85 },

			{ age: 6, firstName: "grandmother", lastName: "jelly", progress: 99, status: "relationship", visits: 99 },

			{ age: 24, firstName: "quiver", lastName: "mine", progress: 75, status: "complicated", visits: 30 },

			{ age: 11, firstName: "friends", lastName: "maid", progress: 6, status: "relationship", visits: 25 },

			{ age: 6, firstName: "edge", lastName: "road", progress: 82, status: "relationship", visits: 81 },

			{ age: 20, firstName: "energy", lastName: "comfort", progress: 49, status: "single", visits: 69 },

			{ age: 26, firstName: "pail", lastName: "warning", progress: 34, status: "single", visits: 31 },

			{ age: 16, firstName: "hat", lastName: "depression", progress: 64, status: "single", visits: 49 },

			{
				age: 25,
				firstName: "play",
				lastName: "riddle",
				progress: 14,
				status: "complicated",

				visits: 21,
			},
		],
		[]
	);*/

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup: any) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column: any) => (
							<th {...column.getHeaderProps()}>{column.render("Header")}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row: any) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell: any) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
