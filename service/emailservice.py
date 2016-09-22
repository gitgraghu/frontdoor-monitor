
import smtplib

from email.mime.text import MIMEText

#get firewall issue when sending out
def sendEmail(workflow):
	wmail = Email(workflow)
	msg = MIMEText(wmail.body)
	msg['Subject'] = 'Project Notification %s' % '!'
	stage = workflow.flow[0][0]
	email = stage.employee.email
	msg['From'] = 'youye@visa.com'
	msg['To'] = email

	print "sending email from " + msg['From'] 
	print "destination is :"
	print msg['To']
	print "Subject: " + msg['Subject']
	print "Body: " + wmail.body
	# s = smtplib.SMTP('localhost')
	# s.sendmail(msg['From'], [msg['To']], msg.as_string())
	# s.quit()

def constructEmailBody(workflow):
	team = workflow.team
	program = workflow.program
	rtn = workflow.rtn
	stage = workflow.flow[0][0]
	status = stage.status_desc
	# print "triggered by : " + status
	body = "This email is to notice you that '" + program + "' with RTN [" + rtn + "] for team '" + team + "' is now " + status
	# print body
	return body

class Email:

	def __init__(self, workflow):
		self.body = constructEmailBody(workflow)
