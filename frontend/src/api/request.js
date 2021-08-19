export const request = (path, opts = {}) => {
    // Adding contentType and registration token to the request every time
    const headers = Object.assign({}, opts.headers || {}, {
        "Content-Type": "application/json",
        //        token:
        //            sessionStorage.getItem("authToken") ||
        //            localStorage.getItem("authToken") ||
        //            "",
    });
    // default method is post, or it can be provided in opts
    return new Promise((resolve, reject) => {
        fetch(path, Object.assign({ method: "POST" }, opts, { headers }))
            .then((result) => {
                // 401 error for missing auth is just a convention from previous project
                resolve(result);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
};
