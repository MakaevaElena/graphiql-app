import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTab({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`customTab-${index}`}
      aria-labelledby={`customTab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default CustomTab;
