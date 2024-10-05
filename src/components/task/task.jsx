import "./task.scss";

export default function Task({ task, id, handleDelete, handleDone }) {
  return (
    // Conditional class applied based on task.done to indicate whether the task is checked (completed).
    <div key={id} className={"taskContainer" + (task.done ? " checked" : "")}>
      <div className="task" onClick={() => handleDone(id)}>
        <div>
          {task.done ? (
            // Checkmark SVG displayed when the task is done.
            <svg className="check-icon" viewBox="0 0 25 25" fill="none">
              <path
                d="M4 12L8.94975 16.9497L19.5572 6.34326"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Empty checkbox SVG displayed when the task is not done.
            <svg className="uncheck-icon" viewBox="0 0 25 25">
              <path d="M3,18V6A2,2,0,0,1,5,4H19a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H5A2,2,0,0,1,3,18Z" />
            </svg>
          )}
        </div>
        <p className={task.done ? "checked" : ""}>{task.text}</p>
      </div>
      <div className="delete" title="delete" onClick={() => handleDelete(id)}>
        <div>
          <svg viewBox="0 0 25 25">
            <path d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z" />
            <path d="M11.6066 22H12.3935C15.101 22 16.4547 22 17.3349 21.1368C18.2151 20.2736 18.3052 18.8576 18.4853 16.0257L18.7448 11.9452C18.8425 10.4086 18.8913 9.64037 18.4498 9.15352C18.0082 8.66667 17.2625 8.66667 15.7712 8.66667H8.22884C6.7375 8.66667 5.99183 8.66667 5.55026 9.15352C5.1087 9.64037 5.15756 10.4086 5.25528 11.9452L5.51479 16.0257C5.69489 18.8576 5.78494 20.2736 6.66513 21.1368C7.54532 22 8.89906 22 11.6066 22Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
