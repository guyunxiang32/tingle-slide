var classnames = require('classnames');

class SlideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var t = this;
        var arr = [];
        for (let i = 0; i < t.props.num; i++) {
            arr.push(<div key={i} className={classnames({
                        "tR4 tM2 tSlideNavItem": true,
                        "active": i == t.props.active
                    })}></div>)
        }
        return (
            <div className="tSlideNav tFBH tFBAC tFBJC">
                {arr}
            </div>
        )
    }
}

SlideNav.defaultProps = {
    num: 0,
    active: 0
}

// http://facebook.github.io/react/docs/reusable-components.html
SlideNav.propTypes = {
    num: React.PropTypes.number,
    active: React.PropTypes.number
}

module.exports = SlideNav;