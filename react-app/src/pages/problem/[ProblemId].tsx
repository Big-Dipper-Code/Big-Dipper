import React from 'react'
import { Box, Tabs, Tab, AppBar } from '@mui/material'
import ProblemDescription from '@/components/problem/ProblemDescription'
// import OutputExample from "@/components/problem/OutputExample";

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  )
}
export default function _ProblemId() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab value={0} label="문제" />
          <Tab value={1} label="제출" />
          <Tab value={2} label="결과" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProblemDescription />
        {/* <OutputExample> */}

        {/* </OutputExample> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}
