import React from 'react';
import {
    useParams,
    useLocation,
    useSearchParams,
    useNavigate
}
    from "react-router-dom";


const withHooksHOC = (Component) => {
    return (props) => {
        const params = useParams();
        const Location = useLocation();
        const searcher = useSearchParams();
        const nav = useNavigate()    ///////////instead of useHistory
        return (
            <Component
                param={params}
                location={Location}
                searcher={searcher}
                nav={nav}
                {...props} />);
    };
};
export default withHooksHOC