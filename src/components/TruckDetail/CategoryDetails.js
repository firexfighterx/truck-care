import React, {Component, PropTypes} from 'react';
import {Label, Panel, PanelGroup} from 'react-bootstrap';
import CategoryResponsibility from './CategoryResponsibility';

class CategoryDetails extends Component {
    constructor(props) {
        super(props);
    }

    _containerizeDetail(detail) {
        return (
            <Panel style={{
                cursor: "pointer"
            }} eventKey={detail.category} header={detail.category} key={detail.category}>
                <CategoryResponsibility key={detail.category} responsibilityItems={detail.responsibilities}/>
            </Panel>
        );
    }

    render() {
        let content;
        if (this.props.categoryDetails.length > 0) {
            content = (
                <PanelGroup accordion>
                    {this.props.categoryDetails.map(detail => {
                        return this._containerizeDetail(detail);
                    })}
                </PanelGroup>
            );
        } else {
            content = (
                <h4>
                    <Label>No Available Details</Label>
                </h4>
            );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

CategoryDetails.propTypes = {
    categoryDetails: PropTypes.array,
    actions: PropTypes.object
};

export default CategoryDetails;
