const Page2 = () => {
    return (
      <div className="content">
        <h1>Node.js Connection Test Page</h1>

        <form action="http://localhost:8080/post" method="post" className="form">
          <button type="submit">Connected?</button>
        </form>
      </div>
    );
}
 
export default Page2;