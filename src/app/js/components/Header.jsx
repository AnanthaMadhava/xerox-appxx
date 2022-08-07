import React, { useState } from 'react';
import { Header as GrommetHeader, Text, Button, Box, Layer } from 'grommet';
import { Scan, Close } from 'grommet-icons';

const Header = () => {

  const [open, setOpen] = useState();

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(undefined);
  }
  return (
    <>
      <GrommetHeader background='#FF10F0' pad="small" className='app-xerox-header'>
        <Text className='app-xerox-header-text'>
          Xerox&reg; Note Converter
        </Text>
        <Button className='app-xerox-header-button' onClick={onOpen}>
          <Box pad="small" direction="row" align="center" gap="small">
            <Scan color='#fff'/>
            <Text>Scan</Text>
          </Box>
        </Button>
      </GrommetHeader>
      {open && (
        <Layer className='app-xerox-header-scanLayer'>
          <Text size='large'>Document Successfully Scanned.</Text>
          <Text className='app-xerox-header-scanLayer-successEmail' size='medium'>You will receive an email from Xerox Note Converter with your text file.</Text>
          <Button className='app-xerox-header-layer-button' onClick={onClose}>
            <Box pad="small" direction="row" align="center" gap="small">
              <Close color='#fff'/>
              <Text>Close</Text>
            </Box>
          </Button>
        </Layer>
      )}
    </>
  );
};

export default Header;