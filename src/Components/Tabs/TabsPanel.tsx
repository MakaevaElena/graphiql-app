import { Box, Collapse, IconButton, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useDataContext } from '../../DataContext/useDataContext';
import UIStrings from '../../assets/UIStrings.json';
import CustomTab from './CustomTab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VariablesEditor from '../VariablesEditor/VariablesEditor';
import HeadersEditor from '../HeadersEditor/HeadersEditor';
import { arrowBtn, headerWrapper } from './styles';

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsPanel() {
  const { language } = useDataContext();
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
          <Tab label={UIStrings.Variables[language]} {...tabProps(0)} />
          <Tab label={UIStrings.Headers[language]} {...tabProps(1)} />
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
        <CustomTab value={tab} index={0}>
          <VariablesEditor />
        </CustomTab>
        <CustomTab value={tab} index={1}>
          <HeadersEditor />
        </CustomTab>
      </Collapse>
    </Box>
  );
}

export default TabsPanel;
