import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
    useEffect(() => {
        navigate('/work');
    }, []);
    return null;
};

export default NotFoundPage;
