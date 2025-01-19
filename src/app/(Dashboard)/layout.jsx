import TopNavBar from "app/ui/(Dashboard)/TopNavNar";
import BottomNavBar from "app/ui/(Dashboard)/BottomNavBar";

const DashboardLayout = (props) => {
    return (
        <>
            <TopNavBar />
            {props.children}
            <BottomNavBar />
        </>
    );
}

export default DashboardLayout;