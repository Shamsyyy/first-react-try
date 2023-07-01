import React, { ComponentType } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export type RouterProps = {
    location: ReturnType<typeof useLocation>;
    navigate: ReturnType<typeof useNavigate>;
    params: ReturnType<typeof useParams>;
};

export type WrappedProps = {
    router: RouterProps;
};

const withRouter = <P extends object>(
    Component: ComponentType<P & WrappedProps>
): React.FC<P> => (props: P) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const routerProps: RouterProps = { location, navigate, params };
    return <Component {...props} router={routerProps} />;
};

export default withRouter;