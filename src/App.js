/*jshint esversion:6*/
import React from 'react';
import styled from 'styled-components';
import './App.css';
import load from "./load.js";
import Rows from "./Rows";


const Table = styled.table`
  display: flex;
  padding: 50px;
	width: 100%;
	height: 100vh;
  color: #000;
  font-size: 1.3em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ebfce8;
`;
const Button = styled.button`
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  font-size: 0.65em;
  color: #000;
  border-radius: 3px;
`;
const NewButton = styled(Button)`
  background-color: #dda66d;
  border: 2px #b6821a solid;
  &:hover {
    background-color: #b6821a;
  }
`;
const Thead = styled.thead`
  margin-bottom: 10px;
`;
const Th = styled.th`
	width: 80px;
`;
const BtnsTh = styled(Th)`
	width: 250px;
`;
const Td = styled.td`
  width: 80px;
`;
	
class App extends React.Component {
	
	constructor() {
		super();

		this.state = {
			clients: load()
		}
	}

// Добавить строку
	add = (text) => {
		let arr = this.state.clients;
		arr.push(text);
		this.setState({clients: arr});
	}

// Удалить строку
	deleteRow = (i) => {
		let arr = this.state.clients;
		arr.splice(i, 1);
		this.setState({clients: arr});
	}

// Изменить строку
	updateRow = (text, i) => {
		let arr = this.state.clients;
		arr[i] = text;	
		this.setState({clients: arr});
	}

	render() {
		let text = {
      id: 'add id',
      photo: 'add photo',
      name: 'add name',
      surname: 'addd surname',
      age: 'add age',
      salary: 'add salary'
    };
		return(				
			<Table>
				<Thead>
					<tr>
						<Th>Id</Th>
						<Th>Photo</Th>
						<Th>Name</Th>
						<Th>Surname</Th>
						<Th>Age</Th>
						<Th>Salary</Th>
						<BtnsTh><NewButton onClick={this.add.bind(null, text)}>Добавить клиента</NewButton></BtnsTh>
					</tr>
				</Thead>
				<tbody>
					{
						this.state.clients.map((client, i) => 
						<Rows key={i} index={i} update={this.updateRow} deleteRow={this.deleteRow}>
							<Td>{client.id}</Td>
							<Td><img src={`img/${client.photo}.jpg`} alt={client.name} /></Td>
							<Td>{client.name}</Td>
							<Td>{client.surname}</Td>
							<Td>{client.age}</Td>
							<Td>{client.salary}</Td>
						</Rows>)
					}
				</tbody>
			</Table>			
		)
	}
}

export default App;