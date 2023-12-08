import { useState } from "react";
const SignUpForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
};

return (
    <div>
      <h2>Sign Up</h2>
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