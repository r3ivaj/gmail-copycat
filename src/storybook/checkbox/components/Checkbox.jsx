import React from 'react';
import { always } from 'ramda'
import PropTypes from 'prop-types';
import { Checkbox as RebassCheckbox, Label } from '@rebass/forms'

const Checkbox = ({
  label,
  sx = {},
  checked,
  sxContainer = {},
  onClick = always(undefined),
  ...rest
}) => {
  return (
    <Label
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        ...sxContainer
      }}
      data-testid='checkbox'
    >
      <RebassCheckbox
        checked={checked}
        sx={{
          'input:hover ~ &': {
            color: 'secondary',
          },
          ...sx
        }}
        {...rest}
      />
      {label}
    </Label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.node,
  sx: PropTypes.object,
  sxContainer: PropTypes.object,
  onClick: PropTypes.func
}

export default Checkbox;