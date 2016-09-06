import React, {PropTypes} from 'react';
import Sidebar from './common/Sidebar';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Sidebar/>
                </div>
                <div className="main-content-container">
                  {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
