import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export const HomeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (user) {
        return <Navigate to="/dashboard/settings" replace />;
    }

    return (
        <div>
             {/*<Navigate to="/" replace />*/}
            <Navigate to="/Login" replace />
         
            {outlet}
        </div>
    );
};
