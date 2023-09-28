import QButton from "../components/compbutton";

export default function AdminInputs() {
  return (
    <div>
      <div className="w-100">
        <input
          type="text"
          placeholder="Quiz Name"
          className="w-25 fs-5 border-danger me-4 mb-4"
        />

        <input
          type="text"
          placeholder="Quiz Duration"
          className="w-25 fs-5 border-danger me-4 mb-4"
        />

        <input
          type="text"
          placeholder="Quiz key"
          className="w-25 fs-5 border-danger me-4 mb-4"
        />

        <input
          type="text"
          placeholder="Quiz Open"
          className="w-25 fs-5 border-danger me-4 mb-4"
        />

        <input
          type="text"
          placeholder="Quiz Open"
          className="w-50 fs-5 border-danger me-4 mb-4"
        />
      </div>
    </div>
  );
}
