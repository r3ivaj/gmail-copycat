import React from 'react';
import { always } from 'ramda'
import { Box, Flex } from 'rebass';
import Checkbox from '@app/storybook/checkbox';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import striptags from 'striptags';

const EmailListItem = ({
  email,
  onEmailClicked = always(undefined),
  onEmailSelected = always(undefined)
}) => {
  return (
    <Flex
      sx={{
        ...styles.container,
        ...!email.read && styles.containerEmailUnread,
      }}
      onClick={() => onEmailClicked(email)}
    >
      <Box
        sx={styles.checkboxContainer}
      >
        <Checkbox
          onClick={event => event.stopPropagation()}
          checked={email.selected}
          onChange={() => onEmailSelected(email)}
        />
      </Box>
      <Flex>
        <Box
          sx={{
            ...styles.subject,
            ...!email.read && styles.subjectUnread
          }}
        >
          {email.subject}
        </Box>
        <Box
          sx={styles.body}
        >
          &nbsp;-&nbsp;
          {striptags(email.body)}
        </Box>
      </Flex>
      <Box
        sx={styles.date}
      >
        {format(new Date(email.date), 'dd LLL')}
      </Box>
    </Flex>
  );
}

const styles = {
  container: {
    alignItems: 'center',
    bg: 'emailRowBackground',
    color: 'text',
    cursor: 'pointer',
    padding: 2,
    border: 0,
    borderStyle: 'solid',
    borderColor: 'emailRowBorder',
    borderBottomWidth: '1px',
    ':first-of-type': {
      borderTopWidth: '1px'
    },
    ':hover': {
      // I didn't want to spend much time on it so I just shamelessly took it from gmail
      boxShadow: `
        inset 1px 0 0 #dadce0,
        inset -1px 0 0 #dadce0,
        0 1px 2px 0 rgba(60,64,67,.3),
        0 1px 3px 1px rgba(60,64,67,.15)
      `,
      position: 'relative'
    }
  },
  containerEmailUnread: {
    bg: 'newEmailRowBackground'
  },
  checkboxContainer: {
    flexShrink: 0,
    mr: 3
  },
  subject: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  subjectUnread: {
    fontWeight: 'bold'
  },
  body: {
    color: 'muted',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    flex: '1 1 0'
  },
  date: {
    ml: 4,
    color: 'muted',
    flexShrink: 0
  }
}

EmailListItem.propTypes = {
  email: PropTypes.object,
  onEmailClicked: PropTypes.func,
  onEmailSelected: PropTypes.func,
}

export default EmailListItem;
