function Posts(props) {
    return  <section>
    {
      props.blogPosts.map((globe, index) => {
        return (<article key={index}>
          <h2>{globe.title}</h2>
          <p>{globe.body}</p> 
        </article>)
      })
    }
  </section>

    
}




export default Posts;