import { Box, Collapse, IconButton, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import CustomTab from './CustomTab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { arrowBtn, headerWrapper } from './styles';

type TabPanelProps = {
  tabsLabels: string[];
  tabsElements: JSX.Element[];
};

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsPanel({ tabsLabels, tabsElements }: TabPanelProps) {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (_event: SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={headerWrapper}>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
        >
          {tabsLabels.map((label, index) => {
            return <Tab key={label} label={label} {...tabProps(index)} />;
          })}
        </Tabs>
        <IconButton
          onClick={() => setOpen(!open)}
          aria-label="expand"
          size="small"
          sx={arrowBtn}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {tabsElements.map((element, index) => {
          return (
            <CustomTab key={index} value={tab} index={index}>
              {element}
            </CustomTab>
          );
        })}
      </Collapse>
    </Box>
  );
}

export default TabsPanel;
