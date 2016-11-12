import React, {PropTypes} from 'react';
import {Panel, Label} from 'react-bootstrap';
import ResponsibilityOutcome from './ResponsibilityOutcome';

const CategoryResponsibility = ({responsibilityItems}) => {

  let content;
  if(responsibilityItems.length == 0){
    content = <Label>No Available Details</Label>;
  }
  else{
    content = responsibilityItems.map(res => {
      return <Panel bsSize="small" key={res.responsibilityId}>{res.responsibility}<ResponsibilityOutcome /></Panel>;
    });
  }

    return (
      <div>
        {content}
    </div>
  );
};

CategoryResponsibility.propTypes = {
  responsibilityItems : PropTypes.array
};

export default CategoryResponsibility;
