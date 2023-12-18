// Form.jsx

function Form({ handleChange, handleSubmit, value, buttonType }) {
    return (
      <form className="container mt-4 p-0">
        {/* Input field for the name of the person whos info populates the record*/}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={value.name || ''}
          />
        </div>
        {/* Input field for the allergy records's course */}
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
          Course:
          </label>
          <input
            type="text"
            className="form-control"
            id="course"
            name="course"
            onChange={handleChange}
            value={value.course || ''}
          />
        </div>
        {/* Input field for the allergy records's allergy */}
        <div className="mb-3">
          <label htmlFor="allergy" className="form-label">
          Allergy:
          </label>
          <input
            type="text"
            className="form-control"
            id="allergy"
            name="allergy"
            onChange={handleChange}
            value={value.allergy || ''}
          />
        </div>
        {/* Input field for the allergy records's medication */}
        <div className="mb-3">
          <label htmlFor="medication" className="form-label">
          Medication:
          </label>
          <input
            type="checkbox" /*medication is a Boolean so input type is a checkbox */
            className="form-check-input"
            id="medication"
            name="medication"
            onChange={handleChange}
            checked={value.medication || false} /*Use checked attribute for boolean value*/
          />
          
        </div>
        {/* Input field for the allergy records's title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
          Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
            value={value.title || ''}
          />
        </div>
        {/* Button to submit the form */}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          {buttonType}
        </button>
      </form>
    );
  }
  
  export default Form;