/*jshint esversion:6*/
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  font-size: 0.65em;
  color: #000;
  border-radius: 3px;
  border: 2px solid;
`;

const RedButton = styled(Button)`
  background-color: #dd567e;
  border-color: #c93964;
  margin: 10px;
  &:hover {
    background-color: #c93964;
  }
`;

const BlueButton = styled(Button)`
  background-color: #4eafc9;
  border-color: #2e89a2;
  &:hover {
    background-color: #2a89a2;
  }
`;
const GreenButton = styled(Button)`
  background-color: #4fc966;
  border-color: #2aa24f;
  margin: 10px auto;
  &:hover {
    background-color: #2aa24f;
  }
`;

const Input = styled.input`
	resize: none;
	border: 1.5px silver solid;
	border-radius: 5px;
	padding: 10px;
	width: 60px;
	outline: none;
	text-align: center;
	display: block;
`;

const Tr = styled.tr`
  border: 2px #aaa719 solid;
  background-color: #d4d37f;
  margin-bottom: 20px;
  padding: 10px;
`;

const Td = styled.td`
  width: 80px;
`;

const BtnsTd = styled(Td)`
  width: 250px;
`;


class Rows extends React.Component{
	constructor() {
		super();	
		
		this.state = {
			edit: false
		};
	}

	edit = () => {
		this.setState({edit: true});
	}

// удалить строку
	remove = () => {
		this.props.deleteRow(this.props.index);
	}

// сохранить изменения
	save  = () => {
		let id = this.refs.newId.value;
    let photo = this.refs.newPhoto.value;
    let name = this.refs.newName.value;
    let surname = this.refs.newSurname.value;
    let age = this.refs.newAge.value;
    let salary = this.refs.newSalary.value;	

		let newsss = {id, photo, name, surname, age, salary};
		this.props.update(newsss, this.props.index);
		this.setState({edit: false});
	}

// нормальное состояние
	rendNorm = () => {
		return (
			<Tr>
        {this.props.children}
        <BtnsTd>
          <BlueButton onClick={this.edit}>Редактировать</BlueButton>
          <RedButton onClick={this.remove}>Удалить</RedButton>
        </BtnsTd>
			</Tr>
		);
	}

// редактируемое состояние
	rendEdit = () => {
		return (
			<Tr>
				<Td><Input ref="newId" defaultValue={this.props.children[0].props.children}></Input></Td>
				<Td><Input ref="newPhoto" defaultValue={this.props.children[1].props.children}></Input></Td>
				<Td><Input ref="newName" defaultValue={this.props.children[2].props.children}></Input></Td>
				<Td><Input ref="newSurname" defaultValue={this.props.children[3].props.children}></Input></Td>
				<Td><Input ref="newAge" defaultValue={this.props.children[4].props.children}></Input></Td>
				<Td><Input ref="newSalary" defaultValue={this.props.children[5].props.children}></Input></Td>
				<BtnsTd><GreenButton onClick={this.save}>Сохранить</GreenButton></BtnsTd>
			</Tr>	
		);
	}

	render() {
		if(this.state.edit) {
			return this.rendEdit();
		} else {
			return this.rendNorm();
		}
	}

}

  export default Rows;