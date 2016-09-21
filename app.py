from flask import Flask, send_file, jsonify, request
import json
from service import service
from service import db

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


@app.route('/api/project', methods=['GET'])
def getProjects():
    flowsres = []
    flows = db.findAllFlows()
    for flow in flows:
        flowjson = json.dumps(flow, default=lambda o: o.__dict__, sort_keys=True, indent=4)
        flowsres.append(flowjson)
    return json.dumps(flowsres)


@app.route('/api/getpms', methods=['GET'])
def getPMs():
    pmres = []
    pms = db.getAllPMs()
    for pm in pms:
        pmjson = json.dumps(pm, default=lambda o: o.__dict__, sort_keys=True, indent=4)
        pmres.append(pmjson)
    return json.dumps(pmres)


@app.route('/api/getanalysts', methods=['GET'])
def getAnalysts():
    ares = []
    analysts = db.getAllAnalysts()
    for analyst in analysts:
        ajson = json.dumps(analyst, default=lambda o: o.__dict__, sort_keys=True, indent=4)
        ares.append(ajson)
    return json.dumps(ares)

@app.route('/api/findbyRTN', methods=['POST'])
def findByRTN():
    flowsres = []
    RTNreq = request.json
    RTN = RTNreq['RTN']
    flows = db.getFlowByRTN(RTN)
    for flow in flows:
        flowjson = json.dumps(flow, default=lambda o: o.__dict__, sort_keys=True, indent=4)
        flowsres.append(flowjson)
    return json.dumps(flowsres)

if __name__ == '__main__':
    app.run(debug=True)
