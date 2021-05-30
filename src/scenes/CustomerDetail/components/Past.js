import React from 'react';
import { Steps, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const { Step } = Steps;

const Past = ({ customerDetail, loading }) => {
    return (
        <div>
            <Steps progressDot current={4} direction="vertical">
                <Step title="Finished" description="This is a description. This is a description." />
                <Step title="Finished" description="This is a description. This is a description." />
                <Step title="In Progress" description="This is a description. This is a description." />
                <Step title="Waiting" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
    );
}

export default Past;
