import React, { useState, useEffect, useRef } from 'react';
import "antd/dist/antd.css"
import store from '../../services/reducers/store';

import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Table, Input, Button, Popconfirm } from 'antd';
import { ADD_DATA, REMOVE_DATA, UPDATE_DATA } from '../../services/reducers/constant';

class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: false,
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }
    check = () => {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <CheckOutlined onClick={this.check} />

                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <EditOutlined onClick={this.edit} />

                        </div>
                }
            </div>
        );
    }
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            render: (text, record) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(record.key, 'name')}
                />
            ),
        }, {
            title: 'task',
            dataIndex: 'task',
            render: (text, record) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(record.key, 'task')}
                />
            ),
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        
                );
            },
        }];

        this.state = {
            dataSource: store.getState(),
            count: store.getState.length-1,
        };
    }
    onCellChange = (key, dataIndex) => {
        return (value) => {
            store.dispatch({
                type: UPDATE_DATA,
                payload: {
                    key: key,
                    name: dataIndex,
                    value: value,
                }
            })
            this.setState({ dataSource: store.getState() })
            localStorage.setItem('arr', JSON.stringify(store.getState()));
           
        };
    }
    onDelete = (key) => {
        store.dispatch({
            type: REMOVE_DATA,
            payload: {
                key: key
            }
        })
        this.setState({ dataSource: store.getState() });
        localStorage.setItem('arr', JSON.stringify(store.getState()));
       

    }
    handleAdd = () => {

        const { count, dataSource } = this.state;
        store.dispatch(
            {
                type: ADD_DATA,
                payload: {
                    key: this.state.count,
                    name: "",
                    task: ""
                }

            }
        )



        this.setState({
            dataSource: store.getState(),
            count: count + 1,
        });
        localStorage.setItem('arr', JSON.stringify(store.getState()));

       


    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div style={{ padding: "10px 20px" }}>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}




export default Admin;




