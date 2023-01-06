import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'

export default function Home() {
  return (
    <div className='container mx-auto'>
        <h1 className='text-red-500'>Lorem .</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Laborum repudiandae quibusdam ipsam in!</p>
        
        <Button icon={ <DownloadOutlined style={{ width:20 }}/> }/>
    </div>
  )
}