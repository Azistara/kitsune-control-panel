const Page2 = () => {
    return (
      <div className="content">
        <h1>Node.js Connection Test Page</h1>

        <form action="http://localhost:8080/cpu" method="get" className="form">
          <button type="submit">CPU Connected?</button>
        </form>

        <form action="http://localhost:8080/mem" method="get" className="form">
          <button type="submit">Memory Connected?</button>
        </form>
      </div>
    );
}
 
export default Page2;