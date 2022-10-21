import { Box, Tab, Tabs } from "@mui/material";
import { TabItem } from '../../models/models';

interface NavbarProps {
  value: number;
  tabs: TabItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ value, tabs }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} sx={{ ".MuiTabs-flexContainer": {justifyContent: 'flex-end'}}}>
        {tabs.map((tab, index) => (
          <Tab value={index} label={tab.label} sx={tab.style}/>
        ))}
      </Tabs>
    </Box>
  );
}