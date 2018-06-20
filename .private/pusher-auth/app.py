import json
from datetime import datetime

from flask import Flask, request
from flask_cors import CORS
import pusher


app = Flask(__name__)
CORS(app)

pusher_client = pusher.Pusher(
    app_id='app_id',
    key='key',
    secret='secret',
    cluster='eu',
    ssl=True
)

@app.route("/", methods=['GET'])
def index():
    return 'POST to /pusher/auth/'

@app.route("/pusher/auth/", methods=['POST'])
def pusher_authentication():
    auth = pusher_client.authenticate(
        channel=request.form['channel_name'],
        socket_id=request.form['socket_id']
    )
    return json.dumps(auth)
