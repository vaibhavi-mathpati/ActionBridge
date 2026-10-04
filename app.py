from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "ActionBridge AI backend is running!"


@app.route("/suggest", methods=["POST"])
def suggest():
    data = request.get_json()

    task = data.get("task", "").strip()

    if not task:
        return jsonify({
            "error": "Please enter a task."
        }), 400

    # Temporary smart suggestion
    suggestions = [
        f"Start with the smallest step of: {task}",
        "Spend just 10 minutes on it first.",
        "Break the task into 2–3 smaller actions.",
        "Set a simple deadline for the next step."
    ]

    return jsonify({
        "task": task,
        "suggestions": suggestions
    })


if __name__ == "__main__":
    app.run(debug=True)