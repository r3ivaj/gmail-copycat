import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { always } from 'ramda';
import { Flex, Box } from 'rebass';
import Checkbox from '@app/storybook/checkbox';
import Icon from '@app/storybook/icon';
import { faEnvelope, faEnvelopeOpen, faTrash } from '@fortawesome/free-solid-svg-icons'

const EmailActions = ({
  onSelectAllEmails = always(undefined),
  onMarkAsRead = always(undefined),
  onMarkAsUnread = always(undefined),
  onDelete = always(undefined),
  atLeastOneSelected = false,
  ...rest
}) => {
  const [allSelected, setAllSelected] = useState(false);
  const shouldShowActions = () => allSelected || atLeastOneSelected;
  const handleAllSelected = event => {
    setAllSelected(event.target.checked)
    onSelectAllEmails(event.target.checked)
  }

  return (
    <Flex
      sx={styles.container}
      {...rest}
    >
      <Box
        sx={styles.checkboxContainer}
      >
        <Checkbox
          checked={allSelected}
          onChange={handleAllSelected}
        />
      </Box>
      {
        shouldShowActions() && (
          <>
            <Box
              sx={{
                ...styles.iconContainer,
                ...styles.iconEnvelope
              }}
              title='Mark as read'
              onClick={onMarkAsRead}
              data-testid='mark-as-read'
            >
              <Icon
                icon={faEnvelope}
                cursor='pointer'
              />
            </Box>
            <Box
              sx={styles.iconContainer}
              title='Mark as unread'
              onClick={onMarkAsUnread}
              data-testid='mark-as-unread'
            >
              <Icon
                icon={faEnvelopeOpen}
                cursor='pointer'
              />
            </Box>
            <Box
              sx={styles.iconContainer}
              title='Delete'
              onClick={onDelete}
              data-testid='delete'
            >
              <Icon
                icon={faTrash}
                cursor='pointer'
              />
            </Box>
          </>
        )
      }
    </Flex>
  );
};

const styles = {
  container: {
    height: '18px',
    alignItems: 'center'
  },
  checkboxContainer: {
    ml: 2,
    mr: 3,
  },
  iconContainer: {
    mr: 3,
  },
  iconEnvelope: {
    position: 'relative',
    bottom: '-2px'
  }
}

EmailActions.propTypes = {
  onSelectAllEmails: PropTypes.func,
  onMarkAsRead: PropTypes.func,
  onMarkAsUnread: PropTypes.func,
  onDelete: PropTypes.func,
  atLeastOneSelected: PropTypes.bool,
}

export default EmailActions;
