const Blogs = ({name,updates}) =>{

    return(
        
            <div className="DisplayBlog">


                <h2>{name}</h2>
                <p>{updates}</p>
                
            </div>
                
               
        
    )
}

export default Blogs;