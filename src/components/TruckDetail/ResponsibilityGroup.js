import React, {PropTypes} from 'react';
import {Panel, Label, Grid, Row, Col} from 'react-bootstrap';
import ResponsibilityOutcome from './ResponsibilityOutcome';
import ResponsibilityGroupColumn from './ResponsibilityGroupColumn';
import _ from 'lodash';

const ResponsibilityGroup = ({responsibilityItems}) => {

    let content;
    if (responsibilityItems.length == 0) {
        content = <Label>No Available Details</Label>;
    } else {
        content = (
            <Grid fluid={true}>
                <Row>
                    <ResponsibilityGroupColumn offset={1} md={3} responsibilities={_.filter(responsibilityItems, (item, index) => {
                        return index % 3 == 0;
                    })}/>
                    <ResponsibilityGroupColumn md={3} responsibilities={_.filter(responsibilityItems, (item, index) => {
                        return index % 3 == 1;
                    })}/>
                    <ResponsibilityGroupColumn md={3} responsibilities={_.filter(responsibilityItems, (item, index) => {
                        return index % 3 == 2;
                    })}/>
                </Row>
            </Grid>
        );
    }
    return (
        <div>
            {content}
        </div>
    );
};

ResponsibilityGroup.propTypes = {
    responsibilityItems: PropTypes.array
};

export default ResponsibilityGroup;
