import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { TabsWrapperFiled, TabsWrapperGradient, TabsWrapperOutlined } from './TabSwitcherStyledComponent'

interface ItabProps {
  tabvalue: number
  handletabvalue: any
  tabdata: Array<any>
}

export const FilledTabSwitcher = (tabProps: ItabProps) => {

  const { tabvalue, handletabvalue, tabdata } = tabProps

  return (
    <TabsWrapperFiled
      value={tabvalue}
      onChange={handletabvalue}
      {...tabProps}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      {tabdata?.map((tab: any, index: number) => {
        return (
          <Tab key={index} label={tab.name} />
        )
      })}
    </TabsWrapperFiled>
  )
}


export const GradientTabSwitcher = (tabProps: any) => {

  const { tabvalue, handletabvalue, tabdata } = tabProps

  return (
    <TabsWrapperGradient
      value={tabvalue}
      onChange={handletabvalue}
      {...tabProps}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      {tabdata?.map((tab: any, index: number) => {
        return (
          <Tab key={index} label={tab.name} />
        )
      })}
    </TabsWrapperGradient>
  )
}


export const OutlinedTabSwitcher = (tabProps: any) => {

  const { tabvalue, handletabvalue, tabdata } = tabProps

  return (
    <TabsWrapperOutlined
      value={tabvalue}
      onChange={handletabvalue}
      {...tabProps}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      {tabdata?.map((tab: any, index: number) => {
        return (
          <Tab key={index} label={tab.name} />
        )
      })}
    </TabsWrapperOutlined>
  )
}
