import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';

const Sidebar = ({
  tags,
  ...rest
}) => {
  return (
    <Box
      as='aside'
      {...rest}
    >
      {tags.map((tag, index) => (
        <Box
          key={index}
          sx={styles.tagContainer}
        >
          <Box
            variant='tag'
          >
            {tag}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Sidebar.propTypes = {
  tags: PropTypes.array,
}

const styles = {
  tagContainer: {
    mb: 2,
    '@media screen and (max-width: 40em)': {
      mb: 0,
      mr: 2
    }
  }
}

export default Sidebar;