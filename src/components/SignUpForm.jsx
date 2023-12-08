import { useState } from "react";
const SignUpForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
const [token, setToken] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault();

		try {const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
		{ 
			method: "POST", 
			headers: { 
				"Content-Type": "application/json" 
			}, 
			body: JSON.stringify({ 
				username: username, 
				password: password 
			}) 
		});
const result = await response.json();
setToken(result.token);
console.log(token);
console.log(result);


    } catch (error) {
      setError(error.message);
    }
}

return (
    <div>
      <h2>Sign Up</h2> {error && <p>{error}</p> }
      <form onSubmit={handleSubmit}>
    	<label>
			Username: 
			<input 
				type="text" 
				value={username} 
				onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
        <label>
				Password: 
				<input 
					type="password" 
					value={password} 
					onChange={(e) => setPassword(e.target.value)} 
				/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;