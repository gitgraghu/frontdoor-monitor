from flask import Flask, send_file, jsonify, request
import json
from service import service

app = Flask(__name__)


@app.route('/')
def index():
    return send_file("templates/index.html")

@app.route('/api/project', methods=['POST'])
def createProject():
    newproject = request.json
    workflowobj = service.createNewSimpleWorkFlowStage(newproject)
    s = json.dumps(workflowobj, default=lambda o: o.__dict__, sort_keys=True, indent=4)
    return s

# @app.route('/api/project', methods=['GET'])
# def getProjects():
#     ##


if __name__ == '__main__':
    app.run(debug=True)
