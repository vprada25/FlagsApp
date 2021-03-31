import React, { useState } from 'react';
import { useDispatch} from 'react-redux';


import {/*  Menu, Button,  */message, Space, Input, PageHeader, Select } from 'antd';
/* import { DownOutlined, EyeOutlined } from '@ant-design/icons'; */

import '../scss/search.scss'


const { Search } = Input;
const { Option } = Select;


const filterByRegionAction = (regionSelected) => {
    return {
        type: 'FILTER_BY_REGION',
        payload: { regionSelected },
    };
}



export default function Region() {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch();

    const filterByName = (e) => {
        setInputValue(e.target.value)
        dispatch({
            type: 'SET_COUNTRY_BY_NAME',
            payload: e.target.value
        })
    }

    const clearInput = () => {
        dispatch({
            type: 'SET_COUNTRY_BY_NAME',
            payload: ''
        })
        setInputValue('')
    }


    const onRegionChange = (e) => {
        message
            .loading('Accion en Progreso..', 1)
            .then(() => message.success('Busqueda Finalizada', 1.5))
            .then(() => dispatch(filterByRegionAction(e)));



        console.log('click', e);
    }



    /*    const menu = (
           <Menu onClick={onRegionChange}>
               <Menu.Item key="1" icon={<EyeOutlined />}>
                   Africa
             </Menu.Item>
               <Menu.Item key="2" icon={<EyeOutlined />}>
                   America
             </Menu.Item>
               <Menu.Item key="3" icon={<EyeOutlined />}>
                   Asia
             </Menu.Item>
               <Menu.Item key="4" icon={<EyeOutlined />}>
                   Europe
             </Menu.Item>
               <Menu.Item key="5" icon={<EyeOutlined />}>
                   Oceania
             </Menu.Item>
           </Menu>
       ); */

    return (
        <div className="search">

            <Space direction='vertical' xxl xl lg md sm xs  >
                <PageHeader
                    title={<Search
                        placeholder="Buscar"
                        allowClear
                        enterButton="Buscar"
                        value={inputValue}
                        onChange={filterByName}
                        onClick={clearInput}

                    />}
                    subTitle={
                        <Select defaultValue='Region'
                            style={{ width: 120 }}


                            onChange={onRegionChange}>
                            <Option value="Africa" >Africa</Option>
                            <Option value="Americas">America</Option>
                            <Option value="Asia">Asia</Option>
                            <Option value="Europe">Europe</Option>
                            <Option value="Oceania">Oceania</Option>


                        </Select>
                    }>

                </PageHeader>


            </Space>

        </div>
    )
}

