import React, { useState } from "react";
import "./MadlibsForm.css";

function MadlibsForm({ makeStory }) {
  const initalForm = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [form, setForm] = useState(initalForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const { noun, noun2, adjective, color } = form;
    makeStory(noun, noun2, adjective, color);
    console.log(form);
  };

  const check = () => {
    console.log(Object.values(form));
    return Object.values(form).some((v) => v === "");
  };
  console.log("form");
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="noun"
          id="noun"
          placeholder="noun"
          onChange={handleChange}
          value={form.noun}
        />
        <input
          type="text"
          name="noun2"
          id="noun2"
          placeholder="noun2"
          onChange={handleChange}
          value={form.noun2}
        />
        <input
          type="text"
          name="adjective"
          id="adjective"
          placeholder="adjective"
          onChange={handleChange}
          value={form.adjective}
        />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="color"
          onChange={handleChange}
          value={form.color}
        />
        <button onClick={handleSumbit} disabled={check()}>
          Get Story
        </button>
      </form>
    </div>
  );
}

export default MadlibsForm;
