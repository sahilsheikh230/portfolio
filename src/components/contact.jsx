export default function Contact() {
  return (
    <div className="container mt-5 mb-5" id="contact">
      <h3 className="text-center mb-4">Contact Me</h3>

      <form 
        action="https://formspree.io/f/mldagzzj"
        method="POST" 
        className="mx-auto p-4  rounded" 
        style={{ maxWidth: "500px",  }}
      >

        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
            name="message" 
            className="form-control" 
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Send Message
        </button>

      </form>
    </div>
  );
}
