import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar role="student" />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome Student 🎓</h1>

        <div className="subjects-grid">
          <div className="subject-card math">Mathematics</div>
          <div className="subject-card science">Science</div>
          <div className="subject-card english">English</div>
          <div className="subject-card history">History</div>
          <div className="subject-card cs">Computer Science</div>

          {/* Join Class navigates to LiveMeetRoom */}
          <div
            className="subject-card join-class"
            onClick={() => navigate("/live-meet")}
          >
            ➕ Join Class
          </div>
        </div>
      </div>
    </>
  );
}
