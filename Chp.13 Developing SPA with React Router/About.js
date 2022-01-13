
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const About = () => {
    const { search } = useLocation();
    const query = qs.parse(search, {
        // 문자열 맨 앞의 ?를 생략한다.
        ignoreQueryPrefix: true
    })
    // 쿼리의 파싱 결과 값은 문자열이다.
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터의 기초를 실습하는 예제 프로젝트이다.</p>
            {showDetail && <p>detail 값을 true로 설정했다.</p>}
        </div>
    );
};

export default About;