import React, {PropTypes} from 'react';
import {Panel, Label, Grid, Row, Col} from 'react-bootstrap';
import ResponsibilityOutcome from './ResponsibilityOutcome';

const CategoryResponsibility = ({responsibilityItems}) => {

  let content;
  if(responsibilityItems.length == 0){
    content = <Label>No Available Details</Label>;
  }
  else{
    let firstList = [];
    let secondList = [];
    let thirdList = [];
    responsibilityItems.map((res, i) => {
      let item = <Panel header={res.responsibility} bsSize="small" key={res.responsibilityId}><ResponsibilityOutcome /></Panel>;
      if(i % 3 == 0){
        firstList.push(item);
      }
      else if(i % 3 == 1) {
        secondList.push(item);
      }
      else{
        thirdList.push(item);
      }
    });
    content = (<Grid fluid={true}>
      <Row>
        <Col mdOffset={1} md={3}>{firstList.map(res => {return res;})}</Col>
        <Col md={3}>{secondList.map(res => {return res;})}</Col>
        <Col md={3}>{thirdList.map(res => {return res;})}</Col>
      </Row>
    </Grid>);
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
