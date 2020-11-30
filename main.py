from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('enter.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/lidostas')
def about():
    return render_template('lidostas.html')

@app.route('/lidmašīnas')
def contact():
    return render_template('lidmasinas.html')

@app.route('/reisi')
def chat():
    return render_template('reisi.html')

app.run(host='0.0.0.0', port=80, debug=True)

