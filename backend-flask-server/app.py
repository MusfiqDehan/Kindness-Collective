import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def index():
  return '''
  <div style="text-align: center; width:100%; height:100vh">
    <img src="frontend-react/public/logo.png" alt="kindness-collective-logo" style="width:5rem; height:5rem;">
    <h1>Kindness Collective</h1>
    <br>
    <p>Backend Flask Server</p>
    <br>
    <a href="https://kindness-collective.onrender.com/api/v1/donations">Go to API Endpoint</a>
  </div>
  '''


# Load the initial data from the file
with open("data.json", "r") as f:
  donations = json.load(f)


# Get API data
@app.route("/api/v1/donations")
def get_donations():
  response = jsonify(donations)
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response


if __name__ == "__main__":
    app.run(debug=False)
