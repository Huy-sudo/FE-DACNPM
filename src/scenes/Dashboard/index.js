import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts'
import { getList } from './actions'
import { connect } from 'react-redux'
import queryString from 'query-string'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = { 
            initial_filter_values: query_params,
        };

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Dashboard</span>
                    </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)