import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import './index.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div>
            <ApprovalCard>
                <div>
                    <h4>
                        Warning!!
                </h4>
                    Are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today" profileImage={faker.image.avatar()} commentText="My comment 1" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="yesterday" profileImage={faker.image.avatar()} commentText="My comment 2" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="yesterday" profileImage={faker.image.avatar()} commentText="My comment 3" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));