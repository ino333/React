import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';
import { useEffect } from 'react';

const SampleContainer = ({
    getPost, getUsers,
    post, users,
    loadingPost, loadingUsers
}) => {
    // 클래스 컴포넌트의 경우 componentDidMount
    useEffect(() => {
        // useEffect에 피라미터로 전달하는 함수에는 async를 사용X
        // 내부에 async 함수를 선언, 호출한다.
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch(e) {
                console.log(e);
            }
        };
        fn();
    }, [getPost, getUsers]);
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);