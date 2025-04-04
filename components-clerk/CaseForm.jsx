import { useState } from "react";

export default function FileCaseForm() {
  const [formData, setFormData] = useState({
    title: "",
    caseType: "",
    partyA: "",
    partyB: "",
    details: "",
    priority: "low",
    filingDate: "",
    partyAContact: { phone: "", email: "", address: "" },
    partyBContact: { phone: "", email: "", address: "" },
  });
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setDocuments(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, JSON.stringify(formData[key]));
    });

    for (let file of documents) {
      form.append("documents[]", file);
    }

    try {
      const res = await fetch("/api/cases", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Case filed successfully!");
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting case:", error);
      alert("Submission failed!");
    } finally {
      setUploading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg w-[1000px] left-0 absolute">
      <h2 className="text-xl font-bold mb-4">File a New Case</h2>

      <input type="text" name="title" placeholder="Case Title" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
      <input type="text" name="caseType" placeholder="Case Type" onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <input type="text" name="partyA" placeholder="Party A" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
      <input type="text" name="partyB" placeholder="Party B" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
      <textarea name="details" placeholder="Case Details" onChange={handleChange} className="w-full p-2 border rounded mb-2" required></textarea>
      <select name="priority" onChange={handleChange} className="w-full p-2 border rounded mb-2">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="date" name="filingDate" onChange={handleChange} className="w-full p-2 border rounded mb-2" />

      <label>Upload Documents:</label>
      <input type="file" multiple accept="application/pdf" onChange={handleFileChange} className="w-full p-2 border rounded mb-2" />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Case</button>
    </form>
  );
}
