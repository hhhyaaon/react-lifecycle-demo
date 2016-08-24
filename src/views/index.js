
const React = require("react");
const ReactDOM = require("react-dom");
const log = require("./util.js").log;


const BasicMixin = {
    getInitialState() {
        log.warn("[mixin] getInitialState");
    },
    getDefaultProps() {
        log.warn("[mixin] getDefaultProps");
        return {
            name: "defName"
        }
    },
    componentWillMount() {
        log.warn("[mixin] componentWillMount");
    },
    componentDidMount() {
        log.warn("[mixin] componentDidMount");
    },
    componentWillReceiveProps() {
        log.warn("[mixin] componentWillReceiveProps");
    },
    // shouldComponentUpdate() {
    //     log.warn("[mixin] BasicMixin");
    // },
    componentWillUpdate() {
        log.warn("[mixin] componentWillUpdate");
    },
    componentDidUpdate() {
        log.warn("[mixin] componentDidUpdate");
    },
    componentWillUnmount() {
        log.warn("[mixin] componentWillUnmount");
    }
}



const Component_Super = React.createClass({
    displayName: "Component_Super",
    getDefaultProps() {
        log.info("Super [getDefaultProps]");
    },
    getInitialState() {
        log.info("Super [getInitialState]");
        return {}
    },
    componentWillMount() {
        log.info("Super [componentWillMount]");
    },
    componentDidMount() {
        log.info("Super [componentDidMount]");
    },
    componentWillReceiveProps() {
        log.info("Super [componentWillReceiveProps]");
    },
    shouldComponentUpdate() {
        log.info("Super [shouldComponentUpdate]");
    },
    componentWillUpdate() {
        log.info("Super [componentWillUpdate]");
    },
    componentDidUpdate() {
        log.info("Super [componentDidUpdate]");
    },
    componentWillUnmount() {
        log.info("Super [componentDidUpdate]");
    },
    render() {
        log.info("Super [render]");
        return (
            <div>
                <div>Component_Super</div>
                <Component_Sub/>
                <Component_Sub/>
            </div>
        )
    }

});


const Component_Sub = React.createClass({
    displayName: "Component_Sub",
    getDefaultProps() {
        log.error("Sub [getDefaultProps]");
        return {
            subDefProp: "subDefProp"
        }
    },
    getInitialState() {
        log.error("Sub [getInitialState]");
        return {}
    },
    componentWillMount() {
        log.error("Sub [componentWillMount]");
    },
    componentDidMount() {
        log.error("Sub [componentDidMount]");
    },
    componentWillReceiveProps() {
        log.error("Sub [componentWillReceiveProps]");
    },
    shouldComponentUpdate() {
        log.error("Sub [shouldComponentUpdate]");
    },
    componentWillUpdate() {
        log.error("Sub [componentWillUpdate]");
    },
    componentDidUpdate() {
        log.error("Sub [componentDidUpdate]");
    },
    componentWillUnmount() {
        log.error("Sub [componentWillUnmount]");
    },
    render() {
        log.error("Sub [render]");
        return (
            <div>Component_Sub</div>
        )
    }
});

ReactDOM.render(<Component_Super/>, document.querySelector("#container"));
