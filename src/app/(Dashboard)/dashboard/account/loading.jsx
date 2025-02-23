import Loading from "app/ui/AuthForm/loading";

const LoadingProfile = () => {
    return (
        <div id="profile" className="position-relative fs-5 h-100 w-100 d-flex justify-content-center align-items-center">
            {/* <div className="card p-3">
                <div className="mb-3 text-center">
                    <img className="rounded-pill placeholder" alt="" height="150px" width="150px" />
                </div>
                <div className="placeholder-wave">
                    <h2  className="placeholder col-12"></h2>
                    <div className="my-1 placeholder col-12"></div>
                    <div className="my-1 placeholder col-12"></div>
                    <div className="my-1 placeholder col-12"></div>
                </div>
            </div> */}
            <div><Loading/></div>
        </div>
    );
}

export default LoadingProfile;