import React from 'react'
import { Tabs, Tab, TabsList, TabPanel } from '@mui/base'
const TabBar = () => {
  return (
    <Tabs defaultValue={1}>
    <TabsList>
      <Tab value={1}>One</Tab>
      <Tab value={2}>Two</Tab>
      <Tab value={3}>Three</Tab>
    </TabsList>
    <TabPanel value={1}>First page</TabPanel>
    <TabPanel value={2}>Second page</TabPanel>
    <TabPanel value={3}>Third page</TabPanel>
  </Tabs>
  )
}

export default TabBar