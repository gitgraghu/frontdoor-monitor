#!c:/python27/python

from pymongo import MongoClient
from bson import json_util
from domain import Workflow
from domain import Workstage
from domain import Employee
import json
import bson

client = MongoClient()
flowDB = client['flow']
	#default local:27017

def insertDummy(dummyData):
	s = json.dumps(dummyData, default=lambda o: o.__dict__, sort_keys=True, indent=4)
	s = s.replace('$','')
	print "inserting:\n" + s + "\n..."
	result = flowDB.dummy.insert(json.loads(s))
	print "inserted!"
	return result

def findAllDummy():
	cs = flowDB.dummy.find()
	for cursor in cs:
		print (cursor)

def updateFlow(workflow):
	w = json.dumps(workflow, default=lambda o: o.__dict__, sort_keys=True, indent=4)
	fl = json.dumps(workflow.flow, default=lambda o: o.__dict__, sort_keys=True, indent=4)
	fl = fl.replace('$','')
	print "updating:\n" + w + "\n..."
	obj_id = bson.ObjectId(workflow._id['$oid'])
	result = flowDB.dummy.update({'_id':obj_id},{'$set':{'flow':json.loads(fl)}}, False, False)
	print "updated! " + str(result)

def transformFlowCursor(cursor):
	res = []
	for fc in cursor:
		print fc
		f = Workflow(json.dumps(fc,default=json_util.default))
		st1 = []
		for stage1 in f.flow[0]:
			st1.append(constructStage(stage1))
		st2 = []
		for stage2 in f.flow[1]:
			st2.append(constructStage(stage2))
		st3 = []
		for stage3 in f.flow[2]:
			st3.append(constructStage(stage3))
		f.flow[2] = st3
		f.flow[1] = st2
		f.flow[0] = st1
		res.append(f)
	return res

def findAllFlows():
	cursor = flowDB.dummy.find()
	res = transformFlowCursor(cursor)
	if(len(res)<1):
		print "\n\nNothing found!!\n\n"
	return res

def findByFlowId(flowId):
	cursor = flowDB.dummy.find({"flow_ID":flowId})
	res = transformFlowCursor(cursor)
	if(len(res)>1):
		print "\n\n!!!!!!!!! Duplicate flow id found !!!!!!!!\n\n"
	return res

def getFlowByRTN(rtn):
	cursor = flowDB.dummy.find({"rtn":rtn})
	res = transformFlowCursor(cursor)
	if(len(res)<1):
		print "\n\nNothing found!!\n\n"
	return res

def constructStage(stage_mongo):
	s = Workstage(json.dumps(stage_mongo, default=json_util.default), None, None, None)
	emongo = s.employee
	em_obj = Employee(None, None, None, json.dumps(emongo, default=json_util.default))
	s.assignEmployee(em_obj)
	return s

def getEmployeeById(eid):
	cursor = flowDB.employee.find({"eid":eid})
	em = None
	for ec in cursor:
		em = Employee(None, None, None, json.dumps(ec,default=json_util.default))
		print "employee found:"
		print em.__dict__
	return em

def insertEmployee(em):
	ems = json.dumps(em, default=lambda o: o.__dict__, sort_keys=True, indent=4)
	print "inserting:\n" + ems + "\n..."
	flowDB.employee.insert(json.loads(ems))
	print "inserted!"	

def getAllEmployees():
	cursor = flowDB.employee.find()
	ems = []
	for ec in cursor:
		em = Employee(None, None, None, json.dumps(ec,default=json_util.default))
		print "employee found:"
		print em.__dict__
		ems.append(em)
	return ems

def getAllPMs():
	ems = getAllEmployees()
	pms = filter(lambda x : x.role=="PM" or x.role=="Project Manager", ems)
	return pms

def getAllAnalysts():
	ems = getAllEmployees()
	ans = filter(lambda x : x.role=="Analyst", ems)
	return ans


