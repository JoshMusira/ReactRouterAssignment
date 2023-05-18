

const Contact = () =>{

    return(
        <div className="mainDisplayContact">
            <div className="contactDisplay">
                 <h2>Leave a message</h2>
        <div className="cta">
            <form action="#" className="form-content">
            <div className="form-control">
                <label htmlFor="username">Username:</label>
                <input type="text" name="name" id="name" placeholder="Enter Name"/>
            </div>
            <div className="form-control">
                <label htmlFor="email">Enter Email:</label>
                <input type="email" name="name" id="name" placeholder="Enter Email"/>
            </div>
            <div className="form-control">
                <input type="submit" name="name" id="name" value="Subscribe"/>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default Contact;