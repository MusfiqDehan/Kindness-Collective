import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def index():
  return 'Hello from Flask!'


# Load the initial data from the file
with open("data.json", "r") as f:
  donations = json.load(f)


# Get API data
@app.route("/api/v1/donations")
def get_donations():
  response = jsonify(donations)
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response


app.run(host='0.0.0.0', port=81)
