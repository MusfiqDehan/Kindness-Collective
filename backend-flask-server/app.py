import json
from flask import Flask, jsonify

app = Flask(__name__)

# Load the initial data from the file
with open("data.json", "r") as f:
    donations = json.load(f)


@app.route("/api/v1/donations")
def get_donations():
    return jsonify(donations)


if __name__ == "__main__":
    app.run(debug=True)
