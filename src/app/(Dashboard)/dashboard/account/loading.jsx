const LoadingProfile = () => {
    return (
        <div id="profile" className="mx-1">
            <div className="card p-3">
                <div className="mb-3 text-center">
                    <img className="rounded-pill placeholder" alt="" height="150px" width="150px" />
                </div>
                <div className="placeholder-wave">
                    <h2  className="placeholder col-12"></h2>
                    <div className="my-1 placeholder col-12"></div>
                    <div className="my-1 placeholder col-12"></div>
                    <div className="my-1 placeholder col-12"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingProfile;