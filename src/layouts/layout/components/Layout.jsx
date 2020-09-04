import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

const Layout = ({
  children
}) => {
  return (
    <Box margin={[2, 3, 4]}>
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;