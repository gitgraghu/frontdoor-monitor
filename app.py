from flask import Flask, send_file, jsonify, request

app = Flask(__name__)


@app.route('/')
def index():
    return send_file("templates/index.html")

@app.route('/api/project', methods=['POST'])
def createProject():
    return jsonify({"result" : "Success"});


if __name__ == '__main__':
    app.run(debug=True)
