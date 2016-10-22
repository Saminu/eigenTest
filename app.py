__author__ = 'Simba'
from flask import Flask
from flask import jsonify
from flask_cors import CORS
import read_text

app = Flask(__name__)
CORS(app)

@app.route('/api/v1/text')
def address_quiddihub_returner():
    string = read_text.cleaned_data
    return jsonify(string)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8085)