import React from 'react'
import './Content.css'
import UserList from '../../../pages/admin/ShowUsers/ShowUsers'
const Content = () => {
  return (
    <div><div className='content-header'>
      <h1 className='header-title'>Dashboard</h1>
    </div>
      <div className='content'>
        <UserList />
      </div>
    </div>


  )
}

export default Content