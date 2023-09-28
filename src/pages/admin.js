import AdminInputs from "../components/adminInputs";

export default function Admin() {
  return (
    <>
      <h1 className="display-6 p-2">
        <b>Admin Panel</b>
      </h1>
      <div className="mx-2 shadow d-flex admin">
        <div className="w-25 h-100 bg-dark">
          <div className="w-100 h-100 text-center d-flex flex-column justify-content-between">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                alt="teacher"
                width="60%"
                className="mt-5 mb-5"
              />
            </div>

            <div className="mt-5 text-light mb-5">
              <p className="p-2 fs-5 border rounded border-light shadow w-50 mx-auto mb-3">
                JavaScript Quiz
              </p>
            </div>

            <div className=" mb-5">
              <button className="btn btn-light px-5">Log Out</button>
            </div>
          </div>
        </div>

        <div className="w-75 bg-light px-5 pt-4">
          <h3>Create your Quiz</h3>
          <AdminInputs />
        </div>
      </div>
    </>
  );
}
