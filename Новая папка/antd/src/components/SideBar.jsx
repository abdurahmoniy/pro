import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UnorderedListOutlined,
  InfoCircleFilled,
  PlayCircleOutlined,
  LinkOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";
import logo from './assests/tv.svg'
import { styles } from './style'
import Content from './Content'



export default function SideBar() {

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();
  return (
    <div className="">
      <div className={`flex justify-between w-full ${styles.container} ${styles.padX} bg-mybg1 py-2`}>
        <div className=""></div>
        <div className={`rounded text-center flex`}>
          <a href='/' className={`flex justify-center`}>
            <img src={logo} alt="" className='w-[35px]' />
          </a>
          <div className={`w-full my-1`}>
            <a href='/' className={`text-mytext1 text-[25px]`}>
              <i className='fas fa-f'></i>
              <i className='fas fa-i px-1'></i>
              <i className='fas fa-l'></i>
              <i className='fas fa-m px-1'></i>
              <i className='fas fa-y'></i>
              {/* FILMY */}
            </a>
          </div>
        </div>
        <Button
        className='my-1 bg-mytext1 text-mybg1'
          // className={` absolute border-none my-3 ${collapsed ? 'rounded-l-none left-[58px] top-0 bg-mybg11 bg-mytext1' : 'top-0 left-[208px] bg-mytext1 text-mybg1'}`}
          onClick={toggleCollapsed}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="flex">
        <div className={`bg-mybg1 px-1 min-h-screen`}>
          <Menu
            inlineCollapsed={collapsed}
            className={`h-screen ${collapsed ? '' : 'w-[99.6%] absolute'}`}
            onClick={({ key }) => {
              if (key === "signout") {
                //SIGNOUT
              } else {
                navigate(key);
              }
            }}
            theme='dark'
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
            items={[
              { label: "Home", key: "/", icon: <HomeOutlined /> },
              {
                label: "Watch",
                key: "/watch",
                icon: <PlayCircleOutlined />,
              },
              {
                label: "About",
                key: "/userslist",
                icon: <UnorderedListOutlined />,
                children: [
                  { label: 'About Film', key: '/aboutfilm', icon: <InfoCircleFilled /> },
                  { label: 'About Actors', key: '/aboutactors', icon: <UserOutlined /> }
                ]
              },
              {
                label: "Contact",
                key: "/contact",
                icon: <LinkOutlined />,
              },
            ]}
          />
        </div>
        <Content/>
      </div>

    </div>


  )
}

function Header() {
  return (
    <div>Header</div>
  )
}
