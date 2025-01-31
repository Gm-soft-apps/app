import TopNavBar from "app/ui/(Dashboard)/TopNavNar";
import BottomNavBar from "app/ui/(Dashboard)/BottomNavBar";

const DashboardLayout = (props) => {
    return (
        <>
            <TopNavBar />
            {props.children}
            <div className="mt-5">&nbsp;</div>
            <BottomNavBar />
        </>
    );
}

export default DashboardLayout;