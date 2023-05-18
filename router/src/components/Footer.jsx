const Footer = () =>{

    const currentDate = new Date().toLocaleDateString();
  
    return(
      <div className="footer">
          <h4>Joshua Musira</h4>
          <h4>TheJitu Training Cohort 1</h4>
          <h4> Current date: {currentDate}</h4>
      </div>
    )
  }
  export default Footer;