import './FormCard.css';

const Form = () => {
  return (
    <div className="card1">
      <h3>Subscribe to our company updates</h3>
      <form>
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" name="email" required />
        <div>
          <input type="checkbox" id="marketing" name="marketing" />
          <label htmlFor="marketing">I agree to receive marketing communication from LTIMindtree</label>
        </div>
        <p>
          By submitting my details I agree to LTIMindtree using my personal data as per the <a href="#">LTIMindtree Privacy policy</a>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;