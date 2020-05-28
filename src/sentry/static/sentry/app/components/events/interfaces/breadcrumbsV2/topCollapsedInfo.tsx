import React from 'react';
import styled from '@emotion/styled';

import {tct} from 'app/locale';
import {IconEllipsis} from 'app/icons';
import space from 'app/styles/space';

import {GridCellLeft} from './styles';
import Badge from './badge';

type Props = {
  onClick: () => void;
  quantity: number;
};

const TopCollapsedInfo = ({quantity, onClick}: Props) => (
  <Wrapper data-test-id="breadcrumb-collapsed" onClick={onClick}>
    <Badge color="gray800" borderColor="gray400">
      <IconEllipsis />
    </Badge>
    {tct('Show [quantity] collapsed crumbs', {quantity})}
  </Wrapper>
);

export default TopCollapsedInfo;

const Wrapper = styled(GridCellLeft)`
  cursor: pointer;
  background: ${p => p.theme.gray100};
  font-size: ${p => p.theme.fontSizeMedium};
  grid-column-start: 1;
  grid-column-end: -1;
  display: grid;
  grid-gap: ${space(1.5)};
  grid-template-columns: max-content 1fr;
`;
