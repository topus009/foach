import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { withCheckboxStyles } from './styles';

const StyledCheckbox = withCheckboxStyles(Checkbox);

const CustomCheckbox = props => <StyledCheckbox {...props} disableRipple color="primary" />;

export default CustomCheckbox;
