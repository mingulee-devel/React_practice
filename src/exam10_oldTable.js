import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Checkbox} from "@mui/material";
import {useEffect, useMemo, useState} from "react";

function createData(index, type, name, dept, count) {
	// const sttus = '처리중인 요청 : ' + count.toString() + '건';
	const sttus = '처리중인 요청 : ' + count.toString() + '건';
	return { index, type, name, dept, sttus };
}

const rows = [
	createData(0,'처리자', '이민선', '연구개발팀', 2),
	createData(1,'처리자', '홍길동', '연구개발팀', 1),
	createData(2,'처리자', '아무개', '연구개발팀', 0),
];

//고정헤더
export default function StickyHeadTable(props) {
	// const columnData = props.columnData;
	// const rowData = props.rowData;

	console.log("[stickyHeadTable]");
	// console.log(props.columnData);

	//선택한 list 담기
	const [selected, setSelected] = useState([]);
	//
	// useEffect(() => {
	// 	console.log('data 바꼈다');
	// 	setSelected([]);
	// }, [props.rowData]);

	let columns = [];

	columns = [
		{ id: 'type', label: '타입',
			minWidth: 100
		},
		{ id: 'name', label: '이름',
			minWidth: 80
		},
		{ id: 'dept', label: '부서',
			minWidth: 100
		},
		{ id: 'sttus', label: '상태',
			minWidth: 80
		},
		{ id: 'del', label: 'del',
			minWidth: 50,
			cellRendererFramework: (params) => {
				return <div>삭제 버튼</div>
			},
		},
	];

	// if(props.columnData === undefined){
	// 	columns = [
	// 		{ id: 'type', label: '타입',
	// 			minWidth: 100
	// 		},
	// 		{ id: 'name', label: '이름',
	// 			minWidth: 80
	// 		},
	// 		{ id: 'dept', label: '부서',
	// 			minWidth: 100
	// 		},
	// 		{ id: 'sttus', label: '상태',
	// 			minWidth: 80
	// 		},
	// 		{ id: 'del', label: 'del',
	// 			minWidth: 50,
	// 			cellRendererFramework: (params) => {
	// 				return <div>삭제 버튼</div>
	// 			},
	// 		},
	// 	];
	// } else {
	// 	columns = props.columnData;
	// }

	const handleClick = (event, row) => {
		// 	선택한 데이터 넘어옴.
		// 	console.log(row);
		// 	props.dataRef.current.push(row); //배열로 넘겨줌.
		// 	console.log(props.dataRef.current);

		//가능하면 row말고 id값으로 바꿔주기.
		console.log(row);
		const selectedIndex = selected.indexOf(row);
		console.log('handleClick');
		console.log(selectedIndex);
		console.log(selected);

		let newSelected = [];

		//체크했던 거 다시 체크하면 해제됨.
		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, row);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) { //방금 눌렀던 것 다시 누르면
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}
		setSelected(newSelected);
		// props.dataRef.current = newSelected;
		console.log(newSelected);
	};

	return (
		<>
			{/*<NewTable rows={rows} columns={columns}></NewTable>*/}
			<Paper sx={{ width: '100%', overflow: 'hidden'}}>
				<TableContainer sx={{ maxHeight: 200}}>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell padding="checkbox">
									<Checkbox
										color="primary"
										// checked={}
										inputProps={{
											// 'aria-labelledby': labelId,
										}}
									/>
								</TableCell>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{
								rows !== undefined && rows !== null ?
									rows.map((row) => {
										return (
											<TableRow hover role="checkbox" tabIndex={-1} key={row.index}

											>
												<TableCell padding="checkbox">
													<Checkbox
														color="primary"
														// checked={isItemSelected}
														//선택한 데이터값 넘어감.
														onClick={(e) => handleClick(e, row)}
														inputProps={{
															// 'aria-labelledby': labelId,
														}}
													/>
												</TableCell>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell key={column.id} align={column.align}>
															{column.format && typeof value === 'number'
																? column.format(value)
																: value}
														</TableCell>
													);
												})}
											</TableRow>
										);
									}) : null }
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
}
