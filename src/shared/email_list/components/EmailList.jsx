import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import EmailListItem from './EmailListItem';

const EmailList = ({
  emails,
  ...rest
}) => {
  return (
    <Box
      as='section'
    >
      {emails.map((email, index) => (
        <EmailListItem
          key={index}
          email={email}
          {...rest}
        />
      ))}
    </Box>
  );
};

EmailList.propTypes = {
  emails: PropTypes.array,
}

export default EmailList;
