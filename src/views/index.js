
const React = require("react");
const ReactDOM = require("react-dom");
const log = require("./util.js").log;

require("../css/basic.css");


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
    getDefaultProps() {
        log.info("Super [getDefaultProps]");
    },
    getInitialState() {
        log.info("Super [getInitialState]");
        return {
            count: 0,
            isSub1Show: true,
            isSub2Show: true
        }
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
        return true;
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
            <fieldset>
                <legend>Component_Super</legend>
                <div>
                    <div className="btn" onClick={this.add}>this.state.count + 1</div>
                    <div className="btn" onClick={this.destory}>卸载Super</div>
                    <div className="btn" onClick={this.display1}>装载/卸载Sub_1</div>
                    <div className="btn" onClick={this.display2}>装载/卸载Sub_2</div>
                    <div>
                        <div>this.state: </div>
                        <ul className="list">
                            {
                                Object.getOwnPropertyNames(this.state).map((name, i) => <li key={i}>{name + "：" + (this.state[name]) } </li>)
                            }
                        </ul>
                    </div>
                </div>
                {
                    this.state.isSub1Show ?
                        <Component_Sub_1 count={this.state.count}/>
                        :
                        null
                }
                {
                    this.state.isSub2Show ?
                        <Component_Sub_2/>
                        :
                        null
                }
            </fieldset>
        )
    },
    add() {
        this.setState({
            count: this.state.count + 1
        })
    },
    destory() {
        ReactDOM.unmountComponentAtNode(document.querySelector("#container"));
    },
    display1() {
        this.setState({
            isSub1Show: !this.state.isSub1Show
        })
    },
    display2() {
        this.setState({
            isSub2Show: !this.state.isSub2Show
        })
    }
});


const Component_Sub_1 = React.createClass({
    getDefaultProps() {
        log.error("Sub_1 [getDefaultProps]");
        return {
            Sub_1DefProp: "Sub_1DefProp"
        }
    },
    getInitialState() {
        log.error("Sub_1 [getInitialState]");
        return {
            count: 0
        }
    },
    componentWillMount() {
        log.error("Sub_1 [componentWillMount]");
    },
    componentDidMount() {
        log.error("Sub_1 [componentDidMount]");
    },
    componentWillReceiveProps() {
        log.error("Sub_1 [componentWillReceiveProps]");
    },
    shouldComponentUpdate() {
        log.error("Sub_1 [shouldComponentUpdate]");
        return true;
    },
    componentWillUpdate() {
        log.error("Sub_1 [componentWillUpdate]");
    },
    componentDidUpdate() {
        log.error("Sub_1 [componentDidUpdate]");
    },
    componentWillUnmount() {
        log.error("Sub_1 [componentWillUnmount]");
    },
    render() {
        log.error("Sub_1 [render]");
        return (
            <fieldset>
                <legend>Component_Sub_1</legend>
                <div>
                    <div className="btn" onClick={this.add}>this.state.count + 1</div>
                    <div>
                        <div>this.state: </div>
                        <ul className="list">
                            <li>count: {this.state.count}</li>
                        </ul>
                        <div>this.props: </div>
                        <ul className="list">
                            {
                                Object.getOwnPropertyNames(this.props).map((name, i) => <li key={i}>{name + "：" + (this.props[name]) } </li>)
                            }
                        </ul>
                    </div>
                </div>
            </fieldset>
        )
    },
    add() {
        this.setState({
            count: this.state.count + 1
        })
    }
});

const Component_Sub_2 = React.createClass({
    getDefaultProps() {
        log.warn("Sub_2 [getDefaultProps]");
        return {
            Sub_2DefProp: "Sub_2DefProp"
        }
    },
    getInitialState() {
        log.warn("Sub_2 [getInitialState]");
        return {
            count: 0
        }
    },
    componentWillMount() {
        log.warn("Sub_2 [componentWillMount]");
    },
    componentDidMount() {
        log.warn("Sub_2 [componentDidMount]");
    },
    componentWillReceiveProps() {
        log.warn("Sub_2 [componentWillReceiveProps]");
    },
    shouldComponentUpdate() {
        log.warn("Sub_2 [shouldComponentUpdate]");
        return true;
    },
    componentWillUpdate() {
        log.warn("Sub_2 [componentWillUpdate]");
    },
    componentDidUpdate() {
        log.warn("Sub_2 [componentDidUpdate]");
    },
    componentWillUnmount() {
        log.warn("Sub_2 [componentWillUnmount]");
    },
    render() {
        log.warn("Sub_2 [render]");
        return (
            <fieldset>
                <legend>Component_Sub_2</legend>
                <div>
                    <div className="btn" onClick={this.add}>this.state.count + 1</div>
                    <div>
                        <div>this.state: </div>
                        <ul className="list">
                            <li>count: {this.state.count}</li>
                        </ul>
                        <div>this.props: </div>
                        <ul className="list">
                            {
                                Object.getOwnPropertyNames(this.props).map((name, i) => <li key={i}>{name + "：" + (this.props[name]) } </li>)
                            }
                        </ul>
                    </div>
                </div>
            </fieldset>
        )
    },
    add() {
        this.setState({
            count: this.state.count + 1
        })
    }
});

ReactDOM.render(<Component_Super/>, document.querySelector("#container"));
