import { Box, Tab, Tabs } from "@mui/material";
import { TabItem } from '../../models/models';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

interface NavbarProps {
  tabs: TabItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  const LinkTab: React.FC<TabItem & { index: number }> = ({
    label,
    url,
    style,
    index
  }) => {
    return (
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          setCurrentTab(index);
          navigate(url);
        }}
        label={label}
        href={url}
        sx={style}
      />
    );
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentTab} sx={{ ".MuiTabs-flexContainer": { justifyContent: 'flex-end' } }}>
        {tabs.map((tab, index) => (
          <LinkTab
            label={tab.label}
            style={tab.style}
            url={tab.url}
            index={index}
            key={index}
          />
        ))}
      </Tabs>
    </Box>
  );
}