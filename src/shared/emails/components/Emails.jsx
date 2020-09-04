import React, { useState } from 'react';
import { __ } from 'ramda';
import PropTypes from 'prop-types';
import EmailList from '@app/shared/email_list';
import EmailActions from '@app/shared/email_actions';
import Sidebar from '@app/shared/sidebar';
import {
  updatePropCurried,
  getTagsUnique,
  isSelected,
  filterEmailsCurried
} from '@app/lib/emails'; 
import {
  setEmailsInitialState,
} from '../helpers/helpers';
import { Flex, Box } from 'rebass';

const Emails = (props) => {
  const [emails, setEmails] = useState(setEmailsInitialState(props.emails));
  const markAsRead = updatePropCurried('read', true, emails);
  const markAsUnread = updatePropCurried('read', false, emails);
  const setSelected = updatePropCurried('selected', __, emails)
  const getSelectedEmailsIds = emails.filter(isSelected).map(email => email.id);
  const deleteEmails = filterEmailsCurried(emails)

  if (emails.length === 0) {
    return <Box data-testid='no-emails'>No emails...</Box>
  }

  return (
    <Flex
      data-testid='emails'
      sx={{
        '@media screen and (max-width: 40em)': {
          flexDirection: 'column-reverse',
        }
      }}
    >
      <Sidebar
        sx={styles.sidebar}
        tags={getTagsUnique(emails).slice().sort()}
      />
      <Box>
        <EmailActions
          marginBottom={3}
          emails={emails}
          atLeastOneSelected={emails.some(email => email.selected)}
          onSelectAllEmails={checked => {
            setEmails(setSelected(checked, emails.map(email => email.id)))
          }}
          onMarkAsRead={() => {
            setEmails(markAsRead(getSelectedEmailsIds))
          }}
          onMarkAsUnread={() => {
            setEmails(markAsUnread(getSelectedEmailsIds))
          }}
          onDelete={() => {
            setEmails(deleteEmails(getSelectedEmailsIds))
          }}
        />
        <EmailList
          emails={emails}
          onEmailClicked={email => {
            setEmails(markAsRead([email.id]));
          }}
          onEmailSelected={email => {
            setEmails(setSelected(!email.selected, [email.id]))
          }}
        />
      </Box>
    </Flex>
  );
};

const styles = {
  sidebar: {
    marginRight: 4,
    flexShrink: 0,
    '@media screen and (max-width: 40em)': {
      display: 'flex',
      mt: 3
    }
  }
}

Emails.propTypes = {
  emails: PropTypes.array
}

export default Emails;
