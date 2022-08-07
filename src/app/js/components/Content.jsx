import React from 'react';
import { Box, Text, TextInput } from 'grommet';
import { Note, Add } from 'grommet-icons';

const Content = () => {
  return (
    <>
      <Box className='app-xerox-content-top'>
        <Text className='app-xerox-content-count'>Maximun page per job: 10</Text>
        <TextInput
          placeholder="Enter email to receive text file"
        />
        <TextInput
          placeholder="Confirmation Email"
        />
        <div className='app-xerox-content-grid'>
          <Box className='app-xerox-content-docName'>
            <Text>@ Xerox Scan [Date & Time].docx</Text>
          </Box>
          <Box className='app-xerox-content-docType'>
            <Text>.docx</Text>
          </Box>
        </div>
      </Box>
      <Box className='app-xerox-content-bottom'>
        <Box className='app-xerox-content-scanInfo'>
          <div className='app-xerox-content-scanSide'>
            <div className='app-xerox-content-scanContent'>
              <Note className='app-xerox-content-scanIcon1' size='medium' color='#fff'/>
              <Text>2 Sided Scanning</Text>
            </div>
            <Text>1 Sided</Text>
          </div>
          <div className='app-xerox-content-scanSize'>
            <div className='app-xerox-content-scanContent'>
              <Add className='app-xerox-content-scanIcon2' size='medium' color='#fff'/>
              <Text>Original Size</Text>
            </div>
            <Text>Auto Detect</Text>
          </div>
        </Box>
        <div className='app-xerox-content-grid'>
          <Box className='app-xerox-content-statement'>
            <Text>Reset</Text>
          </Box>
          <Box className='app-xerox-content-statement'>
            <Text>Privacy Statement</Text>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Content;