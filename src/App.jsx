import { FiEdit3, FiTrash2 } from "react-icons/fi";

export default function App() {
  return (
    <div className="container">
      <div className="stats-container">
        <div className="stats-details">
          <h1 className="stats-title">todo done</h1>
          <p className="stats-text">keep it up!</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
        <div className="stats-numbers">
          <p>1</p>
          <p>/</p>
          <p>3</p>
        </div>
      </div>

      <form className="task-form">
        <input
          type="text"
          placeholder="write your task"
          className="task-input"
        />
        <button className="add-btn">+</button>
      </form>

      <div className="task-list">
        <div className="task-item">
          <div className="task checked">
            <div className="task-checkbox-container">
              <input
                type="checkbox"
                name="task"
                id="task"
                defaultChecked
                className="task-checkbox"
              />
              <label htmlFor="task" className="task-label"></label>
            </div>
            <p className="task-text">
              Learn React.js
            </p>
          </div>
          <div className="icons-container">
            <FiEdit3 className="edit-icon" />
            <FiTrash2 className="delete-icon" />
          </div>
        </div>
        <div className="task-item">
          <div className="task">
            <div className="task-checkbox-container">
              <input
                type="checkbox"
                name="task"
                id="task"
                className="task-checkbox"
              />
              <label htmlFor="task" className="task-label"></label>
            </div>
            <p className="task-text">
              Learn Javasript by creataing projects
            </p>
          </div>
          <div className="icons-container">
            <FiEdit3 className="edit-icon" />
            <FiTrash2 className="delete-icon" />
          </div>
        </div>
        <div className="task-item">
          <div className="task">
            <div className="task-checkbox-container">
              <input
                type="checkbox"
                name="task"
                id="task"
                className="task-checkbox"
              />
              <label htmlFor="task" className="task-label"></label>
            </div>
            <p className="task-text">
              Finish this project
            </p>
          </div>
          <div className="icons-container">
            <FiEdit3 className="edit-icon" />
            <FiTrash2 className="delete-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
