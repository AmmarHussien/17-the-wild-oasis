import { useState } from "react";
import axios from "axios";

function TextLogin() {
  const [phone, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://route-service.app/user-api/v1/login",
        {
          country_code: "02",
          phone,
          password,
          device_token:
            "cakDRZeZDjs:APA91bFhznZOVm1pvAWDPHpvWJyWY6ue8C5hX1wLX95ZQDHdnjv1kD47hHMK3QRIipV4FpMsA2FlyDG9FjEx4OXdI17LJIXrVFtwjgo3cC_EKBcS2Mg0MoKrEHDTcRh5XDs1lDez19Mp",
        }
      );

      // Assuming the response contains a token
      const { token } = response.data;
      localStorage.setItem("authToken", token);

      // Redirect or update UI as needed
      console.log("Login successful:", token);
    } catch (err) {
      console.error("Login failed:", err.response.data);
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default TextLogin;
