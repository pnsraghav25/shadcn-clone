'use client'

import React from 'react'
import Revenuechart from './Revenuechart'
import Chart2 from './Chart2'
import { Calendar } from './ui/calendar'
import Goal from './Goal'
import Teammembers from './Teammembers'
import Chat from './Chat'
import Chart3 from './Chart3'
import Cookie from './Cookie'
import Createacc from './Createacc'
import Tabledata from './Tabledata'
import Payment from './Payment'
import Report from './Report'
import Share from './Share'
import { Card } from './ui/card'

const Showcase = () => {
  const [selected, setSelected] = React.useState<Date[] | undefined>();

  return (
    <div id='showcase'>
      <div className='w-full p-6'>
        <div className='grid grid-cols-11 gap-4 max-w-[2000px]'>
          <div className='col-span-6 space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <Revenuechart />
              <Chart2 />
              <div className='space-y-4'>
                <Teammembers />
                <Cookie />
                <Payment />
              </div>
              <div className='space-y-4'>
                <Chat />
                <Createacc />
                <Report />
              </div>
            </div>
          </div>
          <div className='col-span-5 space-y-4'>
            <div className='grid grid-cols-[260px_1fr] gap-2'>
                <Card>
                  <Calendar mode="range" selected={selected} onSelect={setSelected} />
                </Card>
              <div>
                <Goal />
              </div>
            </div>
            <Chart3 />
            <Tabledata />
            <Share />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase