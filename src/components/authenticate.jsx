import { useState } from "react";


const Authenticate = () => {
    const [token, setToken] = useState("");
    const [authenticationResult, setAuthenticationResult] = useState(null);
    const [error, setError] = useState(null);
   
    const handleClick = async () => {
        try {
          const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          const data = await response.json();
      setAuthenticationResult(data);

    } catch (error) {
        setError(error.message);
      }
    };

    return ( 
    <div>
        <h2>Authenticate</h2>
        <input
        type="text"
        placeholder="Enter Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={handleClick}>Authenticate Token</button>

        {authenticationResult && (
            <div>
            <h3>Authentication Result</h3>
            <p>{JSON.stringify(authenticationResult)}</p>
            </div>
        )}

        {error && <p>Error: {error}</p>}
      </div>
    );
};

export default Authenticate;