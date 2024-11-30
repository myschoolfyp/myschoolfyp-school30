"use client";
import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName, lastName, email, password, userType, contactNumber, employeeCode, adminCode
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user.");
      }

      alert("Registration successful!");
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUserType("");
      setContactNumber("");
      setEmployeeCode("");
      setAdminCode("");
    } catch (error) {
      setError("User Already Exist");
    }
  };

  return (
    <div className="screenMiddleDiv bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="formDiv">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-center text-2xl font-bold mb-4 text-teal-700">Registration</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label htmlFor="firstName" className="formLabel text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="formLabel text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="formLabel text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="password" className="formLabel text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="formLabel text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="userType" className="formLabel text-gray-700">User Type</label>
            <select 
              id="userType" 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded" 
              required
            >
              <option value="" disabled>Select User Type</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <label htmlFor="contactNumber" className="formLabel text-gray-700">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
            />
          </div>

          {userType === "Teacher" && (
            <div>
              <label htmlFor="employeeCode" className="formLabel text-gray-700">Employee Code</label>
              <input
                type="text"
                id="employeeCode"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
                required
                className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
              />
            </div>
          )}
          
          {userType === "Admin" && (
            <div>
              <label htmlFor="adminCode" className="formLabel text-gray-700">Admin Code</label>
              <input
                type="text"
                id="adminCode"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                required
                className="w-full bg-white text-black border border-[#A0B2B2] focus:border-[#0F6466] focus:outline-none p-2 rounded"
              />
            </div>
          )}

          <button type="submit" className="w-full py-2 bg-teal-600 text-white hover:bg-teal-700 rounded">Register</button>

          <div className="text-center mt-4">
            Already have an account? <a href="Login#" className="text-teal-600">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}