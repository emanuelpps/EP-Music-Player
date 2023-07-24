import React from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  return (
    <div class="progressBar">
      <div class="progress">
        <div
          class="progress-bar w-75"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
