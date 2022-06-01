import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Primary from './Primary';
import SecondaryInfo from './SecondaryInfo';
import EducationDetails from './EducationDetails';
import AddressDetails from './AddressDetails';
import BankDetails from './BankDetails';
import TechnicalSkills from './TechnicalSkills';
import Experience from './Experience';
import Contact from './Contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Primary Info" {...a11yProps(0)} />
          <Tab label="Secondary Info" {...a11yProps(1)} />
          <Tab label="Educational Details" {...a11yProps(2)} />
          <Tab label="Address Details"{...a11yProps(3)}/>
          <Tab label="Bank Details"{...a11yProps(4)}/>
          <Tab label="Technical Skills"{...a11yProps(5)}/>
          <Tab label="Experience"{...a11yProps(5)}/>
          <Tab label="Contact"{...a11yProps(5)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Primary/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SecondaryInfo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <EducationDetails/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <AddressDetails/>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <BankDetails/>
      </TabPanel>
      <TabPanel value={value} index={5}>
       <TechnicalSkills/>
      </TabPanel>
      <TabPanel value={value} index={6}>
       <Experience/>
      </TabPanel>
      <TabPanel value={value} index={7}>
       <Contact/>
      </TabPanel>


    </Box>
  );
}
